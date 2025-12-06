"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const gifts = [
  {
    id: 1,
    route: "/song",
    label: "Cat with flower",
    image: "/images/conflorecita.png",
  },
  {
    id: 2,
    route: "/gallery",
    label: "Two cats forming heart",
    image: "/images/dosgatos.png",
  },
  {
    id: 3,
    route: "/anniversary",
    label: "Blushing cat",
    image: "/images/timido.png",
  },
]

export default function PresentsPage() {
  const router = useRouter()
  const [hoveredGift, setHoveredGift] = useState<number | null>(null)

  return (
    <main
      className="min-h-screen bg-romantic-surface flex items-center justify-center p-4 animate-fade-in"
      style={{
        backgroundImage:  "url('https://media.istockphoto.com/id/2167546503/es/foto/papel-pintado-marfil-que-parece-capas-de-papel-arrugado-fondo-elegante-y-sostenible.jpg?s=612x612&w=0&k=20&c=FZI1lFXwZVShoXqIqGgmeBLxoJiYt7GZy_Jjf3My7o4=')",
         backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center py-10 md:py-14">
        <h1 className="font-marker text-3xl md:text-4xl text-[#2d2d2d] mb-10 tracking-wide text-center">
          PARA TI 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {gifts.map((gift) => (
            <button
              key={gift.id}
              onClick={() => router.push(gift.route)}
              onMouseEnter={() => setHoveredGift(gift.id)}
              onMouseLeave={() => setHoveredGift(null)}
              className={`
                relative w-40 h-40 md:w-44 md:h-44 
                bg-[#a16b6b] rounded-2xl
                flex items-center justify-center
                overflow-hidden
                transition-all duration-300 ease-out
                ${hoveredGift === gift.id ? "scale-110 shadow-2xl rotate-2" : ""}
                focus:outline-none focus:ring-4 focus:ring-pink-400
              `}
              aria-label={`Open gift: ${gift.label}`}
            >
              <img src={gift.image || "/placeholder.svg"} alt={gift.label} className="w-32 h-32 object-contain" />
              <span className="sr-only">{gift.label}</span>
            </button>
          ))}
        </div>

        <p className="font-marker text-lg md:text-xl text-[#2d2d2d] tracking-wide">PRESIONA UNO PARA VER</p>
      </div>
    </main>
  )
}

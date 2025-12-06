"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const CAT_IMAGE = "/images/whatsapp-20image-202025-12-05-20at-202.jpeg"

export default function WelcomePage() {
  const router = useRouter()
  const [hoveredButton, setHoveredButton] = useState<"yes" | "no" | null>(null)

  const handleYes = () => {
    router.push("/presents")
  }

  const handleNo = () => {
    router.push("/no-choice")
  }

  return (
    <main
      className="min-h-screen bg-romantic-surface flex items-center justify-center p-4"
      style={{
        backgroundImage:  "url('https://media.istockphoto.com/id/2167546503/es/foto/papel-pintado-marfil-que-parece-capas-de-papel-arrugado-fondo-elegante-y-sostenible.jpg?s=612x612&w=0&k=20&c=FZI1lFXwZVShoXqIqGgmeBLxoJiYt7GZy_Jjf3My7o4=')",
         backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col items-center py-12 md:py-16">
        <h1 className="font-marker text-3xl md:text-4xl text-[#2d2d2d] mb-8 tracking-wide">POR FAVOR ACEPTA EL REGALO</h1>

        <div className="relative w-70 h-56 mb-8 flex items-center justify-center">
          <img
            src="/images/pagina1.png"
            alt="Cute blue cat holding a heart and tulip"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex gap-6 md:gap-12">
          <button
            onClick={handleYes}
            onMouseEnter={() => setHoveredButton("yes")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              px-10 md:px-14 py-3 md:py-4 
              bg-[#c04242] text-white 
              text-xl md:text-2xl font-marker
              rounded-full border-4 border-[#8b5e5e]
              transition-all duration-200 ease-out
              ${hoveredButton === "yes" ? "scale-110 shadow-lg bg-[#9b6b6b]" : ""}
              focus:outline-none focus:ring-4 focus:ring-pink-400
            `}
            aria-label="Accept the gift"
          >
            SI
          </button>
          <button
            onClick={handleNo}
            onMouseEnter={() => setHoveredButton("no")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`
              px-10 md:px-14 py-3 md:py-4 
               bg-[#c04242] text-white 
              text-xl md:text-2xl font-marker
              rounded-full border-4 border-[#8b5e5e]
              transition-all duration-200 ease-out
              ${hoveredButton === "no" ? "scale-110 shadow-lg bg-[#9b6b6b]" : ""}
              focus:outline-none focus:ring-4 focus:ring-pink-400
            `}
            aria-label="Decline the gift"
          >
            NO
          </button>
        </div>
      </div>
    </main>
  )
}

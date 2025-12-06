"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CAT_GUN_IMAGE = "/images/whatsapp-20image-202025-12-05-20at-202.jpeg"

export default function NoChoicePage() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main
      className="min-h-screen bg-romantic-surface flex items-center justify-center p-4 animate-fade-in"
      style={{
        backgroundImage:   "url('https://media.istockphoto.com/id/2167546503/es/foto/papel-pintado-marfil-que-parece-capas-de-papel-arrugado-fondo-elegante-y-sostenible.jpg?s=612x612&w=0&k=20&c=FZI1lFXwZVShoXqIqGgmeBLxoJiYt7GZy_Jjf3My7o4=')",
         backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-3xl flex flex-col items-center py-12 md:py-16">
        <h1 className="font-marker text-3xl md:text-4xl text-[#2d2d2d] mb-8 tracking-wide">COMO TE ATREVES?!</h1>

        <div className="relative w-56 h-40 md:w-72 md:h-48 mb-8 flex items-center justify-center">
          <img
            src="/Pistolita.png"
            alt="Angry cat with gun"
            className="w-full h-full object-contain"
          />
        </div>
       

        <button
          onClick={() => router.push("/")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            px-10 md:px-14 py-3 md:py-4 
            bg-romantic-light text-white 
            text-lg md:text-xl font-marker
            rounded-full border-4 border-[#8b5e5e]
            transition-all duration-200 ease-out
            ${isHovered ? "scale-110 shadow-lg bg-[#9b6b6b]" : ""}
            focus:outline-none focus:ring-4 focus:ring-pink-400
          `}
          aria-label="Try again"
        >
          INTENTAR DE NUEVO
        </button>
      </div>
    </main>
  )
}

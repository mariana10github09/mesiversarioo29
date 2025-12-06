"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push("/presents")}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#a13a3a] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#8b3a3a] hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-400"
      aria-label="Volver a regalos"
    >
      <ArrowLeft className="w-6 h-6" />
    </button>
  )
}

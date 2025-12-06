"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import BackButton from "@/components/back-button";

const CAT_COUPLE = "/images/dosgatos.png";
const CAT_BLUSHING = "/images/florecitasola.png";
const CAT_TULIP = "/images/timido.png";
const CAT_MUSCULAR_BABY = "images/conflorecita.png";
const CAT_CHRISTMAS = "/images/proteje.png";

const SPOTIFY_TRACKS = [
  "https://open.spotify.com/track/2KQXjCFwTCK5VwnCrKvMHY?si=I0xh192MRS64N8XmCKL7wQ",
  "https://open.spotify.com/track/0gjhhuqKxswtR1KzYSpSfd?si=KhagiF2ATZq2wK5P0XLTDA",
  "https://open.spotify.com/track/7lYKq59aOgRnRlrjuTIvJv?si=nAjUA_iUS2WOCbbh6BDA1w",
];

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentTrackIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentTrackIndex(null);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Fondo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/cherry-blossoms-japan-temple-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative w-full max-w-5xl animate-fade-in">
        <div className="relative w-full aspect-16/10 md:aspect-video">

          {/* 1. Foto principal */}
          <div
            onClick={() => openModal(0)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-[45%] md:w-[40%] z-10 cursor-pointer"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/love5.jpeg"
                alt="Couple kissing"
                className="w-full aspect-3/4 object-cover"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
              </div>
            </div>
          </div>

          {/* 2. Tweet card */}
          <div
            onClick={() => openModal(1)}
            className="absolute right-4 md:right-12 top-4 md:top-8 w-[45%] md:w-[38%] bg-white rounded-2xl p-3 md:p-4 shadow-2xl z-20 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-pink-200">
                <img
                  src="/images/love3.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-marker text-sm md:text-base text-black">Mariana_204</span>
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-xs md:text-sm font-handwritten">@xJelatin</span>
              </div>
            </div>
            <p className="text-sm md:text-base mb-3 text-black font-handwritten leading-relaxed">
              Que suerte la mía
              <br />Encontrarte.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="/images/love2.jpeg"
                  alt="Couple silhouette"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="/images/love1.jpeg"
                  alt="Cute couple selfie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-500 text-xs font-handwritten">
              <span>09:15 AM - 05 Dec 25</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
              </svg>
            </div>
          </div>

          {/* 3. Cámara */}
          <div
            onClick={() => openModal(2)}
            className="absolute right-4 md:right-8 bottom-4 md:bottom-8 w-[35%] md:w-[28%] z-20 cursor-pointer"
          >
            <div className="bg-gray-900 rounded-lg p-1.5 shadow-2xl">
              <div className="relative aspect-4/3 rounded overflow-hidden">
                <img
                  src="/images/love3.jpeg"
                  alt="Couple in camera viewfinder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20 rounded" />
                <div className="absolute top-1 left-1 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white text-[8px] font-mono">REC</span>
                </div>
                <div className="absolute top-1 right-1 text-white text-[8px] font-mono">HD</div>
                <div className="absolute bottom-1 right-1 flex gap-1">
                  <div className="w-4 h-4 border border-white/50 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Gatitos y decoraciones — sin cambios */}
          <img
            src={CAT_COUPLE || "/placeholder.svg"}
            alt="Two cats forming heart"
            className="absolute top-2 left-[30%] w-[100px] md:w-[120px] h-[100px] md:h-[120px] object-contain z-30 animate-float"
          />
          <img
            src={CAT_BLUSHING || "/placeholder.svg"}
            alt="Blushing cat"
            className="absolute top-8 right-[5%] w-[90px] md:w-[110px] h-[90px] md:h-[110px] object-contain z-30 animate-float-delayed"
          />
          <img
            src={CAT_TULIP || "/placeholder.svg"}
            alt="Cat with tulip"
            className="absolute bottom-[40%] left-2 w-20 md:w-[100px] h-20 md:h-[100px] object-contain z-30 animate-float"
          />
          <img
            src={CAT_MUSCULAR_BABY || "/placeholder.svg"}
            alt="Muscular cat with baby"
            className="absolute top-[40%] right-0 w-[90px] md:w-[110px] h-[90px] md:h-[110px] object-contain z-30 animate-float-delayed"
          />
          <img
            src={CAT_CHRISTMAS || "/placeholder.svg"}
            alt="Christmas cat"
            className="absolute bottom-[30%] left-[48%] w-[70px] md:w-[90px] h-[70px] md:h-[90px] object-contain z-30 animate-float"
          />

          <div className="absolute bottom-[45%] left-[52%] w-8 h-6 z-30 opacity-80">
            <svg viewBox="0 0 24 18" fill="none" className="w-full h-full">
              <rect x="1" y="1" width="22" height="16" rx="2" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1" />
              <path d="M1 3l11 7 11-7" stroke="#f9a8d4" strokeWidth="1" fill="none" />
              <circle cx="19" cy="13" r="2" fill="#f472b6" />
            </svg>
          </div>
        </div>

        <BackButton />

        {/* Modal estilizado — como la imagen que me diste */}
        {modalOpen && currentTrackIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-gray-900 rounded-2xl p-6 max-w-md w-full text-center shadow-2xl justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* QR con corazón en el centro */}
              <div className="mb-4 relative justify-center">
                <QRCodeCanvas
                  value={SPOTIFY_TRACKS[currentTrackIndex]}
                  size={220}
                  fgColor="#ffffff"
                  bgColor= "#c04242"
                  level="H"
                />
                {/* Corazón en el centro del QR */}
            
              </div>

              {/* Texto "the soundtrack of our love" */}
              <p className="text-white text-xs mt-2 font-handwritten justify-center">
              Una cancioncita para tii :)
              </p>

              {/* Controles de reproducción */}
             

              {/* Botón Cerrar */}
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-handwritten hover:bg-pink-600 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

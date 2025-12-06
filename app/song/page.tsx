"use client";
import { useState, useEffect } from "react";
import { Heart, Share2 } from "lucide-react";
import BackButton from "@/components/back-button";

const YOUTUBE_VIDEO_ID = "jVkOdx3OnIM";

const CAT_HEART = "/images/whatsapp-20image-202025-12-05-20at-202.jpeg";
const CAT_FLEXING = "/images/whatsapp-20image-202025-12-05-20at-202.jpeg";

export default function SongPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("song-favorite");
    if (saved) setIsFavorite(JSON.parse(saved));
  }, []);

  const toggleFavorite = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    localStorage.setItem("song-favorite", JSON.stringify(newState));
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    } catch {
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    }
  };

  const photos = [
    "/images/song1.jpeg",
    "/images/son2.jpeg",
    "/images/song5.jpeg",
    "/images/song4.jpeg",
    "/images/proteje.png",
    "/images/song3.jpeg",
    
  ];

  return (
    <main
      className="min-h-screen bg-red-700 flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/2167546503/es/foto/papel-pintado-marfil-que-parece-capas-de-papel-arrugado-fondo-elegante-y-sostenible.jpg?s=612x612&w=0&k=20&c=FZI1lFXwZVShoXqIqGgmeBLxoJiYt7GZy_Jjf3My7o4=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-5xl animate-fade-in">
        <img
          src="/images/navideño.png"
          alt="Decorative cat with heart"
          className="absolute -top-4 right-8 w-30 h-30 object-contain animate-float z-20"
        />
        <img
          src="/images/tierno.png"
          alt="Flexing cat"
          className="absolute bottom-8 right-8 w-50 h-50 object-contain animate-float-delayed z-20" // 👈 SOLO CAMBIO ESTE: bottom-24 right-10 → bottom-8 right-8
        />

        {/* Decorative music notes */}
        <div className="absolute top-8 right-24 text-red-700 text-3xl opacity-60 animate-float">
          &#9834;
        </div>
        <div className="absolute top-20 right-32 text-red-700 text-2xl opacity-40 animate-float-delayed">
          &#9835;
        </div>
        <div className="absolute top-4 left-[40%] text-red-700 text-4xl opacity-50 animate-float">
          &#9834;
        </div>
        <div className="absolute top-12 left-[48%] text-red-700 text-lg opacity-60">
          &#10084;
        </div>
        <div className="absolute bottom-32 right-16 text-red-700  text-sm opacity-50">
          &#10022;
        </div>
        <div className="absolute bottom-40 right-8 text-red-700  text-xl opacity-60">
          &#10022;
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10">
          {/* Song Card */}
          <div className="w-full md:w-80 shrink-0">
            <div className="bg-romantic-primary rounded-2xl p-5 text-white shadow-xl">
              <h2 className="text-xl mb-4">
                <span className="font-marker">Unforgettable</span>
                <span className="font-script text-2xl ml-1">Song</span>
              </h2>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-marker text-lg">AFAZ NATURAL</h3>
                  <p className="text-sm opacity-80 font-handwritten">Te Amo</p>
                </div>
                <button
                  onClick={toggleFavorite}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isFavorite
                      ? "text-pink-200 scale-110"
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  aria-pressed={isFavorite}
                >
                  <Heart
                    className={`w-6 h-6 ${isFavorite ? "fill-current" : ""}`}
                  />
                </button>
              </div>

              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&mute=0&enablejsapi=1`}
                  title="Afaz Natural - Te Amo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleShare}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2"
                  aria-label="Share song"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-[#1DB954]"
                    >
                      <path
                        fill="currentColor"
                        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-handwritten opacity-70"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Letter Content */}
          <div className="flex-1 text-red-700 leading-relaxed text-justify">
            <p className="text-xl md:text-2xl mb-6 font-handwritten">
              Recuerdas esta canción?
            </p>

            <p className="mb-5 text-base md:text-lg font-handwritten">
              La primera vez que me la enviaste, literal me quedé ahí,
              escuchándola como una boba, sintiendo y entendiendo que algo muy bonito me estaba
              empezando a pasar contigo y me recuerda lo especial que eres para mi.
            </p>

            <p className="mb-5 text-base md:text-lg font-handwritten">
              Desde ese día, cada vez que suena, pienso en ti de una manera tan
              automática que no puedo evitar sonreír. Me acuerdo de ese preciso
              momento, de cómo me hizo latir el corazón más rápido, de cómo
              pensé “ay no, me gusta mucho este muchacho” y de cómo, sin
              querer, empezaste a cambiar mi mundo con esos pequeños detalles
              que para mí eran gigantes.
            </p>

            <p className="text-base md:text-lg font-handwritten">
              Y aunque pueda parecer una canción simple, para mí se volvió un
              pedacito de nosotros, Una vibra tuya, un bonito recuerdo de como inició
              todo, y un sonido que me pone de buen humor inmediatamente. Y no
              importa cuántas veces suene o cuántas veces la escuche, siempre va
              a traerte hacia mi.
            </p>
          </div>
        </div>

        <BackButton />
      </div>
    </main>
  );
}
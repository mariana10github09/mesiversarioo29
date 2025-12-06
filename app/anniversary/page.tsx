"use client";

import { useState } from "react";
import BackButton from "@/components/back-button";

const CAT_FLEXING_BIG = "/images/whatsapp-20image-202025-12-05-20at-202.jpeg";

export default function AnniversaryPage() {
  const [currentView, setCurrentView] = useState<1 | 2 | 3>(1);

  const goToNext = () => {
    if (currentView < 3) setCurrentView(currentView + 1 as 1 | 2 | 3);
  };

  const goToPrev = () => {
    if (currentView > 1) setCurrentView(currentView - 1 as 1 | 2 | 3);
  };

  // Texto dividido en 3 partes
  const paragraph1 = `
Mi amorcito lindoooo, hoy cumplimos otro mecesito más, ya son 28 meses, casi dos años y medio, casi tres navidades a tu ladito, y aún te sigo viendo con todo el amor del mundo✨ Con cada mes que pasa te amo más, te admiro más, te valoro más, y me convenzo de que no existe otro hombre en este universo al que yo pueda amar como te amo a ti. Es que tú eres mi vida entera, mi fuerza, mi motivación, mi voluntad y mi todo en esta vida. A veces me quedo sin palabras cuando pienso en ti o te veo mi amor. Es así como cuando uno ve algo demasiado tierno y no sabe ni qué hacer, así mismo me pasa contigo, porque lo que siento es tan grande que ni me cabe, no hay día, ni minuto, ni un segundo en el que no pases por mi mente, tú y solo tú eres mi pensamiento favorito, mi personita favorita y mi mundo enteroo. Y es que la verdad, tengo muy claro lo que significas para mí, todo lo tuyo me importa, todo lo que dices me interesa, todo lo que te emociona me emociona, y todo lo que te preocupa me preocupa, amo escucharte, me encanta cómo hablas, me encanta cómo eres, tan chistoso y tan ocurrente, porque para mí no hay nadie más gracioso que tú, enserio amo cada parte de tu ser con toda mi alma, porque contigo siento que el mundo tiene sentido.✨💗
`;

  const paragraph2 = `
Sabes que estoy demasiado orgullosa de ti, cierto? Y como no mi amor, si tú eres un berracoooo, eres muyy fuerte, eres súper inteligente, eres demasiado trabajador y tienes un corazónn muy bonito que a veces me dan ganas de cubrirte con una cobijita y guardarte ahí para que nada te haga nada. Debes saber que te admiro muchísimo, admiro tu forma de luchar y esforzarte por lo que quieres, admiro cómo sigues adelante incluso en esos días en que estás cansadito y admiro la manera tan linda en la que me das tu amor, aun cuando tú también estás agotado. Y mi vidita, yo quiero que siempre tengas presente que no importa lo que pase, aquí estoy y estaré siempre para ti. Para acompañarte, para escucharte, para apoyarte en todo, para recordarte que eres capaz de todo lo que te propones, y que yo creo en ti con mi alma entera. Porque sí, tú eres mi persona favorita en el mundo, mi orgullo más grande y el amor más bonito que me pudo haber pasado.✨💗 Ojalá supieras lo bonito que es para mí estar viviendo mi tercera navidad contigo, a veces me quedo pensando en todo lo que hemos pasado y en cómo a pesar del tiempo, yo te sigo viendo igual de precioso, de lindo, de besable, igual de tierno e igual de maravilloso. Y es que desde que empezamos nada en mí ha cambiado, aunque bueno, tal vez si, que ahora te amo más fuerte y bastanteee, porque te amo más y más día con día💗✨
`;

  const paragraph3 = `
Deseo con todo mi corazón que esto nuestro dure todo lo que pueda durar, meses, años o vidas enteras si existe esa posibilidad, porque si algo tengo claro es que quiero seguir a tu ladito, seguir creciendo contigo, seguir riéndome contigo, seguir soñando contigo y seguir viendo esa carita tan preciosa que ilumina mis dias. Por último, quiero darte las gracias por todo mi amor, por ser tú, por existir, por amarme tan bonito, por darme un lugar en tu vida y en tu corazón. Gracias por hacerme sentir la mujer más afortunada del mundo, y gracias mi amor por seguir aquí. Felices mesecitooooos, mi vidaaaa. Te amoooo con todo mi corazón y con todo lo que soy.💗✨
`;

  return (
    <main
      className="flex items-center justify-center p-4"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://media.istockphoto.com/id/2167546503/es/foto/papel-pintado-marfil-que-parece-capas-de-papel-arrugado-fondo-elegante-y-sostenible.jpg?s=612x612&w=0&k=20&c=FZI1lFXwZVShoXqIqGgmeBLxoJiYt7GZy_Jjf3My7o4=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-5xl animate-fade-in">
        {/* Decorative stars */}
        <div className="absolute top-6 right-12 text-red-700 text-[96px] animate-float">
          &#10022;
        </div>
        <div className="absolute top-16 right-8 text-red-700 text-[80px] opacity-60 animate-float-delayed">
          &#9733;
        </div>
        <div className="absolute top-10 right-24 text-red-700 text-[72px] opacity-80">
          &#10022;
        </div>
        <div className="absolute top-4 left-[35%] text-red-700 text-[88px] opacity-70 animate-float">
          &#9733;
        </div>
        <div className="absolute bottom-24 left-8 text-red-700 text-[88px] opacity-70 animate-float">
          &#9733;
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10">
          {/* Letter Content */}
          <div className="flex-1 text-red-700 leading-relaxed text-justify">
            <h1 className="font-marker text-2xl md:text-3xl mb-6 tracking-wide text-red-700">
              FELIZ MESIVERSARIO, MI TODO
            </h1>

            {/* Vista 1 */}
            {currentView === 1 && (
              <div>
                <p className="mb-5 text-base md:text-lg font-handwritten whitespace-pre-line">
                  {paragraph1}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={goToNext}
                    className="text-white bg-romantic-primary px-4 py-2 rounded-full font-handwritten hover:scale-105 transition-transform"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}

            {/* Vista 2 */}
            {currentView === 2 && (
              <div>
                <p className="mb-5 text-base md:text-lg font-handwritten whitespace-pre-line">
                  {paragraph2}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={goToPrev}
                    className="text-white bg-romantic-primary px-4 py-2 rounded-full font-handwritten hover:scale-105 transition-transform"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={goToNext}
                    className="text-white bg-romantic-primary px-4 py-2 rounded-full font-handwritten hover:scale-105 transition-transform"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}

            {/* Vista 3 */}
            {currentView === 3 && (
              <div>
                <p className="mb-5 text-base md:text-lg font-handwritten whitespace-pre-line">
                  {paragraph3}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={goToPrev}
                    className="text-white bg-romantic-primary px-4 py-2 rounded-full font-handwritten hover:scale-105 transition-transform"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => setCurrentView(1)}
                    className="text-white bg-romantic-primary px-4 py-2 rounded-full font-handwritten hover:scale-105 transition-transform"
                  >
                    Empezar de nuevo
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Photo & Cat illustration */}
          <div className="w-full md:w-72 flex flex-col items-center md:items-end gap-4">
            {/* Polaroid-style photo */}
            <div className="relative bg-white p-2 pb-8 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-48 md:w-56 aspect-3/4 overflow-hidden">
                <img
                  src="/images/el.jpeg"
                  alt="Anniversary photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-pink-100/80 rotate-2" />
            </div>

            <div className="w-60 h-60 md:w-80 md:h-80 relative">
              <img
                src="/images/carta2.png"
                alt="Flexing blue cat"
                className="w-full h-full bottom-24 object-contain animate-float"
              />
            </div>
          </div>
        </div>

        <BackButton />
      </div>
    </main>
  );
}

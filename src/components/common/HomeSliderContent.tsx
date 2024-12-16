// En HomeSliderContent.tsx
import React from "react";
import { StaticImageData } from "next/image"; // Asegúrate de importar StaticImageData si usas Next.js

// Definir el tipo para slider
interface Slider {
  sliderId: number;
  sliderImage: StaticImageData | string; // Aceptar tanto StaticImageData como string
  sliderVideo?: string; // Opcional, si existe
  sliderTag: string;
  sliderTitle: string;
  sliderDescription: string;
}

interface HomeSliderContentProps {
  slider: Slider;
}

export const HomeSliderContent: React.FC<HomeSliderContentProps> = ({
  slider,
}) => {
  return (
    <li
      className="lg:min-h-screen grid place-items-center  relative"
      id="hero-2"
    >
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        {/* SLIDER IMAGES AND VIDEO */}
        {slider?.sliderImage && (
          <img
            src={
              typeof slider?.sliderImage === "string"
                ? slider?.sliderImage
                : slider?.sliderImage.src
            } // Acceder a .src si es StaticImageData
            alt={slider?.sliderTitle}
            width={1920}
            height={1080}
            className="object-cover h-full w-full object-center"
          />
        )}

        {slider?.sliderVideo && (
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            className="h-full w-full object-cover"
          >
            <source src={slider?.sliderVideo} />
          </video>
        )}
      </div>
      <div className="container h-full sm:py-40 pb-80 relative z-10 text-white flex items-center">
        <div className="max-w-[850px]">
          {/*------------------------ HERO CONTENT START ------------------------*/}
          <div className="flex flex-col gap-2  ">
            <p className="px-5 py-2 border-solid border-3 border-primary rounded-full w-fit md:text-2xl text-xl">
              - {slider?.sliderTag}
            </p>
            <h1 className="lg:text-6xl text-4xl font-bold lg:leading-[70px] flex gap-3">
              {slider?.sliderTitle}
            </h1>
            <p className="lg:text-lg mb-6">{slider?.sliderDescription}</p>
          </div>

          {/*------------------------ HERO CONTENT END ----------------------- */}
        </div>
      </div>
    </li>
  );
};

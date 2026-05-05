import { useState, useEffect } from "react";
import ButtonAll from "../../../component/buttons/ButtonAll";

const slides = [
  { image: "/images/image-1.jpg" },
  { image: "/images/image-2.jpg" },
  { image: "/images/image-3.jpg" },
  { image: "/images/image-4.jpg" }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE (5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] lg:h-[580px] xl:h-screen overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              animation:
                index === current ? "zoomSlow 5s linear forwards" : "none",
            }}
          >
            <div className="absolute inset-0 bg-blue-900/60" />
          </div>
        ))}
      </div>

      {/* FIXED TEXT (NO SLIDE, NO CHANGE) */}
      <div className="relative z-10 tracking-wide h-full flex flex-col items-center justify-center text-center text-white">
        <span className="mb-3 text-xl font-semibold">
          About Us
        </span>

        <h1 className="text-5xl tracking-normal md:text-6xl font-bold max-w-4xl  ">
          Committed to Compassionate Care & Medical Excellence
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200">
          For years, we have been dedicated to delivering high-quality healthcare through skilled professionals, ethical practices, and a deep commitment to patient well-being.
        </p>

          <div className="flex space-x-4 mt-8"> 
            <ButtonAll text='Book an Appointment' type='greenblue'/>
            <ButtonAll text=' Emergency Call' type='border-whitegreen'  size={'py-3 px-9'}/>
          </div>
        
      </div>

      {/* ZOOM ANIMATION */}
      <style>
        {`
          @keyframes zoomSlow {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;

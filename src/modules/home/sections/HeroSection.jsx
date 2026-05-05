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

  // AUTO SLIDE (7 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen md:h-[500px] lg:h-[580px] xl:h-screen overflow-hidden px-3 md:px-0">
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
        <span className="mb-3 text-xl font-semibold animate-fadeInUp">
          Reliable Medical Care With Quality Service
        </span>

        <h1 className="text-5xl tracking-normal md:text-6xl font-bold max-w-4xl animate-fadeInUp animation-delay-200">
          Serving Your Health, Every Single Day
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200 animate-fadeInUp animation-delay-400">
          We provide advanced medical care with experienced doctors, modern equipment,
          and a patient-first approach to ensure your health and safety at every step.
        </p>

        <div className="md:flex space-y-2 md:space-y-0 md:space-x-4 mt-8 animate-fadeInUp animation-delay-600">
          <div className="animate-button-shake">
            <ButtonAll text='Book an Appointment' type='greenblue' />
          </div>
          <div className="animate-button-pulse">
            <ButtonAll text='Emergency Call' type='border-whitegreen' size={'py-3 px-9'} />
          </div>
        </div>
      </div>

      {/* PROFESSIONAL ANIMATIONS */}
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

          /* Fade In Up Animation */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Button Shake/Hover Effect */
          @keyframes gentleShake {
            0%, 100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-3px);
            }
            75% {
              transform: translateX(3px);
            }
          }

          /* Button Pulse Effect */
          @keyframes gentlePulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
            }
            50% {
              transform: scale(1.02);
              box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
            }
          }

          /* Glow Effect for Emergency Button */
          @keyframes emergencyGlow {
            0%, 100% {
              filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
            }
            50% {
              filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
            opacity: 0;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
            opacity: 0;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
            opacity: 0;
          }

          /* Button Animation on Hover */
          .animate-button-shake:hover > * {
            animation: gentleShake 0.5s ease-in-out;
          }

          .animate-button-pulse:hover > * {
            animation: gentlePulse 0.8s ease-in-out;
          }

          /* Add initial state for buttons */
          .animate-button-shake > *,
          .animate-button-pulse > * {
            transition: all 0.3s ease;
            display: inline-block;
          }

          /* Emergency button special effect */
          .animate-button-pulse:hover > * {
            background: rgba(220, 38, 38, 0.9);
            border-color: #ffffff;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
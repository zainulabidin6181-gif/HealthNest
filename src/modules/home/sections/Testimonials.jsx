import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ButtonAll from "../../../component/buttons/ButtonAll";
import SectionMainP from "../../../component/paragaraph/SectionMainP";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionTopBtn from "../../../component/buttons/SectionTopBtn";

const testimonials = [
  { name: "Mehwish", text: "Compliment interested discretion estimating on stimulated apartments.", img: "/images/client2.jfif" },
  { name: "Elizabeth Jeff", text: "Door six say when find roof call. Discovered behaviour defective.", img: "/images/client1.jfif", width: "ms-10" },
  { name: "Emily Thomas", text: "Never at water me might. On formed merits hunted merely by whence or.", img: "/images/client3.jfif" },
  { name: "Ayesha", text: "Door six say when find roof call. Discovered behaviour defective.", img: "/images/client2.jfif", width: "ms-10" },
  { name: "John Doe", text: "Compliment interested discretion estimating on stimulated apartments.", img: "/images/client1.jfif" },
  { name: "Sarah K", text: "Compliment interested discretion estimating on stimulated.", img: "/images/client3.jfif", width: "ms-10" },
  { name: "Ali Raza", text: "Door six say when find roof call. Discovered behaviour defective.", img: "/images/client2.jfif" },
  { name: "Maria L", text: "Compliment interested discretion estimating on stimulated", img: "/images/client1.jfif", width: "ms-10" },
  { name: "Daniel P", text: "Never at water me might. On formed merits hunted merely by whence.", img: "/images/client3.jfif" },
];

export default function TestimonialsScrollFullSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [freezeScroll, setFreezeScroll] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || !containerRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const container = containerRef.current;
      const containerScrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;

      // Start scroll system only when section fully visible in viewport
      if (sectionTop >= 0 && sectionBottom <= windowHeight) {
        if (containerScrollTop < maxScroll) {
          setFreezeScroll(true);
          e.preventDefault();
          e.stopPropagation();
          container.scrollBy({ top: e.deltaY, behavior: "auto" });
        } else {
          setFreezeScroll(false);
        }
      } else {
        setFreezeScroll(false);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section ref={sectionRef} className="bg-blue-900 overflow-hidden dark:bg-blue-600 mt-10 py-12 relative">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row gap-8">

        {/* Left Side */}
        <div className="transition-all md:w-6/12 duration-700">
          <div className="w-4/12 md:w-auto mx-auto md:mx-0 ">
            <SectionTopBtn
            text={"Testimonials"}
            textClass={"text-white/90 mx:auto md:mx-0"}
            lineColor={"bg-lime-600 mt-1"}
          />
          </div>
          <SectionHeading text={"What Our"} secText={'Customers Says'} className={'my-3 text-white text-center md:text-start '} br={true} darkTheme={"dark:text-white"} secClass={"text-lime-600 dark:text-lime-500"} />
          <SectionMainP
            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim pariatur sequi iusto error aperiam labore laudantium nulla ipsam saepe aliquid, mollitia totam hic eaque dicta officia quis assumenda, dolorum quasi?'
            className={'md:w-11/12 mb-5 text-white text-center md:text-start'}
          />
          <ButtonAll text='View More' type='bg-lime-600 text-white' size={'py-2 px-4'} extraClass={'mt-5 mx-auto md:mx-0'}/>
        </div>

        {/* Right Side */}
        <div
          ref={containerRef}
          className="md:w-1/2 h-[400px] overflow-y-auto space-y-6 scrollbar-hide"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-xl me-1 shadow-md p-5 flex items-start ${item.width || ""} gap-4`}
            >
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-blue-900">{item.name}</h4>
                <p className="text-blue-900/70 text-sm leading-relaxed">{item.text}</p>
              </div>
              <span className="ml-auto text-3xl text-blue-900/30 font-serif">“</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

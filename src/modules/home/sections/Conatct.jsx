
import ButtonAll from "../../../component/buttons/ButtonAll";
import MarkedList from "../../../component/lists/MarkedList";
import useReveal from "../../../hooks/useReveal";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [ref, show] = useReveal(0.3);

  const getAnimation = (delay = 0) => ({
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  return (
    <section ref={ref} className="bg-white dark:bg-transparent py-24 overflow-hidden">
      <div
        className={`
          max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center
          transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* LEFT CONTENT */}
        <div
          className={`
            transition-all duration-700 delay-150
            ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
          `}
        >
          <motion.div
            variants={getAnimation(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className=" mx-auto lg:mx-0 z-0 me-4 h-[500px] border-2 bg-white overflow-hidden  rounded-3xl"
          >

            <img className="w-full h-full rounded-xl transition-transform duration-300 hover:scale-110" src="/images/madicalSolutions2.jfif" alt="" />
            

          </motion.div>
        </div>

        {/* RIGHT FORM (3D CARD) */}
        <form
          className={`
            bg-white dark:bg-transparent border-2 rounded-2xl p-8 space-y-6
            shadow-lg
            transition-all duration-500
            transform-gpu
            hover:-translate-y-2 hover:shadow-2xl
            hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)]
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >
          <div>
            <label className="block text-blue-900 dark:text-blue-500 font-medium mb-1">
              Full Name
            </label>
            <input
              className="
                w-full px-4 py-3 rounded-lg border border-gray-200
                focus:outline-none dark:bg-transparent focus:ring-2 focus:ring-lime-600
              "
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-blue-900 dark:text-blue-500 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="
                w-full px-4 py-3 rounded-lg border border-gray-200
                focus:outline-none dark:bg-transparent focus:ring-2 focus:ring-lime-600
              "
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-blue-900 dark:text-blue-500 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="
                w-full px-4 py-3 rounded-lg border border-gray-200 resize-none
                focus:outline-none dark:bg-transparent focus:ring-2 focus:ring-lime-600
              "
              placeholder="Write your message..."
            />
          </div>

          <button
            className="
              w-full py-3 rounded-lg bg-lime-600 text-white font-medium
              transition-all duration-300
              hover:bg-blue-900 hover:shadow-lg
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

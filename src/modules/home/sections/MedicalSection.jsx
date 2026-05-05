import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import PlayBtn from "../../../component/buttons/PlayBtn";
import MarkedList from "../../../component/lists/MarkedList";
import OpeningTime from "../../../component/Cards/OpeningTime";

// 🔹 Function to generate animation with custom delay
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

function MedicalSection() {
  return (
    <div className="container h-[700px] mx-auto px-3  md:pt-12 w-full pb-10">


      {/* Heading - NO animation */}
      <SectionHeading
        text="We Are Best Professional"
        className="text-center pt-3 md:pt-5 text-blue-900"
        secText=" In Medical Sectors"
        secClass=""
      />

      {/* cards main div */}
      <div className="md:flex gap-10 justify-between pt-1">

        {/* left side image box */}
        <motion.div
          variants={getAnimation(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full md:w-6/12 lg:w-2/6 flex justify-center items-center my-sec-bg"
        >
          <PlayBtn />
        </motion.div>

        {/* right side box */}
        <motion.div
          variants={getAnimation(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full md:w-6/12 lg:w-8/12 h-96"
        >

          {/* right side box dividing two parts */}
          <div className="md:flex lg:gap-10">

            {/* left part of right box */}
            <motion.div
              variants={getAnimation(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}


              className="w-full md:w-11/12 lg:w-6/12 pt-12 md:pt-0 lg:pt-12 md:-ms-8 lg:ms-0"
            >
              <p className="text-justify leading-tight md:leading-relaxed lg:leading-tight text-blue-950 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corrupti, eligendi eius eos voluptate doloribus dolorum et consectetur nisi in expedita magnam animi nulla fugit?
              </p>

              <ul className="mt-5 md:mt-6 lg:pt-0">
                <MarkedList className="md:pt-2 lg:pt-0" text="Digital healthcare solutions" />
                <MarkedList className="md:pt-2 lg:pt-0" text="Professional doctors and nurses" />
                <MarkedList className="md:pt-2 lg:pt-0" text="Service for emergency patients" />
                <MarkedList className="md:pt-2 lg:pt-0" text="Support healthcare for patients" />
              </ul>
            </motion.div>

            {/* right part of right box opening box */}
            <div className="w-11/12 md:w-6/12 mx-auto md:mx-0 md:hidden lg:block z-0 lg:me-4 px-10">
              <OpeningTime />
            </div>
            
          </div>

          {/* last image of right part of right box */}
          <motion.div
            variants={getAnimation(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-5 w-11/12 md:w-full mx-auto md:hidden lg:block md:-mt-16"
          >
            <img className="rounded-3xl z-10 h-60 md:h-96 w-full" src="/images/teamPhoto.png" alt="my-photo" />
          </motion.div>

        </motion.div>
      </div>



      {/* tablet review setting */}
      <div className="hidden md:block lg:hidden">
        <div className="flex">

          <motion.div
            variants={getAnimation(1.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="w-11/12 md:w-5/12 mx-auto lg:mx-0 z-0 me-4 px-6 bg-blue-600 py-9 md:py-4 lg:py-9 mt-12 rounded-3xl"
          >
            {/* <Botton text="Opening Hours" bgColor="bg-blue-50 text-blue-950 font-semibold px-10 block mx-auto" /> */}
            <p className="text-center text-blue-50 pt-4 leading-snug">
              Lorem ipsum dolor sit amet consectet adipisicing elit.
            </p>
            <p className="text-center text-blue-50 pt-3 md:pt-3 lg:pt-3">Mon–Fri: 8:00AM – 9:00PM</p>
            <p className="text-center text-blue-50 pt-3 md:pt-1 lg:pt-3">Sat: 8:00AM – 7:00PM</p>
            <p className="text-center text-blue-50 pt-3 md:pt-1 lg:pt-3">Sun: 9:00AM – 5:00PM</p>
            <p className="text-center text-blue-50 pt-3 md:pt-1 lg:pt-3">24/7 Emergency Care</p>
          </motion.div>

          <motion.div
            variants={getAnimation(1.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-5 w-11/12 md:w-6/12 lg:w-full mx-auto hidden md:block lg:block md:mt-14 lg:-mt-10"
          >
            <img className="rounded-3xl z-10 h-60 md:h-64 lg:h-[400px]" src="/images/teamPhoto.png" alt="my-photo" />
          </motion.div>

        </div>
      </div>

    </div>
  );
}

export default MedicalSection;

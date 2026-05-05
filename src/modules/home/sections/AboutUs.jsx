import { motion } from "framer-motion";

import ButtonAll from "../../../component/buttons/ButtonAll";
import PlayBtn from "../../../component/buttons/PlayBtn";
import SectionTopBtn from "../../../component/buttons/SectionTopBtn";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionMainP from "../../../component/paragaraph/SectionMainP";

function AboutUs() {
  return (
    <>
      <motion.div
        className="md:flex overflow-hidden items-center pt-14 xl:h-[650px] 2xl:h-screen gap-2"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-6/12">
          <LeftSide />
        </div>

        <div className="md:w-6/12 pt-52 md:pt-0 text-center md:text-left">
          <RightSide />
        </div>
      </motion.div>
    </>
  );
}

export default AboutUs;


function LeftSide() {
  return (
    <motion.div
      className="w-full relative"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <img
        className="h-[450px] md:w-10/12 object-cover z-0 rounded-3xl"
        src="/images/madicalSolutions3.jpg"
        alt="image in hero section"
      />

      <motion.img
        className="absolute md:-bottom-16 -bottom-44 right-4 md:right-12 z-10 border-8 border-white rounded-3xl md:w-6/12 h-[300px] object-cover"
        src="/images/madicalSolutions2.jfif"
        alt="second image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      <motion.div
        className="absolute md:bottom-8 right-36 p-3 z-20"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <PlayBtn />
      </motion.div>
    </motion.div>
  );
}



function RightSide() {
  return (
    <motion.div
      className="w-full flex flex-col pt-4 gap-3 justify-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <SectionTopBtn
        text="About"
        lineColor={"bg-lime-600 mt-1"}
        textClass={"text-blue-900 mx-auto md:mx-0 dark:text-blue-500"}
      />

      <SectionHeading
        text={"Compassionate Care. Trusted"}
        secText={"Medical Excellence."}
      />

      <SectionMainP
        text={
          "At Docter Services, we are dedicated to providing compassionate care and trusted medical excellence to our patients. Our team of experienced healthcare professionals is committed to delivering personalized treatment plans."
        }
        className="text-gray-900 dark:text-gray-200"
      />

      <motion.div
        className="bg-lime-100 p-4 rounded-lg mt-4 text-gray-900 border-x-4 border-lime-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>Certified specialists, 24/7 emergency services ensure reliable</p>
        <p>and modern equipment, patient-focused care at every stage.</p>
      </motion.div>

      <motion.div
        className="pt-5 block mx-auto md:mx-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <ButtonAll text={"Explore Our Story"} type={"bluegreen"} />
      </motion.div>
    </motion.div>
  );
}

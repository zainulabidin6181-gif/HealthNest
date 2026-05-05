import { motion } from "framer-motion";

import ButtonAll from "../../../component/buttons/ButtonAll";
import SectionTopBtn from "../../../component/buttons/SectionTopBtn";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionMainP from "../../../component/paragaraph/SectionMainP";

function PatientCareSection() {
  return (
    <div className="bg-blue-900 dark:bg-blue-600 overflow-hidden">
      <div className="mx-auto container px-3 md:px-4 xl:px-20 2xl:px-0 mt-20 md:mt-0 lg:mt-20 lg:pt-14 w-full md:pb-5 lg:pb-0 h-auto">
        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-6/12 pb-10 md:pb-0 lg:pb-10">
            <SectionTopBtn
              text={"Best Carring"}
              textClass={"text-white/90 mx-auto md:mx-0"}
              lineColor={"bg-lime-600 mt-1"}
            />

            <SectionHeading
              text="Caring For You"
              secText="And Your Family"
              className="text-white py-5 text-center md:text-start"
              darkTheme={"dark-text-white"}
              secClass={"text-lime-600 dark:text-lime-500"}
            />

            <SectionMainP
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure possimus rem itaque nihil, maiores facilis ipsum eum qui cumque eos, consequatur neque fuga accusantium debitis architecto explicabo minima numquam!"
              className="text-blue-50 md:text-lg md:pe-10 text-center md:text-start "
            />

            <motion.div
              className="md:flex pt-5 gap-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ButtonAll text={"GET APPOINTMENT"} type={"greenblue"} extraClass={"mx-auto md:mx-0"} />
              <ButtonAll
                text={"+ (999) 123 456"}
                type={"border-whitegreen"}
                size={"py-2 px-7 mt-3 md:mt-0"}
                extraClass={"mx-auto md:mx-0"}
              />
            </motion.div>
          </div>

          <motion.div
            className="w-full md:w-6/12 lg:-mt-40"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src="/images/doctors.jfif" alt="doctors" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PatientCareSection;

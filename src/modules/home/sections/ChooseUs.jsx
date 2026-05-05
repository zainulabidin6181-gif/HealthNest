import { MdEmergency, MdMedicalServices } from "react-icons/md";
import { TbCaretUpDown, TbFileCertificate } from "react-icons/tb";
import { motion } from "framer-motion";

function ChooseUs() {
  return (
    <>
      <div className="container lg:flex mx-auto px-3 md:px-4 xl:px-20 2xl:px-0 md:pt-40 pt-10 w-full overflow-hidden h-auto xl:h-[650px]">

        {/* LEFT SIDE ANIMATION */}
        <motion.div
          className="lg:w-6/12 mx-auto block md:ps-20 lg:ps-0"
          initial={{ opacity: 0, x: -150 }} // left se slide
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >

          {/* first circle */}
          <div
            className="relative w-48 h-48 rounded-full 
              bg-gradient-to-br from-white via-lime-400 to-lime-700
              shadow-[0_30px_60px_rgba(0,0,0,0.4)]
              scale-110 md:mt-10 mx-auto md:mx-0 transition-transform duration-300 hover:scale-125"
          >
            <h3 className="absolute inset-0 flex flex-col items-center justify-center text-blue-900 font-semibold text-center text-5xl">
              <span className="font-bold">Why</span> Choose Us
            </h3>
          </div>

          {/* second circle */}
          <div className="md:h-[460px] h-[350px]  md:w-[460px] md:-mt-80 mx-auto flex flex-col gap-3 justify-center items-center md:ms-36  bg-blue-900 dark:bg-blue-600 rounded-full">
            <p className="text-white text-center w-8/12">
              We are a team of experienced professionals dedicated to providing
              the best healthcare services.
            </p>
            <p className="text-white text-center w-8/12">
              We are a team of experienced professionals dedicated to providing
              the best healthcare services.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE ANIMATION */}
        <motion.div
          className="lg:w-6/12 px-3 md:px-0 pt-20 md:ps-20 lg:-mt-48 xl:-mt-40 2xl:-mt-32 flex flex-col items-center"
          initial={{ opacity: 0, x: 150 }} // right se slide
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* first listing */}
          <div className="flex items-center gap-4 -mt-16 lg:-mt-5 ">
            <div className="w-2/12 xl:-ms-36 lg:-ms-32">
              <div
                className="relative h-20 w-20 rounded-full flex items-center justify-center
                bg-gradient-to-br from-white via-lime-400 to-lime-700
                shadow-[0_30px_60px_rgba(0,0,0,0.4)]
                scale-110 transition-transform duration-300 hover:scale-125 "
              >
                <TbFileCertificate className="text-5xl text-blue-900" />
              </div>
            </div>
            <div className="w-4/12 h-1 bg-black/20 dark:bg-gray-400 rounded-3xl"></div>
            <div className="w-6/12">
              <h3 className="text-blue-900 dark:text-blue-500 font-semibold text-xl">Certified Doctors</h3>
              <p className="text-blue-950 dark:text-gray-200 text-sm mt-1">
                Our doctors are certified and highly trained professionals committed to providing excellent care.
              </p>
            </div>
          </div>

          {/* second listing */}
          <div className="flex items-center gap-4 mt-7 lg:ms-0 ">
            <div className="w-2/12 xl:-ms-16">
              <div
                className="relative h-20 w-20  rounded-full flex items-center justify-center
                bg-gradient-to-br from-white via-lime-400 to-lime-700
                shadow-[0_30px_60px_rgba(0,0,0,0.4)]
                scale-110 transition-transform duration-300 hover:scale-125"
              >
                <MdEmergency className="text-5xl text-blue-900 " />
              </div>
            </div>
            <div className="w-4/12 h-1 bg-black/20 dark:bg-gray-400 rounded-3xl "></div>
            <div className="w-6/12">
              <h3 className="text-blue-900 dark:text-blue-500 font-semibold text-xl">24/7 Emergency Support</h3>
              <p className="text-blue-950 dark:text-gray-200 text-sm mt-1">
                Our doctors are certified and highly trained professionals committed to providing excellent care.
              </p>
            </div>
          </div>

          {/* third listing */}
          <div className="flex items-center gap-4 mt-8 lg:mt-10 xl:mt-12">
            <div className="w-2/12 xl:w-2/12 xl:-ms-16">
              <div
                className="relative h-20 w-20 rounded-full flex items-center justify-center
                bg-gradient-to-br from-white via-lime-400 to-lime-700
                shadow-[0_30px_60px_rgba(0,0,0,0.4)]
                scale-110 transition-transform duration-300 hover:scale-125"
              >
                <MdMedicalServices className="text-5xl text-blue-900" />
              </div>
            </div>
            <div className="w-4/12 h-1 bg-black/20 dark:bg-gray-400 rounded-3xl"></div>
            <div className="w-6/12">
              <h3 className="text-blue-900 dark:text-blue-500 font-semibold text-xl">Modern Equipment</h3>
              <p className="text-blue-950 dark:text-gray-200 text-sm mt-1">
                Our doctors are certified and highly trained professionals committed to providing excellent care.
              </p>
            </div>
          </div>

          {/* forth listing */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-2/12 lg:-ms-32 xl:-ms-36">
              <div
                className="relative h-20 w-20 rounded-full flex items-center justify-center
                bg-gradient-to-br from-white via-lime-400 to-lime-700
                shadow-[0_30px_60px_rgba(0,0,0,0.4)]
                scale-110 transition-transform duration-300 hover:scale-125"
              >
                <TbCaretUpDown className="text-5xl text-blue-900" />
              </div>
            </div>
            <div className="w-4/12 h-1 bg-black/20 dark:bg-gray-400 rounded-3xl"></div>
            <div className="w-6/12">
              <h3 className="text-blue-900 dark:text-blue-500 font-semibold text-xl">Patient-First Care</h3>
              <p className="text-blue-950 dark:text-gray-200 text-sm mt-1">
                Our doctors are certified and highly trained professionals committed to providing excellent care.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </>
  );
}

export default ChooseUs;

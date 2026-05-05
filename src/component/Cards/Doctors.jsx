
import { motion } from "framer-motion";
import ButtonAll from "../buttons/ButtonAll";

function Doctors({ name, tagline, src, btnText, btnColor, icon, iconTwo, iconClass, delay }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }} className="w-full bg-white dark:bg-transparent border-2 hover:shadow-xl rounded-3xl p-5">
        <h2 className="text-lime-600 font-bold text-3xl ">{name}</h2>
        <p className="dark:text-gray-200 ps-1">{tagline}</p>
        <div className="p-3 my-1 border border-lime-600 dark:border-gray-200 rounded-full overflow-hidden">
          <img
            className="rounded-full w-full ease-in-out duration-500 hover:scale-110 "
            src={src}
            alt="my doctors"
          />
        </div>
        <div className="flex justify-between px-3">
          <ButtonAll text={btnText} bgColor={btnColor} type={'greenblue'} size={'h-10 px-3'}/>
          <div className="flex gap-2 text-lime-600">
            <div className={`border flex items-center border-lime-600 hover:bg-blue-900 hover:text-white rounded-full ${iconClass}`}>
              {icon}
            </div>
            <div className={`border px-2 flex items-center border-lime-600 hover:bg-blue-900 hover:text-white rounded-full ${iconClass}`}>
              {iconTwo}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default Doctors;

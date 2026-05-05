import { motion } from "framer-motion";

function FourByFour({
  className,
  count,
  textHead,
  icon,
  pText,
  btnText,
  btnClass,
  delay = 0
}) {

  const getWidth =() =>{
    if(count === "01"){
      return "w-14";
    } 
    else if(count === "02"){
      return "w-12";
    } 
    else if(count === "03"){
      return "w-12";
    } 
    else if(count === "04"){
      return "w-10";
    } 
    else if(count === "05"){
      return "w-10"
    }
    else if(count === "06"){
      return "w-10"
    }
    else if(count === "07"){
      return "w-10"
    }
    else if(count === "08"){
      return "w-10"
    }
    else if(count === "09"){
      return "w-10"
    }
    else if(count === "10"){
      return "w-10"
    }
    else if(count === "11"){
      return "w-10"
    }
    else if(count === "12"){
      return "w-10"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`shadow-2xl border-2 mx-auto md:mx-0 mt-4 md:mt-0 md:w-2/3 lg:w-1/4 
      rounded-3xl p-5 ${className}`}
    >
      <div className="flex items-center pe-28 md:pe-0 gap-3"> 
        <h6 className={`bg-lime-600 h-10 ${getWidth()} flex justify-center items-center rounded-3xl text-white text-xl`}>
          {count}
        </h6>

        <h2 className="text-xl pe-3 leading-none font-semibold text-blue-900 dark:text-blue-600">
          {textHead}
        </h2>
      </div>

      <div className="text-8xl text-lime-600 transition-transform duration-300 hover:scale-105 pt-4 ps-2">
        {icon}
      </div>

      <p className="text-base text-gray-900 dark:text-gray-200 pt-2">{pText}</p>

      <button className={`py-3 mt-1 font-semibold dark:text-blue-600 ${btnClass || ''}`}>
        {btnText}
      </button>
    </motion.div>
  );
}

export default FourByFour;

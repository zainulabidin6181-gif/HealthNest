import { motion } from "framer-motion";

function SectionTopBtn({ text, lineColor, textClass }) {
  return (
    <motion.button
      className={`flex gap-1 h-4 md:w-1/3 text-lg items-center font-semibold ${textClass}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
      <div className={`h-1 w-12 ${lineColor}`}></div>
    </motion.button>
  );
}

export default SectionTopBtn;

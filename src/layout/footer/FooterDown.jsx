import { motion } from "framer-motion";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

function FooterDown() {
  return (
    <div className="bg-blue-900 dark:bg-blue-600">
      <motion.div
        className="container mx-auto px-3 md:px-4 xl:px-20 2xl:px-0 pt-14 w-full h-auto pb-5"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:flex gap-10">

          {/* ================= LEFT BOX ================= */}
          <motion.div
            className="md:w-4/12 lg:w-3/12 text-white w-11/12 mx-auto md:mx-0 bg-lime-600 pt-7 pb-10 rounded-3xl px-5 font-semibold"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <button className="bg-white text-blue-950 px-5 py-3 rounded-lg mx-auto block">
              Opening Timing
            </button>

            <p className="text-center pt-4 leading-snug">
              Lorem ipsum dolor sit amet consectet adipisicing elit.Natus corrupti
            </p>
            <p className="text-center pt-3">Mon–Fri: 8:00AM – 9:00PM</p>
            <p className="text-center pt-3">Sat: 8:00AM – 7:00PM</p>
            <p className="text-center pt-3">Sun: 9:00AM – 5:00PM</p>
            <p className="text-center pt-3">24/7 Emergency Care</p>
          </motion.div>

          {/* ================= MIDDLE ================= */}
          <motion.div
            className="md:w-4/12 pt-5 md:pt-0 ps-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-white font-bold text-2xl text-center md:text-left">
              OUR MEDICAL SERVICE
            </h3>

            <div className="flex md:block lg:flex pt-5">
              <ul className="text-blue-50/90 list-disc md:ps-5 space-y-2">
                <li>Orthopedic</li>
                <li>Dentistry</li>
                <li>Cardiology</li>
                <li>Psychology</li>
                <li>Gastroenterology</li>
                <li>Neurology</li>
                <li>ENT (Ear & Throat)</li>
                <li>Gynecology</li>
              </ul>

              <ul className="text-blue-50/90 list-disc md:pt-2 lg:pt-0 ps-12 md:ps-5 lg:ps-10 space-y-2">
                <li>Pediatrics</li>
                <li>Hematology</li>
                <li>Oncology Service</li>
                <li>Ophthalmology</li>
                <li>Dermatology</li>
                <li>Urology</li>
                <li>Pulmonology</li>
              </ul>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            className="md:w-4/12 pt-5 md:pt-0 text-center md:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-white font-bold text-2xl">
              CONTACT WITH US
            </h3>

            <p className="text-white/80 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>

            <ul className="pt-5 space-y-2 ps-10 md:ps-0">
              <li className="flex gap-2 text-white/80">
                <CiLocationOn className="text-2xl" /> Address: 1234 North Street, City
              </li>
              <li className="flex gap-2 text-white/80">
                <AiOutlineMail className="text-2xl" /> example@health.com
              </li>
              <li className="flex gap-2 text-white/80">
                <FiPhoneCall className="text-2xl" /> + (999) 123 456
              </li>
            </ul>

            <motion.div
              className="flex gap-1 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-2xl flex justify-center items-center h-9 w-9 bg-lime-600 rounded-full text-white">
                <FaFacebookF />
              </div>
              <div className="text-2xl flex justify-center items-center h-9 w-9 bg-lime-600 rounded-full text-white">
                <FaTwitter />
              </div>
              <div className="text-2xl flex justify-center items-center h-9 w-9 bg-lime-600 rounded-full text-white">
                <FaLinkedinIn />
              </div>
              <div className="text-2xl flex justify-center items-center h-9 w-9 bg-lime-600 rounded-full text-white">
                <FaInstagram />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          className="text-center pt-10 text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Copyright © 2024 Medicon. All Rights Reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default FooterDown;

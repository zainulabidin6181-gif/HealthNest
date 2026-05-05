

import SectionHeading from "../../../component/headingSections/SectionHeading";
import Doctors from "../../../component/Cards/Doctors";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import SectionTopBtn from "../../../component/buttons/SectionTopBtn";
import SectionMainP from '../../../component/paragaraph/SectionMainP'
import ButtonAll from "../../../component/buttons/ButtonAll";

function BestDoctors() {
  return (
    <>

      <div className="container overflow-hidden mx-auto px-3 md:px-4 xl:px-20 2xl:px-0 pt-14 w-full h-auto 2xl:h-screen pb-10">

        <div className="block mx-auto text-center">
          <SectionTopBtn text={'Best Doctor'} textClass={'text-blue-900 mx-auto w-40 dark:text-blue-600'} lineColor={'bg-lime-600 mt-1'} />

          <SectionHeading
            text={"Meet Our Experienced"}
            secText={"Medical Specialists"}
            br={true}
            className={'pt-3'}
          />
        </div>

        <SectionMainP 
        text={"Our experienced doctors are dedicated to providing the highest standard of medical care with compassion and professionalism."}
        className={'md:w-6/12 pt-3 text-blue-950 text-center mx-auto dark:text-gray-200'} />



        {/* doctor three cards box flex   */}
        <div className=" md:flex gap-8 pt-10">

          {/* first card  */}
          <div className="w-full md:w-6/12 lg:w-4/12">
            <Doctors
              name="Professor  Stephen Powis"
              tagline="Gastroenterology"
              src="/images/doctor1.jpg"
              btnText="Contact"
              icon={<TiSocialFacebook className=" text-4xl" />}
              iconTwo={<FaLinkedinIn className=" text-2xl" />}
              iconClass=""
              delay={0}
            />
          </div>

          {/* second card  */}
          <div className="w-full md:w-6/12 lg:w-4/12 pt-4 md:pt-0">
            <Doctors
              name="Dr. Rangan Chatterjee"
              tagline="Neurologist"
              src="/images/doctor2.jpg"
              btnText="Contact"
              icon={<TiSocialFacebook className=" text-4xl" />}
              iconTwo={<FaLinkedinIn className="text-2xl" />}
              iconClass=""
              delay={0.5}
            />
          </div>

          {/* third card  */}
          <div className="w-full md:w-6/12 lg:w-4/12 md:hidden lg:block pt-4 md:pt-0">
            <Doctors
              name="Dr. Sarah Jarvis"
              tagline="Dermatologist"
              src="/images/doctor3.jfif"
              btnText="Contact"
              icon={<TiSocialFacebook className=" text-4xl" />}
              iconTwo={<FaLinkedinIn className="text-2xl" />}
              iconClass=""
              delay={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestDoctors;

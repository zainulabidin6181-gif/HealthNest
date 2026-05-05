import ButtonAll from "../../../component/buttons/ButtonAll";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionMainP from "../../../component/paragaraph/SectionMainP";
import { MdOutlineMedicationLiquid } from "react-icons/md";
import FourByFour from "../../../component/Cards/FourByFour";
import { TbDental } from "react-icons/tb";
import { RiBrain2Line } from "react-icons/ri";
import { BsHeartPulse } from "react-icons/bs";
import SectionTopBtn from "../../../component/buttons/SectionTopBtn"


function HealthSolutions() {
  return (
    <>
      {/* main div of this section  */}
      <div className="container mx-auto w-full h-auto pt-20 pb-10 overflow-hidden">
        <SectionTopBtn text={'Best Services'} textClass={'text-blue-900 mx-auto md:w-40 dark:text-blue-600'} lineColor={'bg-lime-600 mt-1'} />

        {/* heading of this section  */}
        <SectionHeading
          text="Extra Ordinary Heath"
          className="pt-3 lg:ps-5 text-center text-blue-900"
          secText=" Solutons"
          secClass=" text-lime-600"
          br={true}
        />

        {/* description  */}
        <div className=" text-center md:w-3/5 mx-auto pt-3">
          <SectionMainP text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              voluptas repudiandae, necessitatibus est sed placeat reiciendis
              animi consectetur omnis quidem tenetur voluptate cum neque nobis
              amet beatae enim quos nemo!'
            className='text-gray-900 dark:text-gray-200 text-center leading-tight'
            delay={0.5} />
        </div>


        <div className="md:flex gap-5 mt-10">

        {/* first card  */}
          <FourByFour
            count="01"
            textHead="Orthopedic Care Sector"
            icon={<MdOutlineMedicationLiquid />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={0}
          />

          {/* second card  */}
          <FourByFour
            count="02"
            textHead="Dentistry Department"
            icon={<TbDental />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={0.5}
          />

          {/* third card  */}
          <FourByFour
            className="md:hidden lg:block"
            count="03"
            textHead="Neurology Department"
            icon={<RiBrain2Line />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={1}
          />

          {/* forth card  */}
          <FourByFour
            className="md:hidden lg:block"
            count="04"
            textHead="Cardiology Sector"
            icon={<BsHeartPulse />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={1.5}
          />  
        </div>

        {/* third and forth card in tablet in new div */} 
        <div className="hidden md:flex lg:hidden gap-5 mt-5">

          {/* third card in tablet  */}
          <FourByFour
            className=""
            count="03"
            textHead="Neurology Department"
            icon={<RiBrain2Line />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={2}
          />
          {/* forth card in tablet  */}
          <FourByFour
            className=""
            count="04"
            textHead="Cardiology Sector"
            icon={<BsHeartPulse />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={2.5}
          />
      </div>
    </ div>
    </>
  );
}

export default HealthSolutions;


import ButtonAll from "../../../component/buttons/ButtonAll";
import SectionHeading from "../../../component/headingSections/SectionHeading";
import SectionMainP from "../../../component/paragaraph/SectionMainP";
import { MdOutlineMedicationLiquid } from "react-icons/md";
import FourByFour from "../../../component/Cards/FourByFour";
import { TbDental } from "react-icons/tb";
import { RiBrain2Line } from "react-icons/ri";
import { BsHeartPulse } from "react-icons/bs";
import { FaAllergies, FaAmbulance, FaBaby, FaFemale, FaPills, FaXRay } from "react-icons/fa";
import { FaEarListen, FaUserDoctor } from "react-icons/fa6";




function HealthSolutions() {
  return (
    <>
      {/* main div of this section  */}
      <div className="container mx-auto w-full h-auto pt-20 pb-10">

        {/* heading of this section  */}
        <SectionHeading
          text="Extra Ordinary Heath"
          className="pt-3 lg:ps-5 text-center md:pt-5 text-blue-900"
          secText=" Solutons"
          secClass=" text-lime-600"
          br={true}
        />

        {/* description  */}
        <div className=" text-center w-3/5 mx-auto pt-3">
          <SectionMainP text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              voluptas repudiandae, necessitatibus est sed placeat reiciendis
              animi consectetur omnis quidem tenetur voluptate cum neque nobis
              amet beatae enim quos nemo!'
            className='text-gray-900 text-center leading-tight'
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

        <div className="md:flex gap-5 mt-10">

          {/* 5 card  */}
          <FourByFour
            count="05"
            textHead="Pediatrics Department"
            icon={<FaBaby />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={0}
          />

          {/* 6 card  */}
          <FourByFour
            count="06"
            textHead="Gynecology Department"
            icon={<FaFemale />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={0.5}
          />

          {/* 7 card  */}
          <FourByFour
            className="md:hidden lg:block"
            count="07"
            textHead="Dermatology Department"
            icon={<FaAllergies />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={1}
          />

          {/* 8 card  */}
          <FourByFour
            className="md:hidden lg:block"
            count="08"
            textHead="ENT Department"
            icon={<FaEarListen />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={1.5}
          />
        </div>

        {/* third and forth card in tablet in new div */}
        <div className="hidden md:flex lg:hidden gap-5 mt-5">

          {/* 7 card in tablet  */}
          <FourByFour
            className=""
            count="08"
           textHead="Dermatology Department"
            icon={<FaAllergies />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={2}
          />
          {/* 8 card in tablet  */}
          <FourByFour
            className=""
            count="04"
             textHead="ENT Department"
            icon={<FaEarListen />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={2.5}
          />
        </div>

        <div className="md:flex gap-5 mt-10">

          {/* 9 card  */}
          <FourByFour
            count="09"
            textHead="General Surgery"
            icon={<FaUserDoctor />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={0}
          />

          {/* 10 card  */}
          <FourByFour
            count="10"
            textHead="Emergency Department"
            icon={<FaAmbulance />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={0.5}
          />

          {/* 11 card  */}
          <FourByFour
            className="md:hidden lg:block"
            count="11"
            textHead="Radiology Department"
            icon={<FaXRay />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={1}
          />

          {/* 12 card  */}
          <FourByFour
            className="md:hidden lg:block"
            count="12"
            textHead="Pharmacy Department"
            icon={<FaPills />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={1.5}
          />
        </div>

        {/* third and forth card in tablet in new div */}
        <div className="hidden md:flex lg:hidden gap-5 mt-5">

          {/* 11 card in tablet  */}
          <FourByFour
            className=""
            count="11"
            textHead="Radiology Department"
            icon={<FaXRay />}
            pText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptas repudiandae."
            btnText="More Departmint..."
            btnClass="text-blue-900"
            delay={2}
          />
          {/* 12 card in tablet  */}
          <FourByFour
            className=""
            count="12"
             textHead="Pharmacy Department"
            icon={<FaPills />}
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


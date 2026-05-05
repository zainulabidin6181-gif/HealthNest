
import ContactSection from "../home/sections/Conatct"
import HealthSolutions from "./section/HealthSolutions"
import HeroSection from "./section/HeroSection"
import PatientCareSection from "../home/sections/PatientCareSection"


function Index() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-3 md:px-4 xl:px-20 2xl:px-0 w-full">

        <HealthSolutions />


      </div>
      <PatientCareSection />

      <ContactSection />

    </>
  )
}

export default Index

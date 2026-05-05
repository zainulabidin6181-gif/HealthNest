import HeroSection from './sections/HeroSection'
import HealthSolutions from './sections/HealthSolutions'

import PatientCareSection from './sections/PatientCareSection'


import './home.css'
import AboutUs from './sections/AboutUs'
import BestDoctors from './sections/BestDoctors'
import ChooseUs from './sections/ChooseUs'
import ContactSection from './sections/Conatct'
import Testimonials from './sections/Testimonials'

function index() {
  return (
    <>
      <HeroSection />
      <div className='container mx-auto px-4 lg:px-0 xl:px-20 2xl:px-0 '>
        <AboutUs />
        <HealthSolutions />
      </div>
      <PatientCareSection />
      <ChooseUs />
      <BestDoctors />
      <Testimonials />
      <ContactSection />
    </>
  )
}

export default index

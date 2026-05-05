import HeroSection from "../about/sections/HeroSection"
import ContactSection from "../home/sections/Conatct"
import OurProcess from "./sections/OurProcess"
import Testimonials from "../home/sections/Testimonials"


function Index() {
    return (
        <div className="dark:bg-gray-950">
            <HeroSection />
            <div className="xl:px-20 2xl:px-0">
                <OurProcess />
            </div>
            <Testimonials />
            <ContactSection />
        </div>
    )
}

export default Index
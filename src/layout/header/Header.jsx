
import Logo from "../../component/layout-parts/Logo";
import Desktoplinks from "../../component/layout-parts/Desktoplinks";
import Mobilelinks from "../../component/layout-parts/Mobilelinks";
import ButtonAll from "../../component/buttons/ButtonAll";
import ScrollLine from "../../component/layout-parts/ScrollProgress";
import { Sun } from "lucide-react";
import ThemeToggle from "../../component/buttons/ThameBtn";

export default function Navbar() {
   
    return (
        <>
            {/* NAVBAR */}
            <div className="sticky top-0 z-50 bg-white dark:bg-gray-950">


                <nav className="container  mx-auto h-24 flex justify-between items-center">

                    {/* LEFT 30% */}
                    <div className="w-3/12 md:w-4/12 lg:w-3/12 md:ms">
                        <Logo />
                    </div>

                    {/* CENTER (Desktop) */}
                    <div className="w-6/12 hidden lg:flex justify-center gap-8">
                        <Desktoplinks />
                    </div>


                    {/* RIGHT 20% */}
                    <div className="w-3/12 flex justify-end pr-4">
                        <div className="hidden lg:flex gap-5">
                            <ThemeToggle />
                            <ButtonAll text={'Get an Appointment'} type='greenblue' />
                        </div>

                        <Mobilelinks />
                    </div>
                </nav>
                <ScrollLine />
            </div>

        </>
    );
}

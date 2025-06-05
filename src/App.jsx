import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Time from "./components/Time"
import Current from "./components/Current";
import ColorPicker from "./components/ColorPicker";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
    const initialTheme = localStorage.getItem('theme') || '#0CAFFF';
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="bg-gray-950 px-6 py-2 flex flex-col lg:py-8 lg:px-12 lg: h-full">
            <div className="flex flex-col w-full  lg:flex-row gap-4 lg:w-full h-fit justify-center">
                <div className="w-full lg:w-5/6 h-fit flex-col">
                    <div className="lg: h-1/3">
                        <HeroSection theme={theme} />
                    </div>
                    <div className="flex flex-col lg:flex lg:flex-row py-4 justify-self-auto h-2/3 w-full gap-2">
                        <div className="w-full lg:w-1/2 mr-2">
                            <ContactMe theme={theme} /> 
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Projects theme={theme} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full h-full lg:flex lg:flex-col lg:w-2/6 lg:h-lvh lg:gap-3">
                    <AboutMe theme={theme} />
                    <Time theme={theme} />
                    <ColorPicker setTheme={setTheme} />
                    <Footer theme={theme} />
                </div>

            </div>
        </div>
    );
};

export default App;

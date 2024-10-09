import AboutMe from "../about/AboutMe";
import Cards from "../cards/Cards";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
export default function Container(){
    return (
        <div className="container">
            <AboutMe/>
            <Cards/>
            <Skills />
            <Contact/>
            <Footer />
        </div>
    )
}
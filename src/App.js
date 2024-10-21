import logo from "./logo.svg";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import AboutMe from "./about/AboutMe";
// import Cards from "./cards/Cards";
// import Contact from "./contact/Contact";
// import Skills from "./skills/Skills";
import Container from "./container-layout/Container";
import UnitConverter from "./unitConverter/UnitConverter";
// import Hero from "./hero/Hero";
import Counter from "./counter/Counter";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Container>
        <UnitConverter />
        {/* <Hero />
        <AboutMe />
        <Cards />
        <Skills />
        <Contact /> */}
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

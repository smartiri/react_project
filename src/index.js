import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App.js";
import Header from "./header/Header.js";
import Container from "./container-layout/Container.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./about/AboutMe.js";
import Footer from "./footer/Footer.js";
import Cards from "./cards/Cards.js";
import Skills from "./skills/Skills.js";
import Contact from "./contact/Contact.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/aboutme"
          element={
            <div>
              <Header />
              <Container>
                <AboutMe />
              </Container>
              <Footer />
            </div>
          }
        />
        <Route
          path="/project"
          element={
            <div>
              <Header />
              <Container>
                <Cards />
              </Container>
              <Footer />
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div>
              <Header />
              <Container>
                <Skills />
              </Container>
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header />
              <Container>
                <Contact />
              </Container>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

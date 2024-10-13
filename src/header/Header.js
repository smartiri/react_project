import { useState } from "react";
import "../header/Header.css";
export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const toggleVisbility = () => {
    setOpenNav(!openNav);
  };

  return (
    <header>
      <div class="navbar">
        <ul class="menu">
          <a href="/">
            <img
              src={"/assets/sm-logo.jpg"}
              // className="App-logo"
              alt="logo"
              id="logo"
            />
          </a>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="#article">
            <li>About Me</li>
          </a>
          <a href="#project">
            <li>Project</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="navbar-mobile">
        <div style={{ float: "left" }}>
          <button id="hamb-icon" onClick={toggleVisbility}>
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="flexrow-row">
          <div>
            <a href="/">
              <img src={"/assets/sm-logo.jpg"} alt="web-page" id="logo" />
            </a>
          </div>
        </div>
        {openNav && (
          <div id="whole-menu">
            <ul class="menu">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="#article">
                <li>About Me</li>
              </a>
              <a href="#project">
                <li>Project</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

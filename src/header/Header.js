import '../header/Header.css';
import logo from '../logo.svg';
export default function Header(){
    return(
        <header>
            <div class="navbar">
            <ul class="menu">
                <a href="/">
                    <img src={logo} className="App-logo" alt="logo" id="logo"/>
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
        </header>
    );
}
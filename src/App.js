import { useState } from 'react';
import './styles/style.css'
import { FaBars, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaCode,FaArrowCircleUp,FaArrowUp} from "react-icons/fa";
import umutbektas from './img/umutbektas.jpg'
import umutbektas1 from './img/umutbektas - Kopya.jpg'
import portfolio from './img/portfolio.jpg'
import { Link } from 'react-scroll';
import Jump from 'react-reveal/Jump';
import { Slide ,Fade,Zoom} from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';

function App() {
  const [activeLink,setActiveLink] = useState("Home")
  return (
    <div>
      <header>
        <a href="#" className="logo">Portfolio</a>
        <FaBars id="navbar-icon" />
        <nav >
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100} style={{cursor:"pointer"}}>Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>About</Link>
          <Link to="services" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>Services</Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>Portfolio</Link>
          <Link to="contact" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>Contact</Link>
        </nav>
      </header>
      {/* HOME */}
      <section className="home" id="home">
        <div className="home-contect">
          <h3>Merhaba!</h3>
          <h1>Ben Umut Bektaş</h1>
          <h3>Frontend Developer <span><Typewriter options={{autoStart:true,loop:true,delay:80,strings:["Olarak çalışmaktayım"],pauseFor:5000}}/></span></h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
            aspernatur placeat architecto amet laudantium id.</p>
          <div className="social-media">
            <a href="#"><FaFacebookF className="icon" /></a>
            <a href="#"><FaInstagram className="icon" /></a>
            <a href="#"><FaTwitter className="icon" /></a>
            <a href="#"><FaLinkedinIn className="icon" /></a>
          </div>
          <button className="btnCv">Download CV</button>
        </div>
        <div className="home-img">
          <img src={umutbektas1}></img>
        </div>
      </section>
      {/* ABOUT SECTİON */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={umutbektas1}></img>
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Frontend Developer</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
            aspernatur placeat architecto amet laudantium id.</p>
          <button className="btnCv">Read More</button>
        </div>
      </section>
      {/* SERVİCES */}
      <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"> <FaCode /></i>
            <h3>Web Development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
              aspernatur placeat architecto amet laudantium id.</p>
            <button className="btnCv">Read More</button>
          </div>

          <div className="services-box">
            <i className="bx bx-code-alt"> <FaCode /></i>
            <h3>Web Development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
              aspernatur placeat architecto amet laudantium id.</p>
            <button className="btnCv">Read More</button>
          </div>

          <div className="services-box">
            <i className="bx bx-code-alt"> <FaCode /></i>
            <h3>Web Development</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
              aspernatur placeat architecto amet laudantium id.</p>
            <button className="btnCv">Read More</button>
          </div>
        </div>
      </section>
      {/* PORTFOLİO SECTİON */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={portfolio}></img>
            <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a><FaArrowCircleUp style={{backgroundColor:"#323946",fontSize:"2rem"}}/></a>
            </div>

          </div>
          <div className="portfolio-box">
            <img src={portfolio}></img>
            <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a><FaArrowCircleUp style={{backgroundColor:"#323946",fontSize:"2rem"}}/></a>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="E-mail"></input>
          </div>
          <div className="input-box">
            <input type="number" placeholder="Telefon Numarası"></input>
            <input type="text" placeholder="E-mail Adresi"></input>
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Mesaj.."></textarea>
          <button type="submit" className="btnCv">Gönder</button>
        </form>
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright; 2023 by Codehal | All rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><FaArrowUp style={{fontSize:"2.4rem"}}/></a>

        </div>
      </footer>
    </div>
  );
}

export default App;

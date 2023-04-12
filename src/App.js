import { useState } from 'react';
import './styles/style.css'
import { FaBars, FaInstagram, FaTwitter, FaLinkedinIn, FaCode,FaArrowCircleUp,FaArrowUp,FaGithub} from "react-icons/fa";
import umutbektas from './img/umutbektas.jpg'
import umutbektas1 from './img/umutbektas - Kopya.jpg'
import portfolio from './img/portfolio.jpg'
import { Link } from 'react-scroll';
import Jump from 'react-reveal/Jump';
import { Fade,Reveal } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';
import mycv from './cv/UmutBektasCv.pdf'
import { keyframes } from "@emotion/react";
import { topAnimation,leftAnimation,bottomAnimation,startAnimation,customAnimation} from './styles/Animation';

function App() {
  const [isopen,setIsOpen]=useState((false))
  
  const [activeLink,setActiveLink] = useState("Home")
  return (
    <div>
      <header>
        <a href="#" className="logo">Portfolio</a>
        <FaBars id="navbar-icon" />
        <nav className={isopen ? "nav-active": null}>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={100} style={{cursor:"pointer"}}>Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>About</Link>
          <Link to="services" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>Services</Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={100} style={{cursor:"pointer"}}>Portfolio</Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={100} style={{cursor:"pointer"}}>Contact</Link>
        </nav>
        <div className="nav-toggle" onClick={()=>setIsOpen(!isopen)}>
        <FaBars/>
        </div>
      </header>
      {/* HOME */}
      <section className="home" id="home">
        <Fade top duration="1000" keyframes={customAnimation}>
        <div className="home-contect">
          <h3>Merhaba!</h3>
          <Fade direction="left" damping={0.3} cascade={true}>
          <h1>Ben Umut Bektaş</h1></Fade>
          <h3>Frontend Developer <span><Typewriter options={{autoStart:true,loop:true,delay:80,strings:["Olarak çalışmaktayım"],pauseFor:5000}}/></span></h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
            aspernatur placeat architecto amet laudantium id.</p>
          <div className="social-media">
            <a href="https://github.com/umutbektass" target="_blank"><FaGithub className="icon" /></a>
            <a href="https://www.instagram.com/umutbektasx" target="_blank"><FaInstagram className="icon" /></a>
            <a href="https://github.com/umutbektass" target="_blank"><FaTwitter className="icon" /></a>
            <a href="https://www.linkedin.com/in/umut-bekta%C5%9F-6a6045241" target="_blank"><FaLinkedinIn className="icon" /></a>
          </div>
          <a className="btnCv downloadCv" href={mycv} download="UmutBektasCv">Download CV</a>
       
        </div>
        </Fade>
        <Fade top duration="1000" keyframes={startAnimation}>
        <div className="home-img">
          <img src={umutbektas1}></img>
        </div>
        </Fade>
      </section>
      {/* ABOUT SECTİON */}
      <section className="about" id="about">
      <Fade top duration="1000" keyframes={leftAnimation}>
        <div className="about-img">
          <img src={umutbektas1}></img>
        </div>
        </Fade>
        <div className="about-content">
        <Fade top duration="1000" keyframes={topAnimation}>
          <h2 className="heading">About <span>Me</span></h2> </Fade>
          <Fade  duration="1000" cascade>
          <h3>Frontend Developer</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam, modi
            aspernatur placeat architecto amet laudantium id.</p>
          <button className="btnCv">Read More</button>
          </Fade>
        </div>
       
      </section>
      {/* SERVİCES */}
      <section className="services" id="services">
      <Fade top duration="1000" keyframes={topAnimation}>
        <h2 className="heading">Our <span>Services</span></h2>
      </Fade>
      <Fade top duration="1000" keyframes={bottomAnimation}>
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
        </Fade>
      </section>
      {/* PORTFOLİO SECTİON */}
      <section className="portfolio" id="portfolio">
      <Fade top duration="1000" keyframes={topAnimation}>
        <h2 className="heading">Latest <span>Project</span></h2> </Fade>
        <Fade top duration="1000" keyframes={bottomAnimation}>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={portfolio}></img>
            <div className="portfolio-layer">
            <h4>Github-Jobs</h4>
            <p>React,css ve bootstrap kullandığım iş bulma platformu.</p>
            <a href="https://github.com/umutbektass/github-jobs" target="_blank"><FaArrowCircleUp style={{backgroundColor:"#323946",fontSize:"2rem"}}/></a>
            </div>

          </div>
          <div className="portfolio-box">
            <img src={portfolio}></img>
            <div className="portfolio-layer">
            <h4>E-Ticaret</h4>
            <p>React ve bootstrap kullanarak api den çektiğim ürünler ile yaptığım e-ticaret sistemi.</p>
            <a href="https://github.com/umutbektass/e-commerce-website" target="_blank"><FaArrowCircleUp style={{backgroundColor:"#323946",fontSize:"2rem"}}/></a>
            </div>

          </div>

        </div>
        </Fade>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
      <Fade top duration="1000" keyframes={topAnimation}>
        <h2 className="heading">Contact <span>Me</span></h2> </Fade>
        <Fade top duration="1000" keyframes={bottomAnimation}>
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
        </Fade>
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-text">
          <p>Umut Bektaş</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><FaArrowUp style={{fontSize:"2.4rem"}}/></a>

        </div>
      </footer>
    </div>
  );
}

export default App;

import './styles/style.css'
import { FaBars, FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaCode,FaArrowCircleUp } from "react-icons/fa";
import umutbektas from './img/umutbektas.jpg'
import umutbektas1 from './img/umutbektas - Kopya.jpg'
import portfolio from './img/portfolio.jpg'

function App() {
  return (
    <div>
      <header>
        <a href="#" className="logo">Portfolio</a>
        <FaBars id="navbar-icon" />
        <nav >
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* HOME */}
      <section className="home" id="home">
        <div className="home-contect">
          <h3>Merhaba!</h3>
          <h1>Ben Umut Bektaş</h1>
          <h3>Frontend Developer <span>Olarak Çalışmaktayım.</span></h3>
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
    </div>
  );
}

export default App;

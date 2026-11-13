import React, { useEffect} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../assets/images/abo.jpg';



function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);


 

 

  return (
      <>
        {/* Navbar */}


   <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ background: "linear-gradient(90deg, #F5A21B 0%, #F15A36 30%, #D51B5C 60%, #95146F 85%, #702078 100%)" }}
  data-aos="fade-right"
>
  <div className="container-fluid">
    {/* Brand Logo + Text */}
    <Link className="navbar-brand text-white fw-bold d-flex align-items-center fs-100
    " to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"
        style={{ width: "150px", height: "150px", borderRadius: "100px",}}
      />
       <h3> Coventry Tamil Kudumbam <br/>
                கோவென்ட்ரி தமிழ் குடும்பம்
</h3>
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler bg-white mx-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu Items */}
    <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
      <ul className="navbar-nav align-items-lg-center">
        <li className="nav-item mx-2">
          <Link to="/" className="nav-link text-white d-flex align-items-center">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/about" className="nav-link text-white d-flex align-items-center">About Us</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/event" className="nav-link text-white d-flex align-items-center">Events</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/contact" className="nav-link text-white d-flex align-items-center">Get in Touch</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/gallery" className="nav-link text-white d-flex align-items-center">Gallery</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/member" className="nav-link text-white d-flex align-items-center">Membership</Link>
        </li>
       

      

      

        {/* Login Button */}
        <li className="nav-item mx-2">
          <Link
            to="/login"
            className="btn btn-primary fw-bold  px-3 py-1 d-flex align-items-center"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  

      

       {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container text-center">
            <p className="hero-tamil">வணக்கம் • VANAKKAM</p>

            <h1>
              Welcome to
              <span> Coventry Tamil Kudumbam</span>
            </h1>

            <p className="hero-desc">
              Bringing Tamil families together through culture,
              tradition, friendship and unity.
              Celebrating our heritage and building a stronger
              community for future generations.
            </p>

            <div className="mt-4">
              <a href="#about" className="btn btn-gold me-3">
                Discover More
              </a>

              <a href="#membership" className="btn btn-outline-light">
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>

    
  {/* ABOUT SECTION */}
      <section className="about-section section-padding" id="about">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <img
                src={img1}
                className="about-img"
                alt="Community gathering"
              />
            </div>


            <div className="col-lg-6">
              <p className="section-label">ABOUT OUR COMMUNITY</p>

              <h2>
                One Community,
                <span> One Family</span>
              </h2>

              <p>
               Established in [Year - e.g., 2020], Coventry Tamil Kudumbam started as a small Facebook community of Tamil families seeking a space to connect amid the challenges of life in the UK. Today, with over [X members - e.g., 500+ members], we have grown into a supportive network that promotes Tamil language, culture, and mutual aid.

              </p>

              <p>
                Our aim is to preserve and promote Tamil language,
                culture, traditions and values while creating a
                welcoming environment for everyone.
              </p>

              <div className="about-points">
                <p>✓ Preserving Tamil Heritage</p>
                <p>✓ Bringing Families Together</p>
                <p>✓ Supporting Future Generations</p>
                <p>✓ Celebrating Unity and Diversity</p>
              </div>

              <a href="#contact" className="btn btn-maroon">
                Know More
              </a>
            </div>

          </div>
        </div>
      </section>
 <section className="mission-vision-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-subtitle">Who We Are</span>
          <h2>Our Mission & Vision</h2>
          <p>
            
  Preserve Heritage: Keep Tamil traditions alive through events, language classes, and cultural exchanges.
  Build Community: Offer a welcoming space for families to network, share experiences, and support each other—whether it’s advice on schools, job opportunities, or parenting in a new country.
 Foster Integration: Help Tamil families thrive in Coventry by bridging cultural gaps and collaborating with local organizations.
Inspired by the spirit of Tamil unity, we collaborate with local groups like the Coventry Tamil Welfare Association ￼ and the Arivu Foundation Tamil School ￼ to amplify our impact.
Coventry, with its historic charm and diverse population, is the perfect home for our kudumbam.
          </p>
        </div>

        <div className="row g-4 mt-4">

          {/* Mission */}
          <div className="col-md-6">
            <div className="mission-vision-card">
              
 <div className="mission-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>

              <p>
                To bring Tamil families together in Coventry by
                celebrating our rich culture, language, traditions,
                and values. We aim to create a welcoming and
                supportive community where families can connect,
                share experiences, and preserve our Tamil heritage
                for future generations.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6">
            <div className="mission-vision-card">
               <div className="vision-icon">
                <FaEye />
              </div>

              <h3>Our Vision</h3>

              <p>
                To build a strong, united, and vibrant Tamil
                community in Coventry where our culture and
                traditions continue to flourish for generations.
                We envision a community that promotes friendship,
                cultural pride, inclusivity, and togetherness.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  
    {/* Footer */}
        <footer>
          <div className="footer-content p-4 d-flex justify-content-around flex-wrap"data-aos="slide-right">
            
                             <div className="footer-links">
                              <h4>
                               coventry tamil kudumbam
                              </h4>

              <ul>
                 <li><a href="#">Home</a></li>
              <li><a href="#" >About</a></li>
              <li><a href="#" >Events</a></li>
              <li><a href="#" >Contact</a></li>

              </ul>
            </div>
               
  
            <div className="footer-links">
              <h3>CTK</h3>
              <ul>
              <li><a href="#" >Activites</a></li>
              <li><a href="#" >Gallery</a></li>
              <li><a href="#" >Membership</a></li>
              <li><a href="#" >Bonding of CTK</a></li>

              </ul>
            </div>
  
            <div className="footer-links">
              <h3>SUPPORT</h3>
              <ul>
               <li><a href="#" >Help Center</a></li>
              <li><a href="#" >FAQs</a></li>
              <li><a href="#" >Privacy Policy</a></li>
              <li><a href="#" >Terms & Conditions</a></li>

            </ul>

            </div>

            <div className="footer-links">
              <h4 className="text-white mb-3">Stay Updated</h4>
              <p className="mb-3">     Subscribe for the latest digital assets & offers.</p>
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input type="email" clasName="form-control" placeholder="Enter your email" required />
                <button className="btn btn-danger">Subscribe</button>
              </form>
            </div>
          </div>
         <div className="footer-bottom"data-aos="flip-right">
                       <div className="icons"data-aos="flip-right">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-pinterest"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-instagram"></i>
                      </div>
                         <p> coventry tamil kudumbam &copy; 2025 All rights reserved.</p>
                         </div>
        </footer>
      </>
    );
  }
  
  export default About;
  
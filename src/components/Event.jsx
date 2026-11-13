import React, { useEffect} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import img1 from '../assets/images/pon.jpg';
import img2 from '../assets/images/ne.jpg';
import img3 from '../assets/images/cul.jpg';
import img4 from '../assets/images/onam.jpg';
import img5 from '../assets/images/di.avif';
import img6 from '../assets/images/thai.jpg';



function Event() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

const events = [
  {
    title: "Pongal Celebration",
    date: "January",
    image: img1,
    desc: "Celebrate the Tamil harvest festival with traditional food, music and family gatherings."
  },
  {
    title: "Tamil New Year",
    date: "April",
    image: img2,
    desc: "Welcome the Tamil New Year with happiness, traditions and cultural programs."
  },
  {
    title: "Cultural Festival",
    date: "August",
    image: img3,
    desc: "Enjoy Tamil music, dance and cultural performances."
  },
  {
    title: "onam Festival",
    date: "september",
    image: img4,
    desc: "Enjoy kerala festival with flowers and food",
  },
  {
    title: "Diwali Festival",
    date: "November",
    image: img5,
    desc: "Enjoy Lights and sweets with neighbours",
  },
  {
    title: "Thai Poosam",
    date: "January",
    image: img6,
    desc: "Divine experience with our tamil kadavaul",
  }
];


const activities = [
  ["🎭", "Cultural Events", "Celebrate Tamil festivals and traditions."],
  ["📚", "Tamil Education", "Promote Tamil language and learning."],
  ["🎵", "Music & Dance", "Encourage traditional arts and talents."],
  ["🤝", "Community Support", "Build friendships and support families."]
];



 

 

  return (
      <>
        {/* Navbar */}


   <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ background: "linear-gradient(90deg, #F5A21B 0%, #F15A36 30%, #D51B5C 60%, #95146F 85%, #702078 100%)" }}

>
  <div className="container-fluid">
    {/* Brand Logo + Text */}
    <Link className="navbar-brand text-white fw-bold d-flex align-items-center" to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"
        style={{ width: "150px", height: "150px", borderRadius: "100px"}}
      />
      <h3>
 Coventry Tamil Kudumbam <br/>
                கோவென்ட்ரி தமிழ் குடும்பம்  
                </h3>  </Link>

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

      {/* EVENTS SECTION */}
      <section className="events-section section-padding" id="events">
        <div className="container">

          <div className="section-title text-center">
            <p className="section-label">OUR CELEBRATIONS</p>
            <h2>Celebrating Our <span>Culture</span></h2>
            <p>
              Every celebration brings us closer and keeps
              our traditions alive.
            </p>
          </div>

          <div className="row g-4">
            {events.map((event, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="event-card">
                  <img src={event.image} alt={event.title} />

                  <div className="event-content">
                    <span className="event-date">{event.date}</span>
                    <h4>{event.title}</h4>
                    <p>{event.desc}</p>
                    <a href="#contact">Learn More →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  
 {/* ACTIVITIES SECTION */}
      <section className="activities-section section-padding" id="activities">
        <div className="container">

          <div className="section-title text-center">
            <p className="section-label">WHAT WE DO</p>
            <h2>Our Community <span>Activities</span></h2>
            <p>
              Creating opportunities to learn, share,
              participate and grow together.
            </p>
          </div>

          <div className="row g-4">
            {activities.map((activity, index) => (
              <div className="col-lg-3 col-md-6 col-6" key={index}>
                <div className="activity-card">
                  <div className="activity-icon">{activity[0]}</div>
                  <h5>{activity[1]}</h5>
                  <p>{activity[2]}</p>
                </div>
              </div>
            ))}
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
  
  export default Event;
  
import React, { useEffect} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import img1 from '../assets/images/g1.jpeg';
import img2 from '../assets/images/g2.jpeg';
import img3 from '../assets/images/g3.jpeg';
import img4 from '../assets/images/g4.jpeg';
import img5 from '../assets/images/g5.jpeg';
import img6 from '../assets/images/g6.jpeg';
import img7 from '../assets/images/g7.jpeg';
import img8 from '../assets/images/g8.jpeg';
import img9 from '../assets/images/g9.jpeg';
import img10 from '../assets/images/g10.jpeg';
import ping1 from '../assets/images/p1.jpg';
import ping2 from '../assets/images/p2.jpg';
import ping3 from '../assets/images/p3.jpg';
import ping4 from '../assets/images/p4.jpg';
import ping5 from '../assets/images/p5.jpg';
import ping6 from '../assets/images/p6.jpg';
import im1 from '../assets/images/i1.jpeg';
import im2 from '../assets/images/i2.jpeg';
import im3 from '../assets/images/i3.jpeg';
import im4 from '../assets/images/i4.jpeg';
import im5 from '../assets/images/i5.jpeg';
import im6 from '../assets/images/i6.jpeg';
import im7 from '../assets/images/i7.jpeg';
import im8 from '../assets/images/i8.jpeg';
import im9 from '../assets/images/i9.jpeg';
import im10 from '../assets/images/i10.jpeg';
import im11 from '../assets/images/i11.jpeg';
import im12 from '../assets/images/i13.jpeg';
import im13 from '../assets/images/i12.jpeg';
import im14 from '../assets/images/i14.jpeg';


function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);


 const galleryImages = [
  {
    image: img1,
    title: "Cultural Celebrations",
    category: "Culture",
  },
  {
    image: img2,
    title: "Tamil Festivals",
    category: "Festival",
  },
  {
    image: img3,
    title: "Community Gathering",
    category: "Community",
  },
  {
    image: img4,
    title: "Traditional Events",
    category: "Events",
  },
  {
    image: img5,
    title: "Family Activities",
    category: "Activities",
  },
  {
    image: img6,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: img7,
    title: "Tamil Heritage",
    category: "Culture",
  } ,{
    image: img8,
    title: "Tamil Heritage",
    category: "Culture",
  } ,{
    image: img9,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: img10,
    title: "Tamil Heritage",
    category: "Culture",
  }
  ,
    {
    image: im1,
    title: "Tamil Heritage",
    category: "Culture",
  }
  ,
    {
    image: im2,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im3,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im4,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im5,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im6,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im7,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im8,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im9,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im10,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im11,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im12,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im13,
    title: "Tamil Heritage",
    category: "Culture",
  },
    {
    image: im14,
    title: "Tamil Heritage",
    category: "Culture",
  }
    
];

 
const events = [
  {
    title: "Pongal Celebration",
    date: "January 2025",
    image: ping1,
  },
  {
    title: "Diwali Celebration",
    date: "October 2024",
    image: ping2,
  },
  {
    title: "Pongal Celebration",
    date: "January 2024",
    image: ping3,
  },
  {
    title: "World Tamil Diaspora Day",
    date: "January 2024",
    image: ping4,
  },
  {
    title: "Diwali Celebration",
    date: "November 2023",
    image: ping5,
  },
  {
    title: "Pongal Celebration",
    date: "January 2023",
    image: ping6,
  },
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
        style={{ width: "150px", height: "150px", borderRadius: "100px"}}/>
<h3>
 Coventry Tamil Kudumbam <br/>
                கோவென்ட்ரி தமிழ் குடும்பம்  </h3>  </Link>

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

  





    <section className="gallery-section" id="gallery">
      <div className="container">

        <div className="gallery-heading text-center">
          <span className="gallery-subtitle">
            OUR MEMORIES
          </span>

          <h2>Our Gallery</h2>

          <p>
            Capturing beautiful moments, cultural celebrations,
            and unforgettable memories of our Coventry Tamil community.
          </p>
        </div>

        <div className="row g-4">
          {galleryImages.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                />

                <div className="gallery-overlay">
                  <span>{item.category}</span>
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="/contact" className="gallery-btn">
            Join Our Community
          </a>
        </div>

      </div>
    </section>
  

      

      
    




    <section className="past-events py-5">
      <div className="container">

        <h2 className="past-events-title text-center mb-4">
          PAST EVENTS
        </h2>

        <div className="row">
          {events.map((event, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={index}
            >
              <div className="event-item d-flex align-items-center">

                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />
                </div>

                <div className="event-details">
                  <h5>{event.title}</h5>
                  <p>{event.date}</p>
                </div>

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
  
  export default Gallery;
  
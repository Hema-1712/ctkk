import React, { useEffect,useState

} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import {
  

  FaYoutube,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../assets/images/i3.jpeg';
import image2 from '../assets/images/i4.jpeg';
import image3 from '../assets/images/i5.jpeg';
import event1 from '../assets/images/di.avif';
import event2 from '../assets/images/pon.jpg';
import event3 from '../assets/images/gg.jpeg';
import l1 from '../assets/images/f1.jpeg';
import l2 from '../assets/images/f2.jpeg';
import l3 from '../assets/images/f3.jpeg';
import l4 from '../assets/images/f6.jpeg';
import l5 from '../assets/images/f5.jpeg';

import image
 from '../assets/images/je.jpeg';


function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
const titleSponsors = [
  {
    name: "Freedom Circle",
    category: "Mortgage | Insurance",
    tagline: "Securing Homes, Ensuring Lives",
    logo: l1,
  },
  {
    name: "Charlies Vaeraz Superstore",
    category: "Superstore",
    logo: l2,
  },
   {
    name: "Groupkart",
    category: "Associate Sponsor",
    logo: l3,
  },
  {
    name: "Homely",
    category: "Fine Indian Dining",
    logo: l5,
  },
  {
    name: "Dosa Village",
    category: "South Indian Restaurant",
    logo: l4,
  }
];


const SponsorCard = ({ sponsor }) => (
  <div className="col-12 col-sm-6 col-lg-2  mb-4">
    <div className="sponsor-card h-100">
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="sponsor-logo"
      />
      <h4>{sponsor.name}</h4>
      <p>{sponsor.category}</p>
      {sponsor.tagline && (
        <small>{sponsor.tagline}</small>
      )}
    </div>
  </div>
);
const kurals = [
  {
    number: 1,
    chapter: "கடவுள் வாழ்த்து",
    line1: "அகர முதல எழுத்தெல்லாம் ஆதி",
    line2: "பகவன் முதற்றே உலகு"
  },
  {
    number: 2,
    chapter: "கடவுள் வாழ்த்து",
    line1: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்",
    line2: "நற்றாள் தொழாஅர் எனின்"
  },
  {
    number: 3,
    chapter: "கடவுள் வாழ்த்து",
    line1: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்",
    line2: "நிலமிசை நீடுவாழ் வார்"
  },
  {
    number: 4,
    chapter: "கடவுள் வாழ்த்து",
    line1: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு",
    line2: "யாண்டும் இடும்பை இல"
  },
  {
    number: 5,
    chapter: "கடவுள் வாழ்த்து",
    line1: "இருள்சேர் இருவினையும் சேரா இறைவன்",
    line2: "பொருள்சேர் புகழ்புரிந்தார் மாட்டு"
  }
];
const [search, setSearch] = useState("");
  const [random, setRandom] = useState(kurals[0]);

  const filtered = kurals.filter(k =>
    k.number.toString().includes(search) ||
    k.line1.includes(search) ||
    k.line2.includes(search) ||
    k.chapter.includes(search)
  );

  const randomKural = () => {
    const item = kurals[
      Math.floor(Math.random() * kurals.length)
    ];
    setRandom(item);
  };

  const downloadPDF = () => {
    window.open(
      "https://www.projectmadurai.org/pm_etexts/pdf/pm0001_01.pdf",
      "_blank"
    );
  };

 const events = [
  {
    date: "15",
    month: "DEC",
    year: "2026",
    title: "Tamil Cultural Celebration",
    category: "Cultural Event",
    image:event1,
    description:
      "Celebrate Tamil culture, traditions, music, dance and heritage with our community.",
  },
  {
    date: "10",
    month: "JAN",
    year: "2027",
    title: "Pongal Celebration",
    category: "Festival",
    image: event2,
    description:
      "Join our families to celebrate the traditional Tamil harvest festival with joy.",
  },
  {
    date: "21",
    month: "FEB",
    year: "2027",
    title: "Tamil Language Day",
    category: "Community Event",
    image:event3,
    description:
      "Celebrate the beauty of Tamil language through activities, performances and learning.",
  },
];

 

 

  return (
    <>
        {/* Navbar */}
 {/* Brand Logo + Text */}
    

   <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ background: "linear-gradient(90deg, #F5A21B 0%, #F15A36 30%, #D51B5C 60%, #95146F 85%, #702078 100%)" }}

>
  <div className="container-fluid">
   
    <Link className="navbar-brand text-white  fw-bold d-flex align-items-center" to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"         style={{ width: "150px", height: "150px", borderRadius: "100px"}}

      />
      <h3>Coventry Tamil Kudumbam <br/>
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

  
<div id="manualCarousel" className="carousel slide mt-4 mb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Slide 3" />
            </div>
           
          </div>
  
          <button className="carousel-control-prev" type="button" data-bs-target="#manualCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#manualCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
  
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#manualCarousel" data-bs-slide-to="2"></button>
          </div>
        </div>



<div className="container bg-warning mt-5  mb-5 text-center" style={{borderRadius:"12px"}}>
  <div className="row">
    <div className="col-md-12">
      <img src={image} className="img-fluid" alt="groupimage"/>
    </div>
    </div>
    <div className="container bg-warning mt-5  mb-5 text-center" style={{borderRadius:"12px"}}>
  <div className="row">
    <div className="col" style={{textAlign:"left"}}>

Coventry Tamil Kudumbam (CTK) is a vibrant, non-political, and non-profit cultural community group dedicated to uniting the Tamil community across Coventry and the West Midlands. Rooted in the timeless values of inclusivity and heritage, CTK offers a welcoming space where Indian families and individuals can celebrate their identity, language, and traditions.
<br/>
<br/>
At CTK, we believe that culture is the heartbeat of community. Through events, workshops, and celebrations, we promote the richness of Tamil language, arts, and customs—helping members of all ages reconnect with their roots and pass on this legacy to future generations.

Our secular and inclusive approach means everyone is welcome. CTK proudly stands independent of any religious, national, or political affiliations, allowing people from diverse backgrounds to come together through a shared love of Tamil heritage.
<br/>

Whether it's Deepavali celebrations, Tamil New Year gatherings, educational programs, or social meetups, CTK continues to thrive as a hub of cultural and social integration. Our activities foster friendships, strengthen community ties, and create joyful memories that last a lifetime.
<br/>
<br/>
 “யாதும் ஊரே, யாவரும் கேளிர்”

Inspired by the ancient Tamil philosophy—“Every place is home; everyone is kin”—CTK embodies the spirit of unity and belonging. Join us in celebrating Tamil culture, building community, and shaping a vibrant future together. Coventry Tamil Kudumbams
    </div>
  </div>
</div>
</div>

 
    
      





  
  

      <nav className="navbar navbar-dark bg-danger">
        <div className="container">
          <span className="navbar-brand fw-bold">
            திருக்குறள்
          </span>
          <span className="text-white">
            Thiruvalluvar
          </span>
        </div>
      </nav>

      <header className="hero text-center">
        <div className="container">
          <h1>திருக்குறள்</h1>
          <h3>1330 குறள்கள் | 133 அதிகாரங்கள்</h3>
          <p>உலகப் பொதுமறை - திருவள்ளுவர்</p>

          <button
            className="btn btn-warning mt-3"
            onClick={downloadPDF}
          >
            Download Thirukkural PDF
          </button>
        </div>
      </header>

      <div className="container py-5">

        <h2 className="text-center mb-4">
          திருக்குறள் தேடல்
        </h2>

        <input
          className="form-control mb-4"
          placeholder="குறள் எண் அல்லது தமிழ் வார்த்தை தேடவும்..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="row">
          {filtered.map(k => (
            <div className="col-md-6 mb-4" key={k.number}>
              <div className="card kural-card h-100">
                <div className="card-body text-center">
                  <h5 className="text-danger">
                    குறள் {k.number}
                  </h5>
                  <p className="text-muted">
                    {k.chapter}
                  </p>
                  <h5>{k.line1}</h5>
                  <h5>{k.line2}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center">
            குறள் கிடைக்கவில்லை.
          </p>
        )}

        <div className="random-section text-center mt-5 p-4">
          <h3>இன்றைய திருக்குறள்</h3>

          <h5>குறள் {random.number}</h5>
          <h4>{random.line1}</h4>
          <h4>{random.line2}</h4>

          <button
            className="btn btn-danger mt-3"
            onClick={randomKural}
          >
            புதிய குறள்
          </button>
        </div>

      </div>

      

  
     

     

      {/* WHY JOIN US */}
      <section className="why-section section-padding">
        <div className="container text-center">
          <p className="section-label">WHY JOIN US?</p>
          <h2>Be Part of Our <span>Tamil Family</span></h2>

          <p className="why-desc">
            Being part of Coventry Tamil Kudumbam means connecting
            with people who share our language, culture and traditions.
            Together, we create a friendly environment where families
            feel welcome and everyone has an opportunity to participate.
          </p>

          <div className="row g-4 mt-4">
            {[
              ["❤️", "Community Connections"],
              ["🌺", "Cultural Heritage"],
              ["👨‍👩‍👧", "Family Activities"],
              ["🤝", "Friendship & Unity"]
            ].map((item, index) => (
              <div className="col-md-3 col-6" key={index}>
                <div className="why-card">
                  <h2>{item[0]}</h2>
                  <h5>{item[1]}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section section-padding" id="gallery">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-label">OUR MEMORIES</p>
            <h2>Our <span>Gallery</span></h2>
            <p>
              Every picture tells a story of friendship,
              happiness and togetherness.
            </p>
            <Link to="/gallery" className="btn btn-warning">view all</Link>
          </div>
        </div>
      </section>

      




    <section className="upcoming-events-section" id="events">
      <div className="container">

        <div className="events-heading text-center">
          <span className="events-subtitle">SAVE THE DATE</span>
          <h2>Upcoming Events</h2>
          <p>
            Be part of our celebrations, cultural activities and
            community gatherings. Let's create beautiful memories together!
          </p>
        </div>

        <div className="row g-4">
          {events.map((event, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="event-card">

                <div className="event-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />

                  <div className="event-date">
                    <h3>{event.date}</h3>
                    <span>{event.month}</span>
                    <small>{event.year}</small>
                  </div>
                </div>

                <div className="event-content">
                  <span className="event-category">
                    {event.category}
                  </span>

                  <h4>{event.title}</h4>

                  <p>{event.description}</p>

                  <a href="/contact" className="event-btn">
                    Register Now →
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="events-footer-text">
            More exciting events are coming soon!
          </p>
        </div>

      </div>
    </section>

      
      

      







    <section className="sponsors-section py-5">
      <div className="container">

        <div className="text-center mb-4">
          <h2 className="main-heading">
            OUR VALUABLE SPONSORS
          </h2>
          <p>
            Thank you for supporting Tamil Kudumbam!
          </p>
        </div>

        <h3 className="sponsor-heading">
          Title Sponsors
        </h3>

        <div className="row justify-content-center">
          {titleSponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              sponsor={sponsor}
            />
          ))}
        </div>

       

        
        </div>

      
    </section>
  

      

   <div className="social-icons align-items-center">
    <a
        href="https://www.facebook.com/groups/2733844063580291/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
    >
        <FaFacebook />
    </a>

    <a
        href="https://www.instagram.com/coventrytamilkudumbam?igsh=Yzd1M2puZnNrc3Jh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
    >
        <FaInstagram />
    </a>

    <a
        href="http://www.youtube.com/@CoventryTamilKudumbam"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
    >
        <FaYoutube />
    </a>
</div>
    
 

    
      
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
  
  export default Home;
  
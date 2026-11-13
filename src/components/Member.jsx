import React, { useEffect,useState

} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Member() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your support enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
const faqData = [
  {
    question: "What is Coventry Tamil Kudumbam?",
    answer:
      "Coventry Tamil Kudumbam is a community that brings Tamil families together to celebrate Tamil culture, language, traditions and heritage in Coventry.",
  },
  {
    question: "Who can join Coventry Tamil Kudumbam?",
    answer:
      "Tamil families, individuals, children and anyone interested in Tamil culture and community activities are welcome to join us.",
  },
  {
    question: "How can I become a member?",
    answer:
      "You can become a member by visiting our Membership page and submitting the membership enquiry form.",
  },
  {
    question: "What types of events do you organize?",
    answer:
      "We organize Tamil festivals, Pongal celebrations, cultural programs, traditional activities, family gatherings and community events.",
  },
  {
    question: "Do you organize Tamil language activities for children?",
    answer:
      "We aim to encourage younger generations to learn and appreciate the Tamil language, culture and traditions through community activities.",
  },
  {
    question: "How can I participate in upcoming events?",
    answer:
      "Visit our Upcoming Events section to see event announcements. You can contact our team for participation and registration details.",
  },
  {
    question: "How can I contact Coventry Tamil Kudumbam?",
    answer:
      "You can reach us through our Contact Us page, where you can send your questions and enquiries.",
  },
];


 

 
  

  
    <section className="help-support-section" id="support">
      <div className="container">

        <div className="support-heading text-center">
          <span>WE ARE HERE TO HELP</span>
          <h2>Help & Support</h2>
          <p>
            Need assistance? We are here to support our community.
            Find answers or contact our team for help.
          </p>
        </div>

        {/* Support Cards */}
        <div className="row g-4 mb-5">

          <div className="col-lg-4 col-md-6">
            <div className="support-card">
              <div className="support-icon">👥</div>
              <h4>Membership Support</h4>
              <p>
                Need help with membership registration,
                joining or updating your details?
              </p>
              <a href="/member">Get Membership Help →</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="support-card">
              <div className="support-icon">🎉</div>
              <h4>Event Support</h4>
              <p>
                Have questions about upcoming events,
                participation or registration?
              </p>
              <a href="/event">Explore Events →</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="support-card">
              <div className="support-icon">💬</div>
              <h4>General Enquiries</h4>
              <p>
                Contact us for general information,
                suggestions and community assistance.
              </p>
              <a href="/contact">Contact Our Team →</a>
            </div>
          </div>

        </div>

        {/* Support Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="support-form-card">
              <h3>Submit a Support Request</h3>
              <p>Tell us how we can help you.</p>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Support Category</label>
                  <select
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Membership">Membership Support</option>
                    <option value="Events">Event Enquiry</option>
                    <option value="Activities">Activities</option>
                    <option value="Technical">Website Support</option>
                    <option value="General">General Enquiry</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Describe how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="support-submit-btn">
                  Submit Request →
                </button>

              </form>
            </div>

          </div>
        </div>

        <div className="support-note text-center">
          <h4>We're Happy to Help!</h4>
          <p>
            Your questions and feedback help us build a stronger
            Coventry Tamil community.
          </p>
        </div>

      </div>
    </section>



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
<h3>Coventry Tamil Kudumbam <br/>
                கோவென்ட்ரி தமிழ் குடும்பம்
                </h3>    </Link>

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

  

      

   <section className="membership-section section-padding" id="membership">
        <div className="container text-center">
          <p className="section-label">BE PART OF US</p>
          <h2>Let's Grow Together!</h2>

          <p>
            Join Coventry Tamil Kudumbam and become part of our
            wonderful Tamil community. Let's preserve our traditions,
            celebrate our culture and build a brighter future together.
          </p>

          <Link to="/contact" className="btn btn-dark">
            Become a Member
          </Link>
        </div>
      </section>
    



    <section className="faq-section" id="faq">
      <div className="container">

        <div className="faq-heading text-center">
          <span>HAVE QUESTIONS?</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about our community,
            membership, events and activities.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">

            <div className="accordion faq-accordion" id="faqAccordion">

              {faqData.map((faq, index) => (
                <div className="accordion-item faq-item" key={index}>

                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`faq${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>

                  <div
                    id={`faq${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

        <div className="faq-contact text-center">
          <h4>Still Have Questions?</h4>
          <p>We are happy to help you. Get in touch with our team.</p>
          <Link to="/contact" className="btn btn-dark">contact us
          </Link>
        </div>

      </div>
    </section>

 <section className="help-support-section" id="support">
      <div className="container">

        <div className="support-heading text-center">
          <span>WE ARE HERE TO HELP</span>
          <h2>Help & Support</h2>
          <p>
            Need assistance? We are here to support our community.
            Find answers or contact our team for help.
          </p>
        </div>

        {/* Support Cards */}
        <div className="row g-4 mb-5">

          <div className="col-lg-4 col-md-6">
            <div className="support-card">
              <div className="support-icon">👥</div>
              <h4>Membership Support</h4>
              <p>
                Need help with membership registration,
                joining or updating your details?
              </p>
              <a href="/member">Get Membership Help →</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="support-card">
              <div className="support-icon">🎉</div>
              <h4>Event Support</h4>
              <p>
                Have questions about upcoming events,
                participation or registration?
              </p>
              <a href="/event">Explore Events →</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="support-card">
              <div className="support-icon">💬</div>
              <h4>General Enquiries</h4>
              <p>
                Contact us for general information,
                suggestions and community assistance.
              </p>
              <a href="/contact">Contact Our Team →</a>
            </div>
          </div>

        </div>

        {/* Support Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="support-form-card">
              <h3>Submit a Support Request</h3>
              <p>Tell us how we can help you.</p>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Support Category</label>
                  <select
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Membership">Membership Support</option>
                    <option value="Events">Event Enquiry</option>
                    <option value="Activities">Activities</option>
                    <option value="Technical">Website Support</option>
                    <option value="General">General Enquiry</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Describe how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="support-submit-btn">
                  Submit Request →
                </button>

              </form>
            </div>

          </div>
        </div>

        <div className="support-note text-center">
          <h4>We're Happy to Help!</h4>
          <p>
            Your questions and feedback help us build a stronger
            Coventry Tamil community.
          </p>
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
  
  export default Member;
  
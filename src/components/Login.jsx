import React, { useEffect,useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

 const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login form submitted successfully!");
  };
 

 

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
        loading="eager"         style={{ width: "150px", height: "150px", borderRadius: "100px"}}

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

  
 

  
    <div className="login-page" data-aos="fade-up">

      <div className="login-container">

        {/* Left Content */}
        <div className="login-left">
          <div className="login-overlay">
            <div>
              <h1>வணக்கம்!</h1>

              <h2>Coventry Tamil Kudumbam</h2>

              <p>
                Bringing Tamil families together through
                culture, tradition, friendship and unity.
              </p>

              <h5>
                United by Culture, Connected by Tradition.
              </h5>
            </div>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="login-right">

          <div className="login-form">

            <div className="login-logo">✿</div>

            <p className="login-subtitle">
              WELCOME BACK
            </p>

            <h2>Member Login</h2>

            <p className="login-description">
              Login to your account and stay connected
              with our Tamil community.
            </p>

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-4">
                <label>Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label>Password</label>

                <div className="password-box">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>

              {/* Remember and Forgot */}
              <div className="login-options">
                <label className="remember-label">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <a href="/forgot-password">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="login-btn">
                Login
              </button>

            </form>

            <div className="register-text">
              Don't have an account?
              <a href="/register"> Create Account</a>
            </div>

            <div className="login-footer">
              © 2026 Coventry Tamil Kudumbam
            </div>

          </div>
        </div>

      </div>
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
  
  export default Login;
  
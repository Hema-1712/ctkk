

import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// React Router
import { HashRouter, Routes, Route } from "react-router-dom";

// Components

import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';
import Member from './components/Member';
import Login from './components/Login';




function App() {
  const [count, setCount] = useState(0);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <HashRouter>
           

      <Routes>
      
               <Route path="/" element={<Home/>} />
                              <Route path="/about" element={<About/>} />
               <Route path="/event" element={<Event/>} />
               <Route path="/contact" element={<Contact/>} />
               <Route path="/gallery" element={<Gallery/>} />
               <Route path="/login" element={<Login/>} />
               <Route path="/member" element={<Member/>} />

        

      </Routes>
      
    </HashRouter>
  );
}

export default App;
                                  




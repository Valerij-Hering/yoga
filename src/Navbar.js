import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './Home';
import logo from './logo3.png'
import Contacts from './Contacts';
import About from './About';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    
    const [burger, setBurger] = useState(false);
  const [colorNav, setColorNav] = useState(false);

    const burgerActiv = () => {
      setBurger(!burger);
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10){
        setColorNav(true)
        }
        else if (scrolled <= 10){
        setColorNav(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);
  return (
    <Router>
        <nav className={colorNav ? "navBarColor" : "navBar"} >
          <div className='container-logo' data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">
            <img className='logo' src={logo} width="60px" alt='logo'/>
            <p>yoga</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">
            <Link to="/" className='link' >Home</Link>
            <HashLink className='link' smooth to="/#product">Programm</HashLink>
            <Link to="/about" className='link'>About Us</Link>
            <Link to="/contacts" className='link link-contacts'>Contacts</Link>
          </div>
          <button className='btnSign' data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">Sign in</button>
          <button onClick={() => burgerActiv()} className='burger' data-aos="fade-down" data-aos-duration="1000" data-aos-once="false"><i className='fas	fa-bars'></i></button>
        </nav>

        <div className={burger ? 'container-burger-activ' : 'container-burger'} >
            <button className='btn-close-burger' onClick={() => burgerActiv()}><i className='fas	fa-times'></i></button>
            <Link  onClick={() => burgerActiv()}  to="/" className='link-burger link-burger1'>Home</Link>
            <HashLink className='link-burger link-burger1' smooth to="/#product">Programm</HashLink>
            <Link  onClick={() => burgerActiv()} to="/about" className='link-burger'>About Us</Link>
            <Link  onClick={() => burgerActiv()} to="/contacts" className='link-burger'>Contacts</Link>
        </div>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </Router>
  );
}

export default Navbar
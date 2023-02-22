import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './Home';
import logo from './logo.png'
import Contacts from './Contacts';
import About from './About';
import { useState } from 'react';


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
        <nav className={colorNav ? "navBarColor" : "navBar"}>
          <div className='container-logo'>
            <img className='logo' src={logo} width="60px" alt='logo'/>
            <p>yoga</p>
          </div>
          <Link to="/" className='link'>Home</Link>
          <Link to="/about" className='link'>About Us</Link>
          <Link to="/contacts" className='link link-contacts'>Contacts</Link>
          <button onClick={() => burgerActiv()} className='burger'><i className="fi fi-br-menu-burger"></i></button>
        </nav>

        <div className={burger ? 'container-burger-activ' : 'container-burger'} >
            <button className='btn-close-burger' onClick={() => burgerActiv()}><i className="fi fi-br-cross-small"></i></button>
            <Link  onClick={() => burgerActiv()}  to="/" className='link-burger link-burger1'>Home</Link>
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
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Home from './Home';
import logo from './Images/logo3.png'
import Contacts from './Contacts';
import About from './About';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Account from './Auth/Account';
import Blog from './Blog';



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

    const Scroll = () => {
      window.scrollTo(0, 0)
      
  }


    window.addEventListener('scroll', toggleVisible);
  return (
    <Router>
        <nav className={colorNav ? "navBarColor" : "navBar"} >
          <div className='container-logo' data-aos="fade-down" data-aos-duration="1500" data-aos-once="false">
            <img className='logo' src={logo} width="60px" alt='logo'/>
            <p>yoga</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" data-aos-once="false">
            <Link onClick={Scroll} to="/" className='link'>Home</Link>
            <HashLink className='link' smooth to="/#product">Programm</HashLink>
            <Link onClick={Scroll} to="/about" className='link'>About Us</Link>
            <Link onClick={Scroll} to="/blog" className='link'>Blog</Link>
            <Link onClick={Scroll} to="/contacts" className='link link-contacts'>Contacts</Link>
            
          </div>
          
          <div className='box_navbarAuth' data-aos="fade-down" data-aos-duration="1500" data-aos-once="false">
            <Login/>
            <Logout/>
          </div>
          <button onClick={() => burgerActiv()} className='burger' data-aos="fade-down" data-aos-duration="1500" data-aos-once="false"><i className='fi fi-rr-menu-burger'></i></button>
        </nav>

        <div className={burger ? 'container-burger-activ' : 'container-burger'} >
            <button className='btn-close-burger' onClick={() => burgerActiv()}><i className='fi fi-rr-cross-small'></i></button>
            <div className='box_navbarBurgerAuth'>
            <Account/>
            <Login/>
            <Logout/>
            </div>
            <Link  onClick={() => {burgerActiv(); Scroll()}}  to="/" className='link-burger link-burger1'>Home</Link>
            <HashLink className='link-burger link-burger1' onClick={() => burgerActiv()} smooth to="/#product">Programm</HashLink>
            <Link  onClick={() => {burgerActiv(); Scroll()}} to="/about" className='link-burger'>About Us</Link>
            <Link onClick={() => {burgerActiv(); Scroll()}} to="/blog" className='link-burger'>Blog</Link>
            <Link  onClick={() => {burgerActiv(); Scroll()}} to="/contacts" className='link-burger'>Contacts</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </Router>
  );
}

export default Navbar
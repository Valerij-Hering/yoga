import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
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
import { useRef } from 'react';



const Navbar = () => {
    
    const [burger, setBurger] = useState(false);
    const [colorNav, setColorNav] = useState(false);
    const navRef = useRef(null);

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
        <nav className={colorNav ? "navBarColor" : "navBar"} ref={navRef}>
          <div className='container-logo' data-aos="fade-down" data-aos-duration="1500" data-aos-once="false">
            <img className='logo' src={logo} width="60px" alt='logo'/>
            <p>yoga</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" data-aos-once="false">
            <NavLink onClick={Scroll} to="/" className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>Home</NavLink>
            <HashLink className='link' smooth to="/#product">Programm</HashLink>
            <NavLink onClick={Scroll} to="/about" className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>About Us</NavLink>
            <NavLink onClick={Scroll} to="/blog" className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>Blog</NavLink>
            <NavLink onClick={Scroll} to="/contacts" className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>Contacts</NavLink>
            
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
            <br/>
            <NavLink  onClick={() => {burgerActiv(); Scroll()}}  to="/" className={({ isActive }) => isActive ? 'activeBurgerLink' : 'link-burger link-burger1'}>Home</NavLink>
            <HashLink className='link-burger link-burger1' onClick={() => burgerActiv()} smooth to="/#product">Programm</HashLink>
            <NavLink  onClick={() => {burgerActiv(); Scroll()}} to="/about" className={({ isActive }) => isActive ? 'activeBurgerLink' : 'link-burger'}>About Us</NavLink>
            <NavLink onClick={() => {burgerActiv(); Scroll()}} to="/blog" className={({ isActive }) => isActive ? 'activeBurgerLink' : 'link-burger'}>Blog</NavLink>
            <NavLink  onClick={() => {burgerActiv(); Scroll()}} to="/contacts" className={({ isActive }) => isActive ? 'activeBurgerLink' : 'link-burger'}>Contacts</NavLink>
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
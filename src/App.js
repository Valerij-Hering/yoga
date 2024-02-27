import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Loader from './Loader';
import { gsap } from 'gsap';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(".nav .Link:not(.poirotLink)", 
        { opacity: 0 }, // start from
        { 
          duration: 0.5,
          opacity: 1, // finish to
          stagger: 0.2,
          ease: "power1.out",
          delay: 0.5 
        }
    );
  }
  }, [loading]);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2500)
  },[])

  if (loading ){
    return <Loader/>
   }
  

  return(
    <div>
      <Navbar/>
      <Footer/>
    </div>
  )
  
}

export default App;

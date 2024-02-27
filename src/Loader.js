import { gsap } from 'gsap';
import { useEffect } from 'react';
import logo from './Images/logo3.png'


const Loader = ()=>{

    useEffect(() => {
        gsap.to("#logoLoader", {
            opacity: 0,
            scale: 1.5,
            repeat: -1,
            duration: 1.3,
            ease: "power1.inOut"
          });
      }, []);

    return(
        <div className="loader-container">
  <div className="loader">
    <img id='logoLoader' src={logo} alt='logo' width='120'/>
    <img id='logoLoader2' src={logo} alt='logo' width='120'/>
  </div>
</div>
    )
}

export default Loader;
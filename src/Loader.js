import { gsap } from 'gsap';
import { useEffect } from 'react';
import logo from './Images/logo3.png'


const Loader = ()=>{

    useEffect(() => {
        gsap.to("#logoLoader", {
            scale: 1.2,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
          });
      }, []);

    return(
        <div className="loader-container">
  <div className="loader">
    <img id='logoLoader' src={logo} alt='logo' width='100'/>
  </div>
</div>
    )
}

export default Loader;
import { useState } from "react"

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        }
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <button className={visible ? "scroll-btn_visible" : "scroll-btn"} onClick={scrollToTop}>

            <i className="fas fa-angle-up scroll-icon"></i>
        </button>
    );
    }
    
    export default ScrollButton;
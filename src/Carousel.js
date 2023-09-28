import dataCarousel from "./dataCarousel";
import { useState } from 'react';

function Carousel() {

    const [trainer, setTrainer] = useState(0);
    const {name, experience, image, program, education} = dataCarousel[trainer];
  
  
    const previousTrainer = () => {
      setTrainer((trainer => {
        trainer --;
        if(trainer < 0){
          return dataCarousel.length -1;
        }
        return trainer;
      }))
    }
  
    const nextTrainer = () => {
      setTrainer((trainer => {
        trainer ++;
        if(trainer > dataCarousel.length -1){
          trainer = 0;
        }
        return trainer;
      }))
    }

  
    return (
      <div className="container-trainer">

          
          <div className="trainer-position-btn" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
          <button className="trainer-btn" onClick={previousTrainer}><i className="fi fi-bs-angle-left"></i></button>
          <div className="tr-fon">
            <img className="trainer-img"  src={`${image}.png`} alt="trainer"/>
          </div>
          <button className="trainer-btn" onClick={nextTrainer}><i className="fi fi-bs-angle-right"></i></button>
          </div>

          <div className="tr-fon2">
          <button className="trainer-btn-phone" onClick={previousTrainer}><i className="fi fi-bs-angle-left"></i></button>
            <img className="trainer-img"  src={`${image}.png`} alt="trainer"/>
            <button className="trainer-btn-phone" onClick={nextTrainer}><i className="fi fi-bs-angle-right"></i></button>
          </div>
  
        <div>
        <div className='trainer-info' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
            <p className="trainer-name">{name}</p>
            <p className="trainer-exp">Experience: <span className="trainer-span">{experience}.</span></p>
            <p className="trainer-exp">Direction: <span className="trainer-span">{program}.</span></p>
            <p className="trainer-exp">Education and Activities: </p>
            <p className="trainer-span2">{education}</p>
        </div>
        </div>
        
   
      </div>
    );
  }

export default Carousel;

import dataCarousel from "./dataCarousel";
import { useState } from 'react';

function Carousel() {

    const [trainer, setTrainer] = useState(0);
    const {name, experience, image, program} = dataCarousel[trainer];
  
  
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

          
          <div className="trainer-position-btn">
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
        <div className='trainer-info'>
            <p className="trainer-name">{name}</p>
            <p className="trainer-exp">Experience: </p><span className="trainer-span">{experience}</span>
            <p className="trainer-exp">Direction: </p><span className="trainer-span">{program}</span>
        </div>
        </div>
        
   
      </div>
    );
  }

export default Carousel;

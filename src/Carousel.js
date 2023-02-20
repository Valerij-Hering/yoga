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
        <div className='trainer-img'>
          <img className="trainer-img"  src={`${image}.png`} alt="trainer"/>
          <div className="tr-fon"></div>
        </div>
  
        <div className='trainer-info'>
            <p className="trainer-name">{name}</p>
            <p className="trainer-exp">Сoaching experience: <span>{experience}</span></p>
            <p className="trainer-exp">Direction: <span>{program}</span></p>
            <div className='trainer-box-btn'>
              <button className="trainer-btn" onClick={previousTrainer}><i class="fi fi-ss-angle-circle-left"></i></button>
              <button className="trainer-btn" onClick={nextTrainer}><i class="fi fi-ss-angle-circle-right"></i></button>
            </div>
        </div>
        
   
      </div>
    );
  }

export default Carousel;

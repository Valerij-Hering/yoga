import dataCarousel from "./data/dataCarousel";
import { useState } from 'react';

function Carousel() {

    const [trainer, setTrainer] = useState(0);
    const {name, experience, program, education} = dataCarousel[trainer];
  
  
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


          <div className="trainer-position-btn" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          
          <div className="tr-fon">
          <button className="trainer-btn1" onClick={previousTrainer}><i className="fi fi-bs-angle-left"></i></button>
            {
              dataCarousel.map((obect, index) => {
                const {image} = obect
                return (
                  <img  className={trainer === index ? "trainer-img2" : "trainer-img"} src={`${image}.png`} alt="trainer" key={index}/>
                )
              })
            }
            <button className="trainer-btn2" onClick={nextTrainer}><i className="fi fi-bs-angle-right"></i></button>
          </div>
          
          </div>

          <div className="tr-fon2" data-aos="fade-up" data-aos-duration="1500">
          <button className="trainer-btn-phone1" onClick={previousTrainer}><i className="fi fi-bs-angle-left"></i></button>
          {
              dataCarousel.map((obect, index) => {
                const {image} = obect
                return (
                  <img className={trainer === index ? "trainer-img2" : "trainer-img"} src={`${image}.png`} alt="trainer" key={index}/>
                )
              })
            }
            <button className="trainer-btn-phone2" onClick={nextTrainer}><i className="fi fi-bs-angle-right"></i></button>
          </div>
  
        <div>
        <div className='trainer-info' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <div>
            <p className='trainers-point-tittle1' id='training'>Team</p>
            <h2 className='trainers-point-tittle2' id='product'>Meet Our Experiense Trainers</h2>
          </div>
            <div>
            <p className="trainer-name">{name}</p>
            <p className="trainer-exp">Experience: <span className="trainer-span">{experience}.</span></p>
            <p className="trainer-exp">Direction: <span className="trainer-span">{program}.</span></p>
            <p className="trainer-exp">Education and Activities: </p>
            <p className="trainer-span2">{education}</p>
            <div className='tren-check'>
              <i className='fas	fa-check-circle'></i>
              <p>Certified Trainer</p>
            </div>
            </div>
        </div>
        </div>
        
   
      </div>
    );
  }

export default Carousel;

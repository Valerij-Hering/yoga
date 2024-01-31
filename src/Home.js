import imageHeader from './Images/header-girl.png';
import follower from './Images/contract2.png';
import yoga from './Images/yoga2.png';
import ticket from './Images/ticket2.png';
import { useState, useRef } from 'react';
import Trainings from './Trainings';
import data from './data';
import Buttons from './Buttons';
import Carousel from './Carousel';
import ScrollButton from './ScrollButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import line from './Images/line2.png'
import Video from './Video';
import woman from './Images/woman.png';
import Accordions from './Accordions';
import { Prices } from './Prices';
import BlogHome from './BlogHome';
AOS.init();


function Home() {

    const [training, setTraining] =  useState(data); 
    const chosenTrainings = (searchTerm) => {
        const newTrainings = data.filter(element => element.searchTerm === searchTerm);
        setTraining(newTrainings);
    }


    const refVideo = useRef();
    const [paused, setPaused] = useState(false);

    const handleplay = () => {
        setPaused(!paused)
    }



    return (
        <div className='container-home'>
            <div className='home-header shapedividers_com-900'>
                <div className='home-header-text' data-aos="fade-up" data-aos-duration="1500">
                    <p  className='home-par'>Right Way <span className='home-span'>YOGA</span><img className='line' src={line} alt='line'/></p>
                    
                    <p className='home-par2' >With a subscription to our studio, you can attend any of the proposed yoga directions at a convenient time for you. Sign up and have fun.</p>
                    <div className="home-box-btn">
                    <a className='home-btn' href='#training'>Our Services</a>
                    <div className="home-btn2-box">
                        <button onClick={handleplay} className="home-btn2"><i className="fi fi-sr-play icon-play"></i></button>
                        <p>Watch Video</p>
                    </div>
                </div>
            </div>
            <Video
            handleplay={handleplay}
            refVideo={refVideo}
            paused={paused}/>
                <div>
                    <img className='girl-header' src={imageHeader} alt="girl" data-aos="fade-up" data-aos-duration="1500" />
                </div>
                
            </div>
            <h2 className='info-title1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">How It Works</h2>
            <p className='info-title2' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Completely network impactful users whereas next generation applications.</p>
            <div className='container-info'>
                <div className='box-info' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <img className='info-icon' src={follower} alt="icon"/>
                    <p className='info-par1'>Contact Us</p>
                    <p className='info-par2'>Leave your phone number in the registration form.</p>
                </div>
                <div className='box-info shadow' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <img className='info-icon' src={yoga} alt="icon"/>
                    <p className='info-par1'>Trial Lesson</p>
                    <p className='info-par2'>Attend a free trial class of one of the fitness types.</p>
                </div>
                <div className='box-info' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <img className='info-icon' src={ticket} alt="icon"/>
                    <p className='info-par1'>Subscription</p>
                    <p className='info-par2'>You can buy a subscription from our instructors after or before class.</p>
                </div>
            </div>

            <div className='c'>
                
                <p className='travel-point-tittle1' id='training' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Types of Yoga</p>
                <h2 className='travel-point-tittle2' id='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">We Provide The Best Yoga</h2>
                </div>
                <Buttons chosenTrainings = {chosenTrainings} training = {training}/>
                <Trainings training = {training}/>
                
            

            <div className='section_trainers'>
            <p className='trainers-phone-tittle1' id='training' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Team</p>
            <h2 className='trainers-phone-tittle2' id='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Meet Our Experiense Trainers</h2>
            <Carousel/>
            </div>
            <div className='container_faq'>
                <div>
                <div className='accordion_box_header'>
                    <p className='accordion-point-tittle1' id='training' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">FAQ</p>
                    <h2 className='accordion-point-tittle2' id='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Frequently Asked Questions</h2>
                </div>
                <Accordions/>
                </div>
                
                <div className="box_faq_img" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <img className="faq_img" src={woman} alt="foto"/>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <BlogHome/>
            <Prices/>
            <br/>
            <br/>
            <br/>
            <ScrollButton/>
        </div>
        
    )
}

export default Home;
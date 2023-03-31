import imageHeader from './header-girl2.png';
import follower from './contract.png';
import yoga from './yoga.png';
import ticket from './ticket.png';
import { useState } from 'react';
import Trainings from './Trainings';
import data from './data';
import Buttons from './Buttons';
import girl2 from './exprience.png'
import Carousel from './Carousel';
import ScrollButton from './ScrollButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function Home() {

    const [training, setTraining] =  useState(data); 
    const chosenTrainings = (searchTerm) => {
        const newTrainings = data.filter(element => element.searchTerm === searchTerm);
        setTraining(newTrainings);
    }

    return (
        <div className='container-home'>
            <div className='home-header shapedividers_com-900'>
                <div className='home-header-text' data-aos="fade-up" data-aos-duration="1000" >
                    <p  className='home-par'>Right Way <span className='home-span'>YOGA</span></p>
                    <p className='home-par2' >With a subscription to our studio, you can attend any of the proposed yoga directions at a convenient time for you. Sign up and have fun.</p>
                    <a className='home-btn' href='#training'>Read More</a>
                </div>
                <div>
                    <img className='girl-header' src={imageHeader} alt="girl" data-aos="fade-up" data-aos-duration="1000"/>
                </div>
                
            </div>
            <p className='info-title1' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">How It Works</p>
            <p className='info-title2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Completely network impactful users whereas next generation applications.</p>
            <div className='container-info' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className='box-info'>
                    <img className='info-icon' src={follower} alt="icon"/>
                    <p className='info-par1'>Contact Us</p>
                    <p className='info-par2'>Leave your phone number in the registration form.</p>
                </div>
                <div className='box-info shadow'>
                    <img className='info-icon' src={yoga} alt="icon"/>
                    <p className='info-par1'>Trial Lesson</p>
                    <p className='info-par2'>Attend a free trial class of one of the fitness types.</p>
                </div>
                <div className='box-info'>
                    <img className='info-icon' src={ticket} alt="icon"/>
                    <p className='info-par1'>Subscription</p>
                    <p className='info-par2'>You can buy a subscription from our instructors after or before class.</p>
                </div>
            </div>

            <p className='travel-point-tittle1' id='training' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Types of Yoga</p>
            <h2 className='travel-point-tittle2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">We Provide The Best Yoga</h2>
            <Buttons chosenTrainings = {chosenTrainings}/>
            <Trainings training = {training}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className='info-title1' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Our Instructors</p>
            <p className='info-title2'data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Our Instructors holder of a certificate in physical culture and sports.</p>
            <Carousel/>

            <p className='travel-point-tittle1' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Our Prices</p>
            <h2 className='travel-point-tittle2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">We Offer The Best Prices</h2>
            <div className='container-tarif'>
                <div className='container-tarif2' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                <div className='box-tarif'>
                    <div>
                        <p className='tarif-par1'>Subscription for 8 lessons</p>
                        <p className='tarif-par2'>Validity - month</p>
                    </div>
                    <p className='tarif-par3'>$80</p>
                </div>
                <div className='box-tarif'>
                    <div>
                        <p className='tarif-par1'>Subscription for 12 lessons</p>
                        <p className='tarif-par2'>Validity - month</p>
                    </div>
                    <p className='tarif-par3'>$90</p>
                </div>
                <div className='box-tarif'>
                    <div>
                        <p className='tarif-par1'>Subscription for 16 lessons</p>
                        <p className='tarif-par2'>Validity - month</p>
                    </div>
                    <p className='tarif-par3'>$100</p>
                </div>

                <div className='box-tarif'>
                    <div>
                        <p className='tarif-par1'>unlimited subscription</p>
                        <p className='tarif-par2'>Validity - month</p>
                    </div>
                    <p className='tarif-par3'>$120</p>
                </div>
                </div>

                <img className='girl-tarif' data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" src={girl2} width="550px" alt="girl"/>
                
            </div>
            <ScrollButton/>
        </div>
    )
}

export default Home;
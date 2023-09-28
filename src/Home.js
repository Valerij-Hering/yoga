import imageHeader from './header-girl3.png';
import follower from './contract2.png';
import yoga from './yoga2.png';
import ticket from './ticket2.png';
import { useState } from 'react';
import Trainings from './Trainings';
import data from './data';
import Buttons from './Buttons';
import Carousel from './Carousel';
import ScrollButton from './ScrollButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import line from './line2.png'
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
                <div className='home-header-text' data-aos="fade-right" data-aos-duration="1500">
                    <p  className='home-par'>Right Way <span className='home-span'>YOGA</span><img className='line' src={line} alt='line'/></p>
                    
                    <p className='home-par2' >With a subscription to our studio, you can attend any of the proposed yoga directions at a convenient time for you. Sign up and have fun.</p>
                    <div class="home-box-btn">
                    <a className='home-btn' href='#training'>Our Services</a>
                    <div class="home-btn2-box">
                        <button class="home-btn2"><i class="fi fi-sr-play icon-play"></i></button>
                        <p>Watch Video</p>
                    </div>
                </div>
            </div>
            
                <div>
                    <img className='girl-header' src={imageHeader} alt="girl" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                
            </div>
            <p className='info-title1' data-aos="fade-up" data-aos-duration="1500">How It Works</p>
            <p className='info-title2' data-aos="fade-up" data-aos-duration="1500">Completely network impactful users whereas next generation applications.</p>
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

            <p className='travel-point-tittle1' id='training' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Types of Yoga</p>
            <h2 className='travel-point-tittle2' id='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">We Provide The Best Yoga</h2>
            <Buttons chosenTrainings = {chosenTrainings}/>
            <Trainings training = {training}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className='info-title1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Our Instructors</p>
            <p className='info-title2' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Our Instructors holder of a certificate in physical culture and sports.</p>
            <Carousel/>

            <p className='travel-point-tittle1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Our Prices</p>
            <h2 className='travel-point-tittle2' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">We Offer The Best Prices</h2>
            <div className='container-tarif'>

                <div className='container-price' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <div className='box-price'>
                        <h2 className='h2-price'>Basic</h2>
                        <p className='par-price'>The first three lessons are free</p>
                        <div className='price-list'>
                            <div className='price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p>Group training</p>
                            </div>
                            <div className='price-check'> 
                                <i className='fas	fa-check-circle'></i>
                                <p>Fitness yoga</p>
                            </div>
                            <div className='price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p>Strength training</p>
                            </div>
                            <div className='price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p>Eight lessons per month</p>
                            </div>
                        </div>
                        <p className='price-number'>$50<span> / per Month</span></p>
                        <div className='box-btn-price'>
                            <button className='btn-price'>Try for Free</button>
                        </div>
                    </div>
                </div>

                <div className='container-price' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <div className='box-price standard-price'>
                        <h2 className='h2-price standard-price-h2'>Standard</h2>
                        <p className='par-price standard-price-par'>The first three lessons are free</p>
                        <div className='price-list'>
                            <div className='price-check standard-price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p className='standard-price-check-p'>Group training</p>
                            </div>
                            <div className='price-check standard-price-check'> 
                                <i className='fas	fa-check-circle'></i>
                                <p className='standard-price-check-p'>Fitness yoga</p>
                            </div>
                            <div className='price-check standard-price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p className='standard-price-check-p'>Strength training</p>
                            </div>
                            <div className='price-check standard-price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p className='standard-price-check-p'>Twelve lessons per month</p>
                            </div>
                        </div>
                        <p className='price-number standard-price-number'>$100<span> / per Month</span></p>
                        <div className='box-btn-price'>
                            <button className='btn-price standard-price-btn'>Try for Free</button>
                        </div>
                    </div>
                </div>

                <div className='container-price'data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <div className='box-price'>
                        <h2 className='h2-price'>Ultimate</h2>
                        <p className='par-price'>The first three lessons are free</p>
                        <div className='price-list'>
                            <div className='price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p>Group training</p>
                            </div>
                            <div className='price-check'> 
                                <i className='fas	fa-check-circle'></i>
                                <p>Fitness yoga</p>
                            </div>
                            <div className='price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p>Strength training</p>
                            </div>
                            <div className='price-check'>
                                <i className='fas	fa-check-circle'></i>
                                <p>Twenty lessons per month</p>
                            </div>
                        </div>
                        <p className='price-number'>$150<span> / per Month</span></p>
                        <div className='box-btn-price'>
                            <button className='btn-price'>Try for Free</button>
                        </div>
                    </div>
                </div>

                {/* <img className='girl-tarif' src={girl2} width="550px" alt="girl"  data-aos="fade-left" data-aos-duration="1000" data-aos-once="true"/> */}
                
            </div>
            <ScrollButton/>
        </div>
    )
}

export default Home;
import aboutImg from './Images/about-img.jpg'

const About = () => {
    return(
        <div className='container_about'>
            <div className="about-header">
                <div>
                    <div className="about">
                        <p className='travel-about-tittle1' data-aos="fade-left" data-aos-duration="1500">About Our</p>
                        <h2 className='travel-about-tittle2' data-aos="fade-left" data-aos-duration="1500">Who We Are</h2>
                        <div className="container-about" data-aos="fade-left" data-aos-duration="1500">
                            <div>
                                <p>Our studio has been operating since 2012, and during this time we have managed to work with more than 3,000 clients, making each of them healthier, more beautiful and happier.</p>
                                <p>Based on the characteristics of your health and goals, you can choose the most suitable direction for yourself.</p>
                            </div>
                        </div>
                    </div>

                    <div className='container_about_mainInfo' data-aos="fade-left" data-aos-duration="1500">
                        <div className='box_about_mainInfo'>
                            <p className='about_mainInfo_par1'>10+</p>
                            <p className='about_mainInfo_par2'>Years</p>
                            <p className='about_mainInfo_par2'>Experiense</p>
                        </div>
                        <div className='box_about_mainInfo'>
                            <p className='about_mainInfo_par1'>15</p>
                            <p className='about_mainInfo_par2'>Directions</p>
                            <p className='about_mainInfo_par2'>of Yoga</p>
                        </div>
                        <div className='box_about_mainInfo'>
                            <p className='about_mainInfo_par1'>3K+</p>
                            <p className='about_mainInfo_par2'>Heppy</p>
                            <p className='about_mainInfo_par2'>Customer</p>
                        </div>
                    </div>
                </div>
                <img className="about-img" src={aboutImg} width='500px' alt="yoga" data-aos="fade-right" data-aos-duration="1500"/>
            </div>
        </div>
    )
}
export default About
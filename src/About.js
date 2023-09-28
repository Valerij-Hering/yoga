import aboutImg from './about-img.jpg'

const About = () => {
    return(
        <div>
            <div className="about-header">
                <div className="about">
                    <p className='travel-about-tittle1' data-aos="fade-left" data-aos-duration="1500">About Our</p>
                    <h2 className='travel-about-tittle2' data-aos="fade-left" data-aos-duration="1500">Who Are We</h2>
                    <div className="container-about" data-aos="fade-left" data-aos-duration="1500">
                        <div>
                            <p>Our studio has been operating since 2012, and during this time we have managed to work with more than 3,000 clients, making each of them healthier, more beautiful and happier.</p>
                            <p>Based on the characteristics of your health and goals, you can choose the most suitable direction for yourself.</p>
                        </div>
                    </div>
                </div>
                <img className="about-img" src={aboutImg} width='500px' alt="yoga" data-aos="fade-right" data-aos-duration="1500"/>
            </div>
        </div>
    )
}
export default About
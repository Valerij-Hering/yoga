
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import dataBlog from './dataBlog';
import { Link } from "react-router-dom"

AOS.init();



const BlogHome = () => {

    return (
        <div className='section_blogHome'>
            <p className='travel-point-tittle1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Latest Blog</p>
            <h2 className='travel-point-tittle2' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Updates Blog Post</h2>
            <div className= "container-blogHome" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            
            {dataBlog.map(element => {
                const {id, imgBlog, name, text} = element;
                return (
                    
                    <div className='card_blogHome' key={id} >
                        <img className='card_blogHome_img' src={imgBlog} alt='blog'/>
                        <div className='card_blogHome_content'>
                            <h2 className='blogHome_content_header'>{name}</h2>
                            <p className='blogHome_content_par'>{text}</p>
                            <Link  onClick={() => window.scrollTo(0, 0)} to="/blog">
                            <button className='blogHome_content_btn' >Read More</button>
                            </Link>
                        </div>
                    </div>
                    
                )
            }).slice(0, 3)}
            
            </div>
        </div>
    )
}

export default BlogHome;
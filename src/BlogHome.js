
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import dataBlog from './dataBlog';
import { Link } from "react-router-dom"
import { useRef } from 'react';

AOS.init();



const BlogHome = () => {

  const containerRef = useRef(null);

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft + 966,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft - 966,
      behavior: 'smooth'
    });
  };


    return (
        <div className='section_blogHome'>
            <div className='box_homeBlog_header' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                <div>
                    <p className='travel-point-tittle1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Latest Blog</p>
                    <h2 className='travel-point-tittle2' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Updates Blog Post</h2>
                </div>
                <div className='box_homeBlog_btn_PrevNext'>
                    <button onClick={scrollLeft}><i className="fas fa-angle-left scroll-icon"></i></button>
                    <button onClick={scrollRight}><i className="fas fa-angle-right scroll-icon"></i></button>
                </div>
            </div>
            

            <div className= "container-blogHome" ref={containerRef}  data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <div className='breack'>......</div>
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
            })}
            <div className='breack'>......</div>
            </div>
          
        </div>
    )
}

export default BlogHome;
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import dataBlog from './dataBlog';
import { EachBlog } from './EachBlog';

AOS.init();



const Blog = () => {



    const [eachBlog, setEachBlog] = useState(dataBlog)
    const [learnMoreBlogBtn, setLearnMoreBlogBtn] = useState(false);

    const learnMoreBlog = (id) => {
        setLearnMoreBlogBtn(true);
        const selectedItem = dataBlog.filter(item => item.id === id);
        setEachBlog(selectedItem);
    }

    const lernMoreCloseBlog = () => {
        setLearnMoreBlogBtn(false);
        window.location.reload()
    }

    return (
        <div className='section_blog'>
            <div className={learnMoreBlogBtn === true ? "container-blog2" : "container-blog"}>
            {eachBlog.map(element => {
                const {id, imgBlog, name, text} = element;
                return (
                    <div className='card_blog' key={id}>
                        <img className='card_blog_img' src={imgBlog} alt='blog'/>
                        <div className='card_blog_content'>
                            <h2 className='blog_content_header'>{name}</h2>
                            <p className='blog_content_par'>{text}</p>
                            <button className='blog_content_btn' onClick={() => learnMoreBlog(id)}>Read More</button>
                        </div>
                    </div>
                )
            })}
            </div>
            <EachBlog
            eachBlog={eachBlog}
            learnMoreBlogBtn={learnMoreBlogBtn}
            learnMoreBlog={learnMoreBlog}
            lernMoreCloseBlog={lernMoreCloseBlog}/>
        </div>
    )
}

export default Blog;
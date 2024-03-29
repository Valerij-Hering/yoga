

export const EachBlog = ({eachBlog, learnMoreBlogBtn, chosenBlogs}) => {

    return (
        <div id="blog1" className={learnMoreBlogBtn ? "container_eachBlog2" :  "container_eachBlog"}>
            <div className="eachProduct_btn_box" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                <button className="eachProduct_btnClose" onClick={() => {chosenBlogs('blog'); window.scrollTo(0, 0)}}><i className="fi fi-ss-angle-left eachProduct_btnClose_icon"></i> Go Back</button>
                </div>
                <img className='eachBlog_img' src={eachBlog[0].imgBlog} alt='blog' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"/>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                    <p className='travel-point-tittle1' id='training' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">{eachBlog[0].name2}</p>
                    <h2 className='travel-point-tittle2' id='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">{eachBlog[0].name}</h2>
                    {eachBlog[0].text2.map((item, index) => {
                        return (
                            <div className="eachBlog_content" key={index}>
                                {item.p}
                            </div>
                        )
                    })}
                    <button  className="eachBlog_btnClose" onClick={() => {chosenBlogs('blog'); window.scrollTo(0, 0)}}><i className="fi fi-rr-arrow-left eachBlog_btnClose_icon"></i> Go Back</button>
                </div>
        </div>
    )
}
import logo from './Images/logo3.png'

export const EachBlog = ({eachBlog, learnMoreBlogBtn, lernMoreCloseBlog}) => {

    console.log(eachBlog)
    return (
        <div className={learnMoreBlogBtn ? "container_eachBlog2" :  "container_eachBlog"}>
            <div className="eachProduct_btn_box">
                <button className="eachProduct_btnClose" onClick={() => lernMoreCloseBlog()}><i className="fi fi-ss-angle-left eachProduct_btnClose_icon"></i> Go Back</button>
                <div className='container-logo'>
                    <img className='logo' src={logo} width="60px" alt='logo'/>
                    <p>yoga</p>
                </div>
                </div>
                <img className='eachBlog_img' src={eachBlog[0].imgBlog}/>
                <div>
                    <p className='travel-point-tittle1' id='training' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">{eachBlog[0].name2}</p>
                    <h2 className='travel-point-tittle2' id='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">{eachBlog[0].name}</h2>
                    {eachBlog[0].text2.map((item, index) => {
                        return (
                            <div className="eachBlog_content" key={index}>
                                <p>{item.p}</p>
                            </div>
                        )
                    })}
                    <button  className="eachBlog_btnClose" onClick={() => lernMoreCloseBlog()}><i className="fi fi-rr-arrow-left eachBlog_btnClose_icon"></i> Go Back</button>
                </div>
        </div>
    )
}
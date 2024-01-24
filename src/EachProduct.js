

export const EachProduct = ({eachProduct, learnMoreBtn, lernMoreClose, scrollToTop}) => {
    return (
        <div className={learnMoreBtn ? "container_eachProduct2" : "container_eachProduct"}>
            
            <div className="subcontainer_eachProduct">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
               
               
                
                <div className="box_eachProduct_img">
                    <img className="eachProduct_img1" src={eachProduct[0].image1} alt='product' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"/>
                    <div className="box_eachProduct_describing" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <p className='eachProduct_header_par'>Type of Yoga</p>
                        <h2 className="eachProduct_header">{eachProduct[0].header}</h2>
                        <p className="eachProduct_text">{eachProduct[0].text2}</p>
                        <div className='eachProduct_container_icon'>
                            <div className='eachProduct_box_icon eachProduct_icon_left'>
                                <div className='eachProduct_icon'>
                                    <i className="fi fi-sr-calendar-clock"></i>
                                </div>
                                <div className='eachProduct_icon__box_par'>
                                    <p className='eachProduct_icon_par1'>Number of Classes</p>
                                    <p className='eachProduct_icon_par2'>{eachProduct[0].textIcon1}</p>
                                </div>
                            </div>

                            <div className='eachProduct_box_icon icon_center'>
                                <div className='eachProduct_icon'>
                                    <i className="fi fi-sr-users-alt eachProduct_icon"></i>
                                </div>
                                <div className='eachProduct_icon__box_par'>
                                    <p className='eachProduct_icon_par1'>Group Classes</p>
                                    <p className='eachProduct_icon_par2'>{eachProduct[0].textIcon2}</p>
                                </div>
                            </div>

                            <div className='eachProduct_box_icon eachProduct_icon_right'>
                                <div className='eachProduct_icon'>
                                    <i className="fi fi-sr-user eachProduct_icon"></i>
                                </div>
                                <div className='eachProduct_icon__box_par'>
                                    <p className='eachProduct_icon_par1'>Individual Sessions</p>
                                    <p className='eachProduct_icon_par2'>{eachProduct[0].textIcon3}</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    
                <button  className="eachBlog_btnClose" onClick={() => lernMoreClose()} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true"><i className="fi fi-rr-arrow-left eachBlog_btnClose_icon"></i> Go Back</button>
                <br/>
                </div>
                
            </div>
        </div>
    )
}
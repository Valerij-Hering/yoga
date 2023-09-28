import { useState } from 'react';
import lotus from './lotus.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const Trainings = ({training}) => {

    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore;
        setShowText(!showText)
    }

    return (
        <div className="container-product">
            {training.map(element => {
                const {id, image, name, text, showMore} = element;
                return (
                    <div className="product-card" style={{ backgroundImage: `url(${image}.jpg)` } } key={id} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div className='shapedividers_com-3652'></div>
                        <div className="box-nameAndText ">
                            {/* <div className="circle"></div> */}
                            <p className="product-name">{name}</p>
                            <img className='lotus-img' src={lotus} width="30px" alt='lotus'/>
                            <p className="product-text">{showMore ? text.substring(0, 80) + "...": text } <button className='more-btn' onClick={() => showTextClick(element)}>{showMore ? 'show more': 'show less'}</button></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Trainings;
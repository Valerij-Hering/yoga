import { useState } from 'react';
import lotus from './Images/lotus.png';
import data from './data/data';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { EachProduct } from './EachProduct';

AOS.init();



const Trainings = ({training}) => {

    const [eachProduct, setEachProduct] = useState(data)
    const [learnMoreBtn, setLearnMoreBtn] = useState(false);

    const learnMore = (id) => {
        setLearnMoreBtn(true);
        document.body.style.overflow = "hidden";
        const selectedItem = data.filter(item => item.id === id);
        setEachProduct(selectedItem);
    }

    const lernMoreClose = () => {
        setLearnMoreBtn(false);
        document.body.style.overflow = "auto";
    }

    return (
        <div className="container-product">
            {training.map(element => {
                const {id, image, name, text} = element;
                return (
                    <div className="product-card" style={{ backgroundImage: `url(${image}.jpg)` } } key={id} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div className='productCard-box'>
                            <p className='product-header'>{name}</p>
                        <p className="product-text">{text}</p> 
                        <button className='productCard_btn' onClick={() => learnMore(id)}>Read More</button>
                        <div className='shapedividers_com-3652'></div>
                        
                        <div className="box-nameAndText ">
                            <p className="product-name">{name}</p>
                            <img className='lotus-img' src={lotus} width="30px" alt='lotus'/>
                            
                        </div>
                        </div>
                    </div>
                )
            })}

            <EachProduct
            eachProduct={eachProduct}
            learnMoreBtn={learnMoreBtn}
            learnMore={learnMore}
            lernMoreClose ={lernMoreClose}/>
        </div>
    )
}

export default Trainings;
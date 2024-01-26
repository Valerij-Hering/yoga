import ContactForm from './Feedback';
import logo from './Images/logo3.png';

const Footer = () => {
    return (
        <div>
            <div className='shapedividers_com-5956'></div>
            <div className='footer'>
                <div className="footer_content1">
                    <div className='container-logo_footer'>
                        <img className='logo_footer' src={logo} width="60px" alt='logo'/>
                        <p>yoga</p>
                    </div>
                    <div className='footer_contact'>
                        <p className='footer_contact_par'><i className="fi fi-sr-phone-call"></i> +49 128 37636576</p>
                        <p className='footer_contact_par'><i className="fi fi-sr-envelope"></i> yoga.club@gmail.com</p>
                        <div className='footer_contact_par_address'>
                            <i className="fi fi-sr-marker"></i>
                            <div>
                                <p>Dortmund </p>
                                <p>Mecklen str. 25</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <ContactForm/>
                    <div className='box_footer_socIcon'>
                        <i className="fi fi-brands-facebook footer_socIcon"></i>
                        <i className="fi fi-brands-instagram footer_socIcon"></i>
                        <i className="fi fi-brands-twitter footer_socIcon"></i>
                    </div>
            </div>
            
        </div>
    )
}

export default Footer
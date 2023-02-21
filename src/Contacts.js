import Footer from "./Footer"

const Contacts = () => {
    return(
        <div className="box-map">

            <iframe className="map-grayscale" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39509.24892679821!2d7.8839808!3d51.7636096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sde!4v1676841336444!5m2!1sru!2sde"  title="map"  loading="lazy" ></iframe>
            <div className="contacts-info">
                <h2>Contacts</h2>
                <div className="container-info2">
                    <div>
                        <p className="contact-par1">Phone</p>
                        <p className="contact-par1">E-mail</p>
                        <p className="contact-par1">Address</p>
                    </div>
                    <div>
                        <p className="contact-par2"><i className="fa-phone	fas contact-icon"></i> xxx xxx xxx xxx</p>
                        <p className="contact-par2"><i className="fa-envelope	fas contact-icon"></i> xxxxx@gmail.com</p>
                        <p className="contact-par2"><i className="fa-location-dot	fas contact-icon"></i> xxxxx xxxxx xxxxx</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts
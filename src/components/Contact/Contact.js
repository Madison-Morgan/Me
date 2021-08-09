import './Contact.scss';
import Fade from "react-reveal/Fade";


export default function Contact() {
    return (
        <div className="contact" id="contact">
            <Fade bottom>
                <div className="contact-header">
                    <span className="contact-title">/ Contact</span>
                </div>
                <div className="contact-content">
                    <div className="contact-wrapper">
                        <div className="contact-details">

                        </div>
                        <div className="contact-form">
                            <h2>Let's Connect! </h2>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
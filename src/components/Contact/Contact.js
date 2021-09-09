import './Contact.scss';
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <Fade bottom>
                <div className="contact-header">
                    <span className="contact-title">Let's Connect! 📧</span>
                </div>
                <div className="contact-content">
                    <div className="contact-wrapper">

                        <div className="contact-details">
                            <p>Im always down to grab some coffee or bubble tea!
                                I would love to talk about future projects, possible
                                oppurtunities, or that new Netflix show that blew your mind.
                                Im currently on the hunt for an exciting and challenging new position too!
                                Shoot me a message here or on my socials 😊.
                            </p>
                            <div className="contact-logos" href="/">
                                <a href="mailto:madison.morgan.eng@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 35 }} />
                                </a>
                                <a href="https://github.com/mmorg031">
                                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: 35 }} />
                                </a>
                                <a href="https://www.linkedin.com/in/madison-morgan-eng/">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 35 }} />
                                </a>
                            </div>
                        </div>

                        <div className="contact-form">
                            {/* <form name="form-contact" method="POST" action="thankyou/thanks">
                                <input type="hidden" name="form-name" value="contact" />
                                <label htmlFor="name" className="visuallyHidden">name</label>
                                <input type="text" name="name" id="name" placeholder="name" autoComplete="off" required="" />
                                <label className="visuallyHidden" htmlFor="email">email</label>
                                <input type="email" name="form-email" id="email" placeholder="email" required="" />
                                <label className="visuallyHidden" htmlFor="message" autoComplete="off">message</label>
                                <textarea name="form-message" id="message" placeholder="message" required=""></textarea>
                                <div className="submit-container">
                                    <button className="send" type="submit">send message</button>
                                </div>
                            </form> */}
                            <form class="form-contact" action="https://formspree.io/madison.morgan.eng@gmail.com" method="POST">
                                <input type="text" name="name" placeholder="Name" />
                                <input type="email" name="_replyto" placeholder="Email" />
                                <textarea name="form-message" rows="8" placeholder="Say Something :)"></textarea>
                                <button className="send" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="contact-footer">
                    <footer><p>Developed and designed with 💕 Madison Morgan</p></footer>
            </div>
        </div>
    )
}
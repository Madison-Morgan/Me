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
                    <span className="contact-title">/ Contact</span>
                </div>
                <div className="contact-content">
                    <div className="contact-wrapper">

                        <div className="contact-details">
                            <h2>Let's Connect! 💌</h2>
                            <p>Im always down to grab some coffee or bubble tea!
                                I would love to talk about future projects, possible
                                oppurtunities, or that new Netflix show that blew your mind.
                                Shoot me a message here or on my socials &#128522;.
                            </p>
                            <div className="intro-logos" href="/">
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
                            <form name="contact" method="POST" action="thankyou/thanks">
                                <input type="hidden" name="form-name" value="contact" />
                                <label for="name" class="visuallyHidden">name</label>
                                <input type="text" name="name" id="name" placeholder="name" autocomplete="off" required="" />
                                <label class="visuallyHidden" for="email">email</label>
                                <input type="email" name="email" id="email" placeholder="email" required="" />
                                <label class="visuallyHidden" for="message" autocomplete="off">message</label>
                                <textarea name="message" id="message" placeholder="message" required=""></textarea>
                                <div class="submit-container">
                                    <button class="send" type="submit">send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-footer">
                    <footer><p>Developed and designed with 💖 Madison Morgan</p></footer>
                </div>
            </Fade>
        </div>
        )
    }
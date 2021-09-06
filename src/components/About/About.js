import "./About.scss";
import Fade from "react-reveal/Fade";
import Me from "../../files/better_me_mady.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faWindows, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import GoLogo from "../../files/go-logo-blue.svg"

export default function About() {

    const tech = [
        <div><FontAwesomeIcon icon={faPython} style={{ fontSize: 25 }} /> Python</div>, 
        <div><FontAwesomeIcon icon={faWindows} style={{ fontSize: 25 }} /> C#/.NET</div>, 
        <div><FontAwesomeIcon icon={faJs} style={{ fontSize: 25 }} /> Javacript</div>, 
        <div><FontAwesomeIcon icon={faDatabase} style={{ fontSize: 25 }} /> SQL</div>, 
        <div><FontAwesomeIcon icon={faReact} style={{ fontSize: 25 }} /> React.js</div>, 
        <div><img src={GoLogo} width="30" height="30" /> Go</div>].map(stack => <li>{stack}</li>);

    return (
        <div className="about" id="about">
            <Fade bottom>
                <div className="about-header ">
                    <span className="about-title">About Me 📙</span>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        <p>
                            Hello again! Glad your still scrolling &#128522; ! I recently graduated from the <b>University of Ottawa </b> 
                              with a bachelor of <b>Computer Engineering</b>. Currently I work
                            full-time at <a href="https://www.magnetforensics.com/">Magnet Forensics</a> as a
                            <b> Software Developer</b>.
                        </p>
                        <p>
                            Outside of work you can find me playing <b>video games</b>, trying out the latest <b>restaurant </b> 
                             (current obsession - <b>Afghan food</b>) or planning my next <b>art</b> project.
                        </p>
                        {"Here are some technologies I have been working with:"}
                        <ul className="about-tech">
                            {tech.map(function (tech_item, i) {
                                return (
                                    <Fade bottom delay={(i+1)*100} key={i}>
                                        {tech_item}
                                    </Fade>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src={Me} alt="me"/>
                    </div>
                </div>

            </Fade>
        </div>
    )
}
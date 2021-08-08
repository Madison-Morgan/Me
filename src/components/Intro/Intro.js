import "./Intro.scss";
import Fade from "react-reveal/Fade";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer.", "Designer.", "Enthusiast."],
        });
    }, []);

    return (
        <div className="intro-intro" id="intro">

            <div className="intro-title">Hello World &#128075;
                <br />
                <span className="intro-name">Madison</span> here.</div>
            <div className="intro-typing"> Software <span ref={textRef}></span></div>
            <Fade bottom>
                <div className="intro-description">
                    I'm a <b>Computer Engineer</b> with a passion for <b>software</b>
                    based in <b>Ottawa, Canada</b>. I have a great interest in machine learning,
                    data, full-stack development, and everything in between.
                </div>
            </Fade>

            <Fade bottom>
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
            </Fade>

        </div>
    );
}
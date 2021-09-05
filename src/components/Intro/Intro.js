import "./Intro.scss";
import Navigation from "../Navigation/Navigation";
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
            typeSpeed:  60,
            strings: ["Software Developer.", "Film Critic.", "Cat Lady."],
        });
    }, []);

    return (
        <div className="intro-intro" id="intro">
            <Navigation className="intro-navigation" />
            <div className="intro-title">Hello World
                <span className="intro-name"> Madison</span> here! <span className="intro-wave">👋</span></div>
            <div className="intro-typing"><span ref={textRef}></span></div>
            <Fade bottom>
                <div className="intro-description">
                    I'm a <b> Full-Stack Developer</b> 👩‍💻 with a passion for <b> data </b>
                    based in <b> Ottawa, Canada</b>. I have a great interest in machine learning,
                    data science, and everything in between. ✨
                </div>
            </Fade>

            <Fade bottom>
                <div className="intro-logos" href="/">
                    <a href="mailto:madison.morgan.eng@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 45 }} />
                    </a>
                    <a href="https://github.com/Madison-Morgan">
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: 45 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/madison-morgan-eng/">
                        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 45 }} />
                    </a>
                </div>
            </Fade>

        </div>
    );
}
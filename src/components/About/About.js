import "./About.scss";
import Fade from "react-reveal/Fade";
import Me from "../../files/better_me_mady.jpg"

export default function About() {

    const tech = ["Python", "C#/.NET", "Javacript", "SQL", "React.js", "Go"].map(stack => <li>{stack}</li>);

    return (
        <div className="about" id="about">
            <Fade bottom>
                <div className="header ">
                    <span className="title">/ About Me</span>
                </div>
                <div className="content">
                    <div className="description">
                        <p>
                            I am a recent graduate from the <b>University of Ottawa</b> where I completed my
                            <b>BaSc. in Computer Engineering</b>. My current interests are in <b>Data science</b>, 
                            <b>Machine Learning</b>, and <b>Full-Stack Development</b>. Currently I work
                            full-time at <a href="https://www.magnetforensics.com/">Magnet Forensics</a> as a
                            <b>Software Developer</b>.
                        </p>
                        <p>
                            Outside of work you can find me playing <b>video games</b>, hanging <b>outside</b> with <b>friends</b> playing 
                             <b>volleyball</b>, hitting up some <b>beaches</b>, trying out the latest <b>restaurant</b> (current obsession - <b>Afghan food</b>)
                            or planning my next <b>art</b> or <b>thrift</b> project.
                        </p>
                        {"Here are some technologies I have been working with:"}
                        <ul className="tech">
                            {tech.map(function (tech_item, i) {
                                return (
                                    <Fade bottom delay={(i+1)*100} key={i}>
                                        {tech_item}
                                    </Fade>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="image">
                        <img src={Me} alt="me"/>
                    </div>
                </div>

            </Fade>
        </div>
    )
}
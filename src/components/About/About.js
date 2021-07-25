import AnimateIn from "../Intro/AnimateIn";
import "./About.scss";

export default function About() {

    const tech = ["Python", "C#/.NET", "Javacript", "SQL", "React.js"].map(stack => <li>{stack}</li>);

    return (
        <div className="about" id="about">
            <AnimateIn>
                <div className="header ">
                    <span className="title">/ about me</span>
                </div>
                <div className="content">
                    <div className="description">
                        <p>
                            I am a recent graduate from the University of Ottawa where I completed my
                            BaSc. in Computer Engineering. With a little mix of hardware and software,
                            I have developed my true passions in software development and coding.
                            My interests lay in Data science, Machine Learning, and Full-Stack Development.
                        </p>
                        <p>
                            Outside of work you can find me Smashing it up on my Nintendo switch, hanging out
                            side doing some outdoor activity, or planning my next art project.
                        </p>
                        {"Here are some technologies I have been working with:"}
                        <ul className="tech">
                            {tech.map(function (tech_item, i) {
                                return (
                                    <AnimateIn delay={`${i + 1}00ms`}>
                                        <li>{tech_item}</li>
                                    </AnimateIn>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="image">
                        <img src="../../files/me_mady.jpg" />
                    </div>
                </div>

            </AnimateIn>
        </div>
    )
}
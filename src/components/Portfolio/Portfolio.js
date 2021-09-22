import "./Portfolio.scss";
import Fade from "react-reveal/Fade";
import Project from "./Project";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <Fade bottom>
                <div className="portfolio-header">
                    <span className="portfolio-title">Portfolio 💻</span>
                    <div className="portfolio-content">
                        <p>Click on a project to learn more!</p>
                    </div>
                </div>
            </Fade>
            <div className="portfolio-content">
                <div className="portfolio-row">
                    <Fade left>
                        <div className="portfolio-proj1">
                            <Project header={'Cannasplain'}
                                text={'A real-time React retail product display that uses MongoDB database to keep track of and display strains and quantities for a local Cannabis shop.'}
                                tech={['React', 'MongoDB', 'Express.Js', 'Node.js']}
                                liveLink={''}
                                githubLink={''} />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="portfolio-proj2">
                            <Project header={'Shoot'}
                                text={'An interactive computer vision application that you can challenge against Rock-Paper-Scissors.'}
                                tech={['Tensorflow', 'OpenCV', 'React', 'Pandas']}
                                liveLink={''}
                                githubLink={''} />
                        </div>
                    </Fade>
                </div>
                <div className="portfolio-row">
                    <Fade left>
                        <div className="portfolio-proj2">
                            <Project header={'Witchy-Witch'}
                                text={'An random animated and interactive witch, using React.'}
                                tech={['React', 'Hooks']}
                                liveLink={''}
                                githubLink={''} />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="portfolio-proj1">
                            <Project header={'Gather'}
                                text={'An Android application to help friends plan a meetup, with everyones busy scedhule.'}
                                tech={['Firebase', 'Kotlin', 'Android Studio']}
                                liveLink={''}
                                githubLink={''} />
                        </div>
                    </Fade>
                </div>
            </div>
        </div >
    )
}
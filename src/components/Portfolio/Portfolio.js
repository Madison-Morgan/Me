import "./Portfolio.scss";
import Fade from "react-reveal/Fade";
import Project from "./Project";
import { Component } from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio" id="portfolio" >
                <Fade bottom>
                    <div className="portfolio-header">
                        <span className="portfolio-title">💻 Portfolio</span>
                        <div className="portfolio-content">
                            <p>Click on a project to learn more! (Under Construction 👷‍♀️)</p>
                        </div>
                    </div>
                </Fade>

                <Fade left>

                    <div className="portfolio-row">
                        <Project
                            size="big"
                            header={'Cannasplain'}
                            text={'A real-time React retail product display that uses MongoDB database to keep track of and display strains and quantities for a local Cannabis shop.'}
                            tech={['React', 'MongoDB', 'Express.Js', 'Node.js']}
                            liveLink={''}
                            githubLink={''} />

                        <Project
                            size="small"
                            header={'Shoot'}
                            text={'An interactive computer vision application that you can challenge against Rock-Paper-Scissors.'}
                            tech={['Tensorflow', 'OpenCV', 'React', 'Pandas']}
                            liveLink={''}
                            githubLink={''} />
                    </div>
                </Fade>

                <Fade right>
                    <div className="portfolio-row">
                        <Project
                            size="small"
                            header={'Witchy-Witch'}
                            text={'An random animated and interactive witch, using React.'}
                            tech={['React', 'Hooks']}
                            liveLink={''}
                            githubLink={''} />

                        <Project
                            size="big"
                            header={'Gather'}
                            text={'An Android application to help friends plan a meetup, with everyones busy scedhule.'}
                            tech={['Firebase', 'Kotlin', 'Android Studio']}
                            liveLink={''}
                            githubLink={''} />
                    </div>
                </Fade>

            </div >
        )
    }
}

export default Portfolio;
import "./Portfolio.scss";
import Fade from "react-reveal/Fade";
import Project from "./Project";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: true,
            two: true,
            three: true,
            four: true,
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass(project) {
        const currentState = this.state[project];
        this.setState({ one: !currentState });
        console.log(this.state.one);
    };

    render() {
        return (
            <div className="portfolio" id="portfolio" >
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
                            <div className="portfolio-proj1"
                                onClick={() => this.toggleClass('one')}>
                                <FontAwesomeIcon icon={faTimes} 
                                style={{ fontSize: 25, color: "white"
                                    /*position: "absolute", right: 15, top: 15*/}}
                                    onClick={() => this.toggleClass('one')} />
                                <Project
                                    activeState={this.state.one ? 'active-project': 'unactive'}
                                    header={'Cannasplain'}
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
}

export default Portfolio;
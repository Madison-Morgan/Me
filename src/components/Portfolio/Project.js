import "./Project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = { active: false }
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        if (this.state.active) {
            return (
                <div className={`${this.props.size} portfolio-overlay`} onClick={() => this.toggleClass()}>
                    <span
                        onClick={() => this.toggleClass()}>
                        <FontAwesomeIcon icon={faTimes}
                            style={{
                                fontSize: 25, color: "white",

                            }}
                            onClick={() => this.toggleClass()} />
                    </span>
                    <h3>{this.props.header}</h3>
                    <p>{this.props.text}</p>
                    <ul className="portfolio-toolsUsed">
                        {this.props.tech.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <div className="portfolio-viewProject">
                        <a href={this.props.liveLink} target="_blank" className="button">view live</a>
                        <a href={this.props.githubLink} target="_blank" className="button">github</a>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="portfolio-proj" onClick={() => this.toggleClass()}/>
            )
        }
    }
}

export default Project;
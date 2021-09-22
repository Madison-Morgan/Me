import "./Project.scss";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log("toggle!!");
    };

    render() {
        return (
            <div onClick={this.toggleClass}>
                <div
                    className={`${this.state.active ? 'active-project' : 'unactive'} portfolio-overlay`} >
                    <FontAwesomeIcon icon={faTimes} style={{
                        fontSize: 25, color: "white"
                        // position: "absolute", right: 15, top: 15
                    }} onClick={this.toggleClass} />
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
            </div>
        )
    }
}

export default Project;
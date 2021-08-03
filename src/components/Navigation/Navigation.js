import "./Navigation.scss";
import Fade from "react-reveal/Fade";
import {Sidenav} from "rsuite";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const isMobile = window.innerWidth < 600;

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const { expanded } = this.state;

    const links = [
      <a href="/">/home</a>,
      <a href="#about">/about</a>,
      <a href="#experience">/experience</a>,
      <a href="#projects">/creations</a>
    ];

    return (
      <div className="nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="links">
                {links.map((link, i) => (
                  <Fade bottom delay={(i + 1)*100} key={i}>
                    <div key={i}>{link}</div>
                  </Fade>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="logos" href="/">
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
      </div>
    );
  }
}

export default Navigation;
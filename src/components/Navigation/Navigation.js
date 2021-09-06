import "./Navigation.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from "react-reveal/Fade";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from "react";

class Navigation extends React.Component {

  render() {

    const links = [
      // <Nav.Link className="navigation-link hover-underline-animation" href="#intro">Home</Nav.Link>,
      <Nav.Link className="navigation-link hover-underline-animation" href="#about">About</Nav.Link>,
      <Nav.Link className="navigation-link hover-underline-animation" href="#portfolio">Portfolio</Nav.Link>,
      <Nav.Link className="navigation-link hover-underline-animation" href="#contact">Contact</Nav.Link>
    ];

    return (
      <Navbar expand="lg" position="top" className="navigation-nav">
        <Container>
          <Navbar.Brand className="navigation-brand hover-underline-animation" href="#intro">Madison Morgan.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>

            {links.map((link, i) => (
                  <Fade bottom delay={(i + 1) * 100} key={i}>
                    {link}
                  </Fade>))}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

    // return (
    //   <div className="navigation-nav">
    //     {!isMobile && (
    //       <Navbar appearance={"subtle"}>
    //         <Navbar.Body>
    //           <Nav>
    //             {links.map((link, i) => (
    //               <Fade bottom delay={(i + 1) * 100} key={i}>
    //                 <Nav.Item id="" key={i} className="navigation-links">{link}</Nav.Item>
    //               </Fade>
    //             ))}
    //             {/* <div className="links">
    //               {links.map((link, i) => (
    //                 <Fade bottom delay={(i + 1) * 100} key={i}>
    //                   <div key={i}>{link}</div>
    //                 </Fade>
    //               ))}
    //             </div> */}
    //           </Nav>
    //         </Navbar.Body>
    //       </Navbar>
    //     )}

    //   </div>
    // );
  }
}

export default Navigation;
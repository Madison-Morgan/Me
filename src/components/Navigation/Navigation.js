import "./Navigation.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from "react-reveal/Fade";
import {Navbar, Container, Nav} from "react-bootstrap";
import React from "react";

const isMobile = window.innerWidth < 600;

class Navigation extends React.Component {

  render() {

    const links = [
      <Nav.Link href="#intro">Home</Nav.Link>,
      <Nav.Link href="#about">About</Nav.Link>,
      <Nav.Link href="#projects">Portfolio</Nav.Link>,
      <Nav.Link href="#contact">Contact</Nav.Link>
    ];

    return (
      <Navbar bg="light" expand="lg" sticky="top" className="navigation-nav">
        <Container>
          <Navbar.Brand>Madison Morgan</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

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
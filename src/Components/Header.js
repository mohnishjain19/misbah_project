import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand href=""><img src="data:image/png;base64,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"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
              <Link to="/"> 
              Home
              </Link>
              </Nav.Link>
              <Nav.Link >
              <Link to="/missions"> 
              Missions
              </Link></Nav.Link>
              <Nav.Link >
              <Link to="/aboutus"> 
              AboutUS
              </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

    </div>
  );
};
export default Header;

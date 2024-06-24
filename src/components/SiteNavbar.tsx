import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {useContext} from "react";
import {UserContext} from "../App";
import Profile from "./Profile";

function SiteNavbar() {
  const { isLogged } = useContext(UserContext)
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        sticky="top"
        className="border-bottom border-body"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="../../public/icon.jpg"
              alt="Logo"
              width="30"
              height="30"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" active>
                Home
              </Nav.Link>
              {isLogged && <Profile></Profile>}
              <Nav.Link as={Link} to="/users" active>
                View users
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">

              <Nav.Link as={Link} to="/login" active>
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default SiteNavbar;

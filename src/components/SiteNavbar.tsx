import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import SignOutToast from "./SignOutToast";
import {ToastContext} from "../ToastContext";

function SiteNavbar() {
  const { isLogged, setLogged } = useContext(UserContext);
  const { showToast, setShowToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const handleOnClick = () => {
    console.log("Clicked");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("logged");
    setLogged(false);
    setShowToast(true);
    navigate("/login");
  };

  return (
    <>
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
              <Nav.Link as={Link} to="/users" active>
                View users
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {!isLogged && (
                <Nav.Link as={Link} to="/login" active>
                  Sign up
                </Nav.Link>
              )}
              {isLogged && (
                <Nav.Link as={Link} to="/profile" active>
                  Profile
                </Nav.Link>
              )}
              {isLogged && (
                <Nav.Link onClick={handleOnClick}>Sign out</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SignOutToast show={showToast} setShowToast={setShowToast}/>

    </>
  );
}

export default SiteNavbar;

import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import SignOutToast from "./SignOutToast";
import { ToastContext } from "../ToastContext";
import "../App.css";

function SiteNavbar() {
  const { isLogged, setLogged } = useContext(UserContext);
  const { showToast, setShowToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const handleOnClick = () => {
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
        sticky="top"
        className="border-bottom border-body"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/icon3.png"
              alt="Logo"
              width="40"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="navbar-svg">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "navbar-active" : ""
                  }
                >
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#807f8f"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                </NavLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/users" className="navbar-svg">
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive ? "navbar-active" : ""
                  }
                >
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#807f8f"
                  >
                    <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                  </svg>
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {!isLogged && (
                <Nav.Link as={Link} to="/login" className="navbar-svg">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "navbar-active" : ""
                    }
                  >
                    <svg
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#807f8f"
                    >
                      <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
                    </svg>
                  </NavLink>
                </Nav.Link>
              )}
              {isLogged && (
                <Nav.Link as={Link} to="/profile" className="navbar-svg">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "navbar-active" : ""
                    }
                  >
                    <svg
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#807f8f"
                    >
                      <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                    </svg>
                  </NavLink>
                </Nav.Link>
              )}
              {isLogged && (
                <Nav.Link onClick={handleOnClick} className="navbar-svg">
                  <svg
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#807f8f"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                  </svg>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SignOutToast show={showToast} setShowToast={setShowToast} />
    </>
  );
}

export default SiteNavbar;

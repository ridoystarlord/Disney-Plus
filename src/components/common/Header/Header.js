import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.svg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { googleSignIn, setUser,user, logout  } = useAuth();
  const handleSignBtnClick = () => {
    googleSignIn()
      .then((result) => {
        const userinfo = result.user;
        setUser(userinfo);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="#040714" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height="50" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bold align-items-center">
              {user.email ? (
                [
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>,
                  <Nav.Link as={NavLink} to="/">
                    Search
                  </Nav.Link>,
                  <Nav.Link as={NavLink} to="/">
                    WatchList
                  </Nav.Link>,
                  <Nav.Link as={NavLink} to="/">
                    Orginals
                  </Nav.Link>,
                  <Nav.Link as={NavLink} to="/">
                    Movies
                  </Nav.Link>,
                  <Nav.Link as={NavLink} to="/">
                    Series
                  </Nav.Link>,
                  <Button
                    onClick={logout}
                    key="logout-btn"
                    className="rounded-pill px-3"
                    variant="danger"
                  >
                    Logout
                  </Button>,
                ]
              ) : (
                <Button 
                  onClick={() => {
                    handleSignBtnClick();
                  }}
                  variant="outline-light">
                    Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

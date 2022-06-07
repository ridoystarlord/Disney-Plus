import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.svg";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {selectUserName,selectUserEmail,setUserLoginDetails} from "../../../features/user/userSlice"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const username=useSelector(selectUserName)
  const useremail=useSelector(selectUserEmail)
  const { googleSignIn, setUser,logout} = useAuth();
  const handleSignBtnClick = () => {
    googleSignIn()
      .then((result) => {
        const userinfo = result.user;
        setUser(userinfo);
        dispatch(setUserLoginDetails({
          name:userinfo.displayName,
          email:userinfo.email,
          photo:userinfo.photoURL
        }))
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        dispatch(setUserLoginDetails({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL
        }))
        navigate("/home", { replace: true });
      } else {
        setUser({});
        dispatch(setUserLoginDetails({
          name:null,
          email:null,
          photo:null
        }))
        navigate("/", { replace: true });
      }
    });
    return () => unSubscribe;
  },[])

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
              {useremail ? (
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
                    onClick={()=>{
                      logout()
                      dispatch(setUserLoginDetails({
                        name:null,
                        email:null,
                        photo:null
                      }))
                    }}
                    key="logout-btn"
                    className="rounded-pill px-3"
                    variant="outline-light"
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

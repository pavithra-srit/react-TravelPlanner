import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';
import profile from '../../assets/images/person.svg';
import logoImg from '../../assets/images/logo.jpg'
import { Link, Outlet } from 'react-router-dom'
import Home from '../Home/Home'

const NavBar = () => {
  return (
    <div>

      <Navbar bg="light" data-bs-theme="light">
        <Container >

          <Navbar.Brand href="#">
          <img className="img-logo" src={logoImg} alt="logo"
              width={50} height={40}></img>
          </Navbar.Brand>
          <Nav className="ml-auto" >
            <Nav.Link as={Link} to="/user/home" eventKey="/user/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/user/about" eventKey="/user/about">About</Nav.Link>
            <Nav.Link as={Link} to="/user/explore" eventKey="/user/explore">Explore</Nav.Link>
            <Nav.Link as={Link} to="/user/plan" eventKey="/user/plan">Plan</Nav.Link>
            <Nav.Link as={Link} to="/"><img src={profile} alt="person"
              width={50} height={30}></img></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Outlet/>
        </div>
    </div>
  )
}

export default NavBar
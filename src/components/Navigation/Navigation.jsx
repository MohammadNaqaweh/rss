import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'


const Navigation = () => {
  return (
    <Navbar fixed='top' style={{backgroundColor: "#57a8cc"}}>
      <Navbar.Brand>Search For a Job</Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='#home'>
            Home
          </Nav.Link>
          <Nav.Link href="#map">
            Map
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation

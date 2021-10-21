import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'



export default function NavBar() {
  
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
      <Nav.Link href="/Home">SolMarket</Nav.Link>
      <CartWidget/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Productos">Productos</Nav.Link>
          <NavDropdown title="Congelados" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Pescado</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Carne</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pollo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
          <Nav.Link href="/Contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
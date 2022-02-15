import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import './Navbar.css'


export default class Barra1 extends Component {
  render() {
    return <div>
        <Navbar bg="dark" expand="lg" className='barra'>
  <Container fluid>
    <Navbar.Brand href="#"> <img src='https://www.solutionbox.com.ar/images/sbox-logo.png' alt="Logo de la pagina" className='setlogo'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ height: '100%' }}

      >
        <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown" bg="primary">
          <NavDropdown.Item href="#action3">MONITORES </NavDropdown.Item>
          <NavDropdown.Item href="#action4">TECLADOS</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item href="#action5">NOTEBOOKS</NavDropdown.Item>
          <NavDropdown.Item href="#action5">GAMING</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="MARCAS" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#">TP LINK</NavDropdown.Item>
          <NavDropdown.Item href="#">GRANDSTREAM</NavDropdown.Item>
          <NavDropdown.Item href="#">UBIQUITI</NavDropdown.Item>
          <NavDropdown.Item href="#">JABRA</NavDropdown.Item>
          <NavDropdown.Item href="#">SAMSUNG DISPLAY</NavDropdown.Item>
          <NavDropdown.Item href="#">QNAP</NavDropdown.Item>
          <NavDropdown.Item href="#">SEAGATE</NavDropdown.Item>
          <NavDropdown.Item href="#">MIKROTIK</NavDropdown.Item>
          <NavDropdown.Item href="#">APPLE</NavDropdown.Item>
          <NavDropdown.Item href="#">YEALINK</NavDropdown.Item>
          <NavDropdown.Item href="#">ARUBA NETWORK WIRED</NavDropdown.Item>
          <NavDropdown.Item href="#">ARUBA WIRELESS</NavDropdown.Item>
          <NavDropdown.Item href="#">YEASTAR</NavDropdown.Item>
          <NavDropdown.Item href="#">MERCUSYS</NavDropdown.Item>
          <NavDropdown.Item href="#">HUAWEI</NavDropdown.Item>
          <NavDropdown.Item href="#">HYUNDAI</NavDropdown.Item>
          <NavDropdown.Item href="#">HEWLETT PACKARD SERVERS</NavDropdown.Item>
          <NavDropdown.Item href="#">HEWLETT PACKARD STORAGE</NavDropdown.Item>
          <NavDropdown.Item href="#">HEWLETT PACKARD SERVICES</NavDropdown.Item>
          <NavDropdown.Item href="#">SAMSUNG MONITORS</NavDropdown.Item>
          <NavDropdown.Item href="#">CAMBIUM NETWORKS</NavDropdown.Item>
          <NavDropdown.Item href="#">HUAWEI SEGURIDAD</NavDropdown.Item>
          <NavDropdown.Item href="#">LENOVO</NavDropdown.Item>
          <NavDropdown.Item href="#">PATRIOT MEMORY INC</NavDropdown.Item>
          <NavDropdown.Item href="#">EVGA</NavDropdown.Item>
          <NavDropdown.Item href="#">AMD</NavDropdown.Item>
          <NavDropdown.Item href="#">INTEL</NavDropdown.Item>
          <NavDropdown.Item href="#">ADATA</NavDropdown.Item>
          <NavDropdown.Item href="#">AMERICAN POWER CONVERSION</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="EMPRESA" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">LA EMPRESA</NavDropdown.Item>
          <NavDropdown.Item href="#action4">TRABAJA CON NOSOTROS</NavDropdown.Item>
          <NavDropdown.Item href="#action5">ALTA USUARIOS</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#" id="navbarSinScroll">
          CAPACITACIONES
        </Nav.Link>

        <NavDropdown title="LINKS UTILES" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">SUCRIBITE A NUESTRO NEWSLETTER</NavDropdown.Item>
          <NavDropdown.Item href="#action4">HP ENGAGE & GROW</NavDropdown.Item>
          <NavDropdown.Item href="#action5">PAGA CON QR DESDE TU CELULAR</NavDropdown.Item>
          <NavDropdown.Item href="#action5">LEGAJO IMPOSITIVO</NavDropdown.Item>
          <NavDropdown.Item href="#action5">CONDICIONES RMA</NavDropdown.Item>
        </NavDropdown>

        {/* <Button variant="outline-danger">REGISTRARSE</Button> */}

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Busque su producto"
          className="me-2 barritab"
          aria-label="Search"
        />
        <Button variant="outline-danger">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>;
  }
}

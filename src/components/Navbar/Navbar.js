import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Barra1 extends Component {
  render() {
    return <div>
        <Navbar bg="dark" expand="lg" className='barra'>
  <Container fluid>
    <Navbar.Brand href="/"> <Link to="/"><img src='https://www.solutionbox.com.ar/images/sbox-logo.png' alt="Logo de la pagina" className='setlogo'></img></Link></Navbar.Brand>
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
          <NavDropdown.Item> <Link to="nuestraempresa" className='dropdown-item mod'>LA EMPRESA</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link to="trabajaconnosotros" className='dropdown-item mod'>TRABAJA CON NOSOTROS</Link></NavDropdown.Item>
          <NavDropdown.Item href="https://www.solutionbox.com.ar/downloads/usuario/Cumplimiento_3.pdf" target="_blank">POLITICA ANTICORRUPCION</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="EVENTOS" id="navbarScrollingDropdown">
          <NavDropdown.Item href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target="_blank">CAPACITACIONES</NavDropdown.Item>
          <NavDropdown.Item href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target="_blank">YOUTUBE</NavDropdown.Item>
          <NavDropdown.Item href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target="_blank">WEBINAR</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="LINKS UTILES" id="navbarScrollingDropdown">
          <NavDropdown.Item> <Link to="newsletter" className='dropdown-item mod'>SUCRIBITE A NUESTRO NEWSLETTER</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action4">HP ENGAGE & GROW</NavDropdown.Item>
          <NavDropdown.Item href="#action5">LEGAJO IMPOSITIVO</NavDropdown.Item>
          <NavDropdown.Item href="#action5">CONDICIONES RMA</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown title="STAFF" id="navbarScrollingDropdown">
          <NavDropdown.Item> <Link to="/empleados/gerencia" className='dropdown-item mod'>GERENCIA</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link to="/empleados/productmanager" className='dropdown-item mod'>PRODUCT MANAGER</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link to="/empleados/vendedores" className='dropdown-item mod'>VENDEDORES</Link></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="SEDES" id="navbarScrollingDropdown">
          <NavDropdown.Item href="https://www.solutionbox.com.ar/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/argentina.png' alt="Bandera Arg" className='setBanderas'></img>ARGENTINA</NavDropdown.Item>
          <NavDropdown.Item href="https://www.solutionboxusa.com/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/estadosunidos.png' alt="Bandera USA" className='setBanderas'></img>USA</NavDropdown.Item>
          <NavDropdown.Item href="https://www.solutionbox.com.uy/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/uruguay.png' alt="Bandera Uruguay" className='setBanderas'></img>URUGUAY</NavDropdown.Item>
          <NavDropdown.Item href="https://www.solutionbox.com.do/" target='_blank' className='dominicana'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/Republicadominicana.png' alt="Bandera Rep.Dominicana" className='setBanderas'></img>R.DOMINICANA</NavDropdown.Item>
          <NavDropdown.Item href="https://www.solutionbox.cr/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/costarica.png' alt="Bandera Costa Rica" className='setBanderas'></img>COSTA RICA</NavDropdown.Item>
          <NavDropdown.Item href="https://www.solutionbox.com.hk/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/hongkong.png' alt="Bandera Hong Kong" className='setBanderas'></img>HONG KONG</NavDropdown.Item>
          <NavDropdown.Item href="http://www.solutionbox.com.pa/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/panama.png' alt="Bandera Panama" className='setBanderas'></img>PANAMA</NavDropdown.Item>
          <NavDropdown.Item href="http://www.solutionbox.com.hn/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/honduras.png' alt="Bandera Honduras" className='setBanderas'></img>HONDURAS</NavDropdown.Item>
          <NavDropdown.Item href="http://www.solutionbox.com.sv/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/elsalvador.png' alt="Bandera El Salvador" className='setBanderas'></img>EL SALVADOR</NavDropdown.Item>
          <NavDropdown.Item href="http://www.solutionbox.com.py/" target='_blank'><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/paraguay.png' alt="Bandera Paraguay" className='setBanderas'></img>PARAGUAY</NavDropdown.Item>
        </NavDropdown>

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

      {/* <Nav>
      <Button variant="outline-danger" className='botonLogin'>REGISTRARSE / LOGIN</Button>
      </Nav> */}



    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>;
  }
}

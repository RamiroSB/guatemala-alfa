import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Barra1 extends Component {
  render() {
    return <div>
        <Navbar bg="dark" expand="lg" className='barra'>
          <Container fluid>
            <Navbar.Brand href="/"> <Link to="/"><img src='https://raw.githubusercontent.com/RamiroSB/imagenes/main/sbox-logo-Guatemala.png' alt="Logo de la pagina" className='setlogo'></img></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ height: '100%' }}
              >
                
                {/* <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown" bg="primary">
                  <NavDropdown.Item href="#action3">MONITORES </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">TECLADOS</NavDropdown.Item>
                  
                  <NavDropdown.Item href="#action5">NOTEBOOKS</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">GAMING</NavDropdown.Item>
                </NavDropdown> */}

                <NavDropdown title="MARCAS" id="navbarScrollingDropdown">
                  <NavDropdown.Item><Link to="/marcas/ADATA" className='dropdown-item mod'>ADATA</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/AMD" className='dropdown-item mod'>AMD</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/AMERICAN-POWER-CONVERSION" className='dropdown-item mod'>AMERICAN POWER CONVERSION</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/APPLE" className='dropdown-item mod'>APPLE</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/ARUBA-NETWORK-WIRED" className='dropdown-item mod'>ARUBA NETWORK WIRED</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/ARUBA-WIRELESS" className='dropdown-item mod'>ARUBA WIRELESS</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/CAMBIUM-NETWORKS" className='dropdown-item mod'>CAMBIUM NETWORKS</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/EVGA" className='dropdown-item mod'>EVGA</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/GRANDSTREAM" className='dropdown-item mod'>GRANDSTREAM</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/JABRA" className='dropdown-item mod'>JABRA</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/LENOVO" className='dropdown-item mod'>LENOVO</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/MERCUSYS" className='dropdown-item mod'>MERCUSYS</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/MIKROTIK" className='dropdown-item mod'>MIKROTIK</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/POWERCOLOR" className='dropdown-item mod'>POWERCOLOR</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/SAMSUNG-DISPLAY" className='dropdown-item mod'>SAMSUNG DISPLAY</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/SAMSUNG-MONITORS" className='dropdown-item mod'>SAMSUNG MONITORS</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/TP-LINK" className='dropdown-item mod'>TP LINK</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/UBIQUITI" className='dropdown-item mod'>UBIQUITI</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/marcas/YEALINK" className='dropdown-item mod'>YEALINK</Link></NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="NOSOTROS" id="navbarScrollingDropdown">
                  <NavDropdown.Item> <Link to="nuestraempresa" className='dropdown-item mod'>LA EMPRESA</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="contacto" className='dropdown-item mod'>CONTACTO</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="trabajaconnosotros" className='dropdown-item mod'>TRABAJA CON NOSOTROS</Link></NavDropdown.Item>
                  <NavDropdown.Item href="https://www.solutionbox.com.ar/downloads/usuario/Cumplimiento_3.pdf" target="_blank">POLITICA ANTICORRUPCION</NavDropdown.Item>

                  <NavDropdown.Item> <Link to="/empleados" className='dropdown-item mod'>STAFF</Link></NavDropdown.Item>

                  {/* <NavDropdown title="STAFF" id="navbarScrollingDropdown" className='staffEdit' >
                    <NavDropdown.Item> <Link to="/empleados/gerencia" className='dropdown-item mod'>GERENCIA</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/empleados/productmanager" className='dropdown-item mod'>PRODUCT MANAGER</Link></NavDropdown.Item>
                    <NavDropdown.Item> <Link to="/empleados/vendedores" className='dropdown-item mod'>VENDEDORES</Link></NavDropdown.Item>
                  </NavDropdown>  */} 

                </NavDropdown>

                <NavDropdown title="EVENTOS" id="navbarScrollingDropdown">
                  <NavDropdown.Item><Link to="/capacitaciones" className='dropdown-item mod'>CAPACITACIONES</Link></NavDropdown.Item>
                  <NavDropdown.Item href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target="_blank">ON DEMAND</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="LINKS UTILES" id="navbarScrollingDropdown">
                  <NavDropdown.Item> <Link to="newsletter" className='dropdown-item mod'>SUCRIBITE A NUESTRO NEWSLETTER</Link></NavDropdown.Item>
                  <NavDropdown.Item href="https://www.solutionbox.com.ar/info-impositiva">LEGAJO IMPOSITIVO</NavDropdown.Item>
                  <NavDropdown.Item><Link to="/rma" className='dropdown-item mod'>RMA</Link></NavDropdown.Item>
                  <NavDropdown.Item href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf" target="_blank">CATALOGO DIGITAL</NavDropdown.Item>
                </NavDropdown>

                
                {/* 
                <NavDropdown title="STAFF" id="navbarScrollingDropdown">
                  <NavDropdown.Item> <Link to="/empleados/gerencia" className='dropdown-item mod'>GERENCIA</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/empleados/productmanager" className='dropdown-item mod'>PRODUCT MANAGER</Link></NavDropdown.Item>
                  <NavDropdown.Item> <Link to="/empleados/vendedores" className='dropdown-item mod'>VENDEDORES</Link></NavDropdown.Item>
                </NavDropdown> */}

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

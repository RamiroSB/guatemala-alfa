import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./CardStyle.css"
import { Container, Row, Button } from 'react-bootstrap'
/* import loader from "../assets/loader.gif" */
import Swal from 'sweetalert2/dist/sweetalert2.js'


export const ApiMap = () => {

    //Generando constante parametrizada con dotenv para ocultar la URL
    const backend = process.env.REACT_APP_API_GUATEMALA;

    const {id} = useParams ()

    const [marca, setMarca] = useState([])

    useEffect(() => {
      obtenerDatos()
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    const obtenerDatos = async () => {
      const datos = await fetch(`${backend}/articulos?marca=${id}`)
      const marcas = await datos.json()
      setMarca(marcas)
    }

    //Evento con sweetalert que lanza error al ver un producto
    const eventoClick = () =>{
      Swal.fire({
          icon: 'error',
          title: '',
          text: 'Debes estar registrado para visualizar el producto',
        })
  }

  //Evento con sweetalert para login de usuario
  const loginForm = () => {
      Swal.fire({
          title: 'Ingrese a su cuenta',
          html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
          <input type="password" id="password" class="swal2-input" placeholder="Password">`,
          confirmButtonText: 'Sign in',
          focusConfirm: false,
          preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!login || !password) {
              Swal.showValidationMessage(`Please enter login and password`)
            }
            return { login: login, password: password }
          }
        }).then((result) => {
          Swal.fire({
              icon: 'error',
              title: '',
              text: 'Pongase en contacto con el Digital Business Manager (martin_anusic@solutionbox.com.ar) de Solution Box',
            })
        })
  }

  //Variable con imagen placeholder para mostrar con el ternario cuando el producto no tiene img cargada
    let img = 'https://via.placeholder.com/550/b8b6b6/000000/?text=PRODUCTO-SIN-IMAGEN'
    
    /* let aux = marca; */
    /* const nombreMarca = marca[0].Marca; */

    return (
      <Container className='my-5'>
              <h2>PRODUCTOS EN STOCK</h2>
              <hr/>
            <Row>   
            {/* !marca ? <div className='gifCargando'><img src={loader} alt="Cargando..." className="logosb" /></div> : */
            marca && marca.map( 
              (index)=> (
                  <div className='card flexContainer mx-auto' style={{width: "22rem", margin: "10px"}} key={index.Alias}>
                    <div className='card-body editC'>
                      <img src={index.Imagen ? process.env.PUBLIC_URL + "/articulos/" + index.Imagen : img} alt='PRODUCTO SIN IMAGEN' className='imgProd'/>
                        <hr/>
                      
                          <div className="contenedorCard">
                              <p style={{textAlign: "center"}} >{index.Nombre}</p>
                              <p>{index.Marca}</p>
                              <p className='Descripcion'>Codigo#{index.Alias}</p>
                              <Button className='botonInfo' onClick={eventoClick}>VER PRODUCTO</Button>
                              <Button className='botonLogin' onClick={loginForm}>LOGIN</Button>
                          </div>
                      </div>
                   </div>
                ))
              }
          </Row>
      </Container>
    )
}

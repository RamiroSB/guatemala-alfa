import "../CardStyle.css"
import React, {useState, useEffect} from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import loader from "../../assets/loader.gif"

import Swal from 'sweetalert2/dist/sweetalert2.js'

import * as Service from './ApiQnp'

export const MapQnp = () => {
    const [stock, setStock] = useState ([])

    const pedirDatos = async()=> {
        try {
            const res = await Service.getProducts()
            setStock(res)
        } catch (error) {
            console.log(error)
        }
    }
  
    useEffect(()=> {
        pedirDatos()
    }, [])

    const eventoClick = () =>{
        Swal.fire({
            icon: 'error',
            title: '',
            text: 'Debes estar registrado para visualizar el producto',
          })
    }

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

    let aux = stock.data;
    let img = 'https://via.placeholder.com/550/b8b6b6/000000/?text=PRODUCTO-SIN-IMAGEN'
    
    return (
        <Container className='my-5'>
              {!aux ? <h2>Cargando productos</h2> : <h2>PRODUCTOS EN STOCK QNAP</h2>}
                <hr/>
              <Row>   
              {!aux ? <div className='gifCargando'><img src={loader} alt="Cargando..." className="logosb" /></div> :
              aux && aux.map( (index)=> (
                    <div className='card flexContainer mx-auto' style={{width: "22rem", margin: "10px"}} key={index.Alias} >
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



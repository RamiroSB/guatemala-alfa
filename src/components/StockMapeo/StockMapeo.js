import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
/* import { Link } from 'react-router-dom' */
import './StockMapeoStyle.css'

export const StockMapeo = ({stock}) => {
  return (
    <Container className='my-5'>
          <h2>PRODUCTOS EN STOCK</h2>
        <hr/>
        <Row>

          {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}

        {stock.map( (index)=> (
              <div className='card flexContainer mx-auto' style={{width: "22rem", margin: "10px"}} key={index.Alias} >
              <div className='card-body editC'>
                  <img src='https://via.placeholder.com/550/b8b6b6/000000/?text=PRODUCTO-SIN-IMAGEN' alt='ImagenProducto' className='imgProd'/>
                  <hr/>
                      <p style={{textAlign: "center"}} >{index.descripcion}</p>
                    
                      <p>{index.marca} {/* - <span className='spanStock'>Stock: {index.stock}</span> */} </p>
                    
                      <p className='Descripcion'>Codigo#{index.codigo}</p>
                          
                      {/* COMENTAR PARA VISTA SIN LOGUEO */}
                      {/* <p style={{color: 'black    '}}>U$S 100,00 <span className='spanIva'>+ IVA (10.5%) IMP. INT (NO)</span></p>
                      <p className='Descripcion'> Valor IVA USD 50</p> */}
                      
                      <Button className='botonInfo'>VER PRODUCTO</Button>
              
                      {/* COMENTAR PARA VISTA */}
                      <Button className='botonLogin'>LOGIN</Button>

                      {/* COMENTAR PARA VER VISTA LOGUEADO */}
                      {/* <Button className='botonCompra'>COMPRAR</Button> */}
              </div>
          </div>
            ))
          }
        </Row>
    </Container>
  )
}

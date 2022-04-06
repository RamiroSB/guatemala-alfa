import "../CardStyle.css"
import React, {useState, useEffect} from 'react'
import { Container, Row, Button } from 'react-bootstrap'

import * as Service from './ApiYes'

export const MapYes = () => {
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


    let aux = stock.data;
    let img = 'https://via.placeholder.com/550/b8b6b6/000000/?text=PRODUCTO-SIN-IMAGEN'
  
    return (
        <Container className='my-5'>
              {!aux ? <h2>Cargando productos</h2> : <h2>PRODUCTOS EN STOCK YEASTAR</h2>}
                <hr/>
              <Row>   
              {!aux ? <div className='gifCargando'><img src={"https://i.gifer.com/WMDx.gif"} alt="Cargando..." className="logosb" /></div> :
              aux && aux.map( (index)=> (
                    <div className='card flexContainer mx-auto' style={{width: "22rem", margin: "10px"}} key={index.Alias} >
                    <div className='card-body editC'>
                    <img src={index.Imagen ? process.env.PUBLIC_URL + "/articulos/" + index.Imagen : img} alt='PRODUCTO SIN IMAGEN' className='imgProd'/>
                        <hr/>
                        
                            <div className="contenedorCard">
                                <p style={{textAlign: "center"}} >{index.Nombre}</p>
                                <p>{index.Marca}</p>
                                <p className='Descripcion'>Codigo#{index.Alias}</p>
                                <Button className='botonInfo'>VER PRODUCTO</Button>
                                <Button className='botonLogin'>LOGIN</Button>
                            </div>
                    </div>
                </div>
                  ))
                }
            </Row>
        </Container>
      )
    }



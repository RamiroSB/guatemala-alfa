
/* import { useParams } from 'react-router-dom' */

import React, {useState, useEffect} from 'react'
import { Container, Row, Button } from 'react-bootstrap'

import * as Service from '../Api/Service'

export const StockLista = () => {
    const [stock, setStock] = useState ([])

/*     const { catId } = useParams () */


    const pedirDatos = async()=> {
        try {
            const res = await Service.getProducts()
            setStock(res)
            /* console.log(setStock) */
        } catch (error) {
            console.log(error)
        }
    }
  
    useEffect(()=> {
        pedirDatos()
/*             .then( (resp) => {
            if (!catId) {
                setStock (resp)
            } else {
                setStock ( resp.filter (stock => stock.Marca === catId))
            }
        })
        .catch( (error)=> {
            console.log(error)
        }) */
    }, [/* catId */])


    let aux = stock.data;
  
    return (
        <Container className='my-5'>
              <h2>PRODUCTOS EN STOCK</h2>
                <hr/>
              <Row>
    
              {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}
    
              {!aux ? <div className='asolute'><img src={"https://i.gifer.com/ZZ5H.gif"} alt="Cargando..." className="logosb" /></div> :
              aux && aux.map( (index)=> (
                    <div className='card flexContainer mx-auto' style={{width: "22rem", margin: "10px"}} key={index.Alias} >
                    <div className='card-body editC'>
                        <img src='https://via.placeholder.com/550/b8b6b6/000000/?text=PRODUCTO-SIN-IMAGEN' alt='ImagenProducto' className='imgProd'/>
                        <hr/>
                            <p style={{textAlign: "center"}} >{index.Nombre}</p>
                          
                            <p>{index.Marca}</p>
                          
                            <p className='Descripcion'>Codigo#{index.Alias}</p>
                            
                            <Button className='botonInfo'>VER PRODUCTO</Button>
                    
                            <Button className='botonLogin'>LOGIN</Button>
                    </div>
                </div>
                  ))
                }
            </Row>
        </Container>
      )
    }



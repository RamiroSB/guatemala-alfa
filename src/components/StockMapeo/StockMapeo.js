import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './StockMapeoStyle.css'

export const StockMapeo = ({stock}) => {
  return (
    <Container className='my-5'>
          <h2>PRODUCTOS EN STOCK</h2>
        <hr/>
        <Row>

          {/* Mapeo del array de objetos, iterando y mostrando cada propiedad */}

        {stock.map( (item)=> (
                    <div key={item.id} className='card' id='cuerpo' style={{width: "20rem", margin: "10px", textAlign: "center"}}>
                        <img src={item.img} className='itemImg' alt="Foto item en stock"/>
                            <div className='card-body'>
                                <h4 className='itemCodigo'><span style= {{color: "#515151"}}>SKU:</span> {item.codigo}</h4>
                                <hr/>
                                <p className='itemDescripcion'><span style= {{color: "#515151"}}>Descripcion:</span> {item.descripcion}</p>
                                <p className='itemMarca'><span style= {{color: "#515151"}}>Marca:</span> {item.marca}</p>
                                <p className='itemStock'><span style= {{color: "#515151"}}>Stock Disponible</span> {item.stock}</p>
                                <Button variant="outline-dark" className='botonPrecio'><Link to="/contacto" className='linkPrecio'>PRECIO</Link></Button>
                         </div>
                    </div>
                ))
            }
        </Row>
    </Container>
  )
}
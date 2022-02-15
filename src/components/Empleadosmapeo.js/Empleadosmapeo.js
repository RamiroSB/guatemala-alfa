import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Empleadosmapeo = ({empleados}) => {
  return (
    <Container className='my-5'>
        <hr/>
        <Row>
        {empleados.map( (persona)=> (
                    <div key={persona.id} className='card' style={{width: "25rem", margin: "10px", textAlign: "center"}}>
                        <img src={persona.img} alt="Foto empleado/a"/>
                            <div className='card-body'>
                                <h3>{persona.nombre}</h3>
                                <p>{persona.cargo}</p>
                                <p>{persona.correo}</p>
                                <p>{persona.email}</p>
                                <p>{persona.movil}</p>
                         </div>
                    </div>
                ))
            }
        </Row>
    </Container>
  )
}

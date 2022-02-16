import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './EmpleadosmapeoStyle.css'

export const Empleadosmapeo = ({empleados}) => {
  return (
    <Container className='my-5'>
          <h2>Empleados Solution Box Guatemala</h2>
        <hr/>
        <Row>
        {empleados.map( (persona)=> (
                    <div key={persona.id} className='card' id='cuerpo' style={{width: "15rem", margin: "10px", textAlign: "center"}}>
                        <img src={persona.img} className='imagenPersona' alt="Foto empleado/a"/>
                            <div className='card-body'>
                                <h4 className='personaNombre'>{persona.nombre}</h4>
                                <p className='personaCargo'>{persona.cargo}</p>
                                <hr/>
                                <p className='personaCorreo'>{persona.correo}</p>
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

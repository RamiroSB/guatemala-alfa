import React, { useState } from 'react'
import "./FormularioStyle.css"

import Swal from 'sweetalert2/dist/sweetalert2.js'


export const Formulario = () => {

    const [values, setValues] = useState({
        nombre: '',
        mensaje: '',
        email: '',
    })

    const handleInputChange = (e) => {        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado correctamente!',
            text: 'Muchas gracias por su mensaje, nos estaremos comunicando a la brevedad',
          })
          
          /* setValues ( {
            nombre: "",
            mensaje: "",
            email: "",
        }) */
    }
 

    return (

        <>
            {
                    <div className="my-5 formulario">
                        <h2>Coloque sus datos!</h2>
                        <hr/>

                        <form action="http://localhost:8080/api/contacto" method="POST" onSubmit={handleSubmit}>
                            <input
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre"
                                
                            />

                            <input
                                onChange={handleInputChange}
                                name="mensaje"
                                value={values.mensaje}
                                className="textForm"
                                type="text"
                                placeholder="mensaje"
                                required
                            />

                            <input
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className="textForm"
                                type="email"
                                placeholder="E-mail"
                                autoComplete='off'
                                required
                            />


                            <button type="submit" className="butn">Enviar</button>

                        </form>
                    </div>
            }
        </>
    )
}
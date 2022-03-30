import React, { useState } from 'react'

import Swal from 'sweetalert2/dist/sweetalert2.js'

export const Rma = () => {

    const [values, setValues] = useState({
        nombre: '',
        razonSocial: '',
        factura: '',
        fechaFactura: '',
        email: '',
        vendedor: '',
        marca: '',
        problema: '',
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
          
    }



    return (

        <>
            {
                    <div className="my-5 formulario">
                        <h2>Formulario de solicitud de RMA</h2>
                        <hr/>

                        <form action="http://localhost:8080/api/rma" method="POST" onSubmit={handleSubmit}>
                            <input
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre y Apellido"
                                required
                                
                            />

                            <input
                                onChange={handleInputChange}
                                name="razonSocial"
                                value={values.razonSocial}
                                className="textForm"
                                type="text"
                                placeholder="Razon Social"
                                required
                            />

                            <input
                                onChange={handleInputChange}
                                name="factura"
                                value={values.factura}
                                className="textForm"
                                type="number"
                                placeholder="Numero de Factura"
                                required
                            />

                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="fechaFactura"
                                value={values.fechaFactura}
                                className="textForm"
                                type="date"
                                placeholder="Fecha de la factura"
                                autoComplete='off'
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


                            <input
                                onChange={handleInputChange}
                                name="vendedor"
                                value={values.vendedor}
                                className="textForm"
                                type="text"
                                placeholder="Indique su vendedor"
                                autoComplete='off'
                                required
                            />

                            <input
                                onChange={handleInputChange}
                                name="marca"
                                value={values.marca}
                                className="textForm"
                                type="text"
                                placeholder="Marca del producto"
                                autoComplete='off'
                                required
                            />

                            <textarea style={{height:"5%"}}
                                onChange={handleInputChange}
                                name="problema"
                                value={values.problema}
                                className="textForm"
                                type="text"
                                placeholder="Describa su problema"
                                rows= "2"
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
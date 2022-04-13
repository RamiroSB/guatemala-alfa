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
        /* fpdf: '', */
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
          }).then(function() {
            window.location = "index.html";
        });
          
    }



    return (

        <>
            {
                    <div className="my-5 formulario">
                        <h2>Formulario de solicitud de RMA</h2>
                        <hr/>

                        <form action="https://api-rest-mailer.herokuapp.com/api/rma" method="POST" onSubmit={handleSubmit}>

                        <p className='formP'>Nombre y Apellido</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre y Apellido"
                                required
                                
                            />

                            <p className='formP'>Razon Social</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="razonSocial"
                                value={values.razonSocial}
                                className="textForm"
                                type="text"
                                placeholder="Ingrese su Razon Social"
                                required
                            />

                            <p className='formP'>Factura</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="factura"
                                value={values.factura}
                                className="textForm"
                                type="number"
                                placeholder="Ingrese el numero de Factura"
                                required
                            />

                            <p className='formP'>Fecha de la Factura</p> 
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
                            <p className='formP'>Email</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className="textForm"
                                type="email"
                                placeholder="Ingrese su e-mail"
                                autoComplete='off'
                                required
                            />

                            <p className='formP'>Vendedor</p> 
                            <input style={{height:"1%"}}
                                onChange={handleInputChange}
                                name="vendedor"
                                value={values.vendedor}
                                className="textForm"
                                type="text"
                                placeholder="Indique su vendedor"
                                autoComplete='off'
                                required
                            />

                            <p className='formP'>Marca del producto</p> 
                            <input style={{height:"1%"}}
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

                            {/* <p className='formP mb-2'>(OPCIONAL) Ingrese su factura, formato PDF</p>
                            <input
                                onChange={handleInputChange}
                                name="fpdf"
                                value={values.fpdf}
                                className="fpdf"
                                type="file"
                            /> */}

                            <button type="submit" className="butn">Enviar</button>
                        </form>
                    </div>
            }
        </>
    )
}
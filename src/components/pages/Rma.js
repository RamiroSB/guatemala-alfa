import React, { useState } from 'react'

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
    
/* para prevenir que el formulario se envie y rompa la web ya que no tiene back */
    const previeneEnvio = event => {
        event.preventDefault()
    }


    return (

        <>
            {
                    <div className="my-5 formulario">
                        <h2>Formulario de solicitud de RMA</h2>
                        <hr/>

                        <form onSubmit={previeneEnvio}>
                            <input
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre y Apellido"
                                
                            />
                            {values.nombre.length < 4 && <small></small>}

                            <input
                                onChange={handleInputChange}
                                name="razonSocial"
                                value={values.razonSocial}
                                className="textForm"
                                type="text"
                                placeholder="Razon Social"
                            />
                            {values.razonSocial.length < 4 && <small></small>}

                            <input
                                onChan
                            {values.factura.length < 4 && <small></small>}

                            <input
                                onChange={handleInputChange}
                                name="fechaFactura"
                                value={values.fechaFactura}
                                className="textForm"
                                type="text"
                                placeholder="Fecha de la factura"
                                autoComplete='off'
                            />
                            {values.fechaFactura.length < 4 && <small></small>}
                            
                            <input
                                onChange={handleInputChange}
                                name="email"
                                value={values.email}
                                className="textForm"
                                type="email"
                                placeholder="E-mail"
                                autoComplete='off'
                            />
                            {values.email.length < 4 && <small></small>}


                            <input
                                onChange={handleInputChange}
                                name="vendedor"
                                value={values.vendedor}
                                className="textForm"
                                type="text"
                                placeholder="Indique su vendedor"
                                autoComplete='off'
                            /roblema y su marca"
                                rows= "2"
                                autoComplete='off'
                         
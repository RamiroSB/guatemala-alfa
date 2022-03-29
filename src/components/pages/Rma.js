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

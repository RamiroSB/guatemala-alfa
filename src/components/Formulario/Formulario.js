import React, { useState } from 'react'
import "./FormularioStyle.css"

export const Formulario = () => {

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    return (

        <>
            {
                    <div className="my-5 formulario">
                        <h2>Coloque sus datos!</h2>
                        <hr/>

                        <form onSubmit={""}>
                            <input
                                onChange={handleInputChange}
                                name="nombre"
                                value={values.nombre}
                                className="textForm"
                                type="text"
                                placeholder="Nombre"
                                
                            />
                            {values.nombre.length < 4 && <small></small>}

                            <input
                                onChange={handleInputChange}
                                name="apellido"
                                value={values.apellido}
                                className="textForm"
                                type="text"
                                placeholder="Apellido"
                            />
                            {values.apellido.length < 4 && <small></small>}

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
                                name="emailConfirm"
                                value={values.emailConfirm}
                                className="textForm" 
                                type="email"
                                placeholder="Repita su e-mail"
                                autoComplete='off'
                            />
                            {values.emailConfirm !== values.email && <small></small>}

                            <button type="submit" className="butn">Enviar</button>
                        </form>
                    </div>
            }
        </>
    )
}
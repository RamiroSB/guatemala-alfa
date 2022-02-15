import React, { useEffect, useState } from 'react'
import { Empleadosmapeo } from '../Empleadosmapeo.js/Empleadosmapeo'
import { PedirDatos } from '../helpers/PedirDatos'


export const EmpleadosLista = () => {
    const [loading, setLoading] = useState(false)
    const [empleados, setEmpleados] = useState ([])

    useEffect(()=> {
        setLoading(true)
        PedirDatos()
        .then( (resp)=> {
            setEmpleados (resp)
        })
        .catch( (error)=> {
            console.log(error)
        })
        .finally ( ()=> {
            setLoading(false)
        })
    }, [])
  
    return (
             <>
                {loading 
                ? <h2> Cargando...</h2> 
                : <Empleadosmapeo empleados={empleados}/>
                    
                }
            </>
  )
}



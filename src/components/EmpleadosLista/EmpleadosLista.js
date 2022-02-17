import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Empleadosmapeo } from '../Empleadosmapeo.js/Empleadosmapeo'
import { PedirDatos } from '../helpers/PedirDatos'
import { Loader } from '../Loader/Loader'


export const EmpleadosLista = () => {
    const [loading, setLoading] = useState(false)
    const [empleados, setEmpleados] = useState ([])

    const { catId } = useParams ()

    useEffect(()=> {
        setLoading(true)
        PedirDatos()
            .then( (resp) => {
            if (!catId) {
                setEmpleados (resp)
            } else {
                setEmpleados ( resp.filter (persona => persona.category === catId))
            }
        })
        .catch( (error)=> {
            console.log(error)
        })
        .finally ( ()=> {
            setLoading(false)
        })
    }, [catId])
  
    return (
             <>
                {loading 
                ? <Loader/>
                : <Empleadosmapeo empleados={empleados}/>
                    
                }
            </>
  )
}



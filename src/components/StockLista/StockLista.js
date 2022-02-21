import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StockMapeo } from '../StockMapeo/StockMapeo'
import { PedirDatosStock } from '../helpers/PedirDatosStock'
import { Loader } from '../Loader/Loader'


export const StockLista = () => {
    const [loading, setLoading] = useState(false)
    const [stock, setStock] = useState ([])

    const { catId } = useParams ()

    /* Funcion para validar el stock, coincidiendo la propiedad category con la url  */
    
    useEffect(()=> {
        setLoading(true)
        PedirDatosStock()
            .then( (resp) => {
            if (!catId) {
                setStock (resp)
            } else {
                setStock ( resp.filter (stock => stock.marca === catId))
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
                : <StockMapeo stock={stock}/>
                    
                }
            </>
  )
}



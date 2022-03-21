import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./LoaderStyle.css" 

/* Loader spinner de bootstrap para desplegar mientras cargan los componentes que consumen api o mapean */

export const Loader = () => {
    return (
            <div className="spinner">
            <Spinner
            animation ="grow"
            size="lg"
            />
            </div>
    )
}
import React from 'react';
import { Container } from 'react-bootstrap';
import './Imagenes.css'

export const Imagenes = () => {
  return (
    <div className="background"> 
        <Container>
         <img src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/muetra1.jpg?token=GHSAT0AAAAAABRG6YO7KKYL6KYWFV5FHQ3WYP5GTXQ" alt="imagenes nsx" className='stretch animate__backInLeft'></img>
         
         <img src="https://www.solutionbox.com.ar/img/slider/slider/nsx2021.jpeg" alt="imagenes nsx" className='stretch'></img>
         
         <img src="https://raw.githubusercontent.com/RamiroSB/imagenes/main/muetra2.jpg?token=GHSAT0AAAAAABRG6YO6SPVEBINW3Q5J2MQQYP5GV3Q" alt="imagenes nsx" className='stretch'></img>
         </Container>
    </div>
)
};
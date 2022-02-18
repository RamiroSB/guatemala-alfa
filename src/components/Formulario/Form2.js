import React from 'react'
import "./Form2style.css"

export const Form2 = () => {
  return (
    <div className="content">

        <h1 className='logo'>Contacta<span>nos</span></h1>

        <div class="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Contacto</h3>
                <form action="">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="fullname"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="tel" name="phone"/>
                    </p>
                    <p>
                        <label>Interes</label>
                        <input type="text" name="affair"/>
                    </p>
                    <p class="block">
                       <label>Mensaje</label> 
                        <textarea name="message" rows="1"></textarea>
                    </p>
                    <p class="block">
                        <button className='enviaConsulta'>
                            ENVIAR CONSULTA
                        </button>
                    </p>
                </form>
            </div>
            <div className="contact-info">
                <h4>Mas informacion</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Horario: Lunes a Viernes de 8.30 a 18.30hs</li>
                    <li><i class="fas fa-phone"></i> Teléfono: +54 11 6091-1200</li>
                    <li><i class="fas fa-envelope-open-text"></i> E-mail: info@solutionbox.com.ar</li>
                </ul>
                <p>Dirección</p>
                <p>Goncalves Dias 664, (1276) Ciudad Autónoma de Buenos Aires. Argentina. </p>
            </div>
        </div>

    </div>

  )
}
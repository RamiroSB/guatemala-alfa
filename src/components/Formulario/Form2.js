import React from 'react'
import "./Form2style.css"

export const Form2 = () => {
    
/* para prevenir que el formulario se envie y rompa la web ya que no tiene back */
    const previeneElEnvio = event => {
        event.preventDefault()
    }

return (
    <div className="content">

        <h1 className='logo'>Contacta<span>nos</span></h1>

        <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
                <h3>Contacto</h3>
                <form onSubmit={previeneElEnvio}>
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
                    <p className="block">
                        <label>Mensaje</label> 
                        <textarea name="message" rows="1"></textarea>
                    </p>
                    <p className="block">
                        <button className='enviaConsulta'>
                            ENVIAR CONSULTA
                        </button>
                    </p>
                </form>
            </div>
            <div className="contact-info">
                <h4>Mas informacion</h4>
                <ul>
                    <li><i className="fas fa-map-marker-alt"></i> Horario: Lunes a Viernes de 8.30 a 18.30hs</li>
                    <li><i className="fas fa-phone"></i> Teléfono: +54 11 6091-1200</li>
                    <li><i className="fas fa-envelope-open-text"></i> E-mail: info@solutionbox.com.gt</li>
                </ul>
                <p>Dirección</p>
                <p>Blvd. Los Proceres 24-69 Zona 10 - Zona Pradera, Torre 4 - Nivel 5, Oficina 510 </p>
            </div>
        </div>

    </div>

)
}

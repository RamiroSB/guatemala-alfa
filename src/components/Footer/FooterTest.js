import React from 'react'
import "./FooterTestStyle.css"
import { Link } from 'react-router-dom'


export const FooterTest = () => {
  return (
    <footer className="footer">
        <div class="container bottom_border">
        <h1 style={{ color: "white",
				textAlign: "center"}}>
		Solution Box Guatemala S.A
	</h1>
{/* 	<h5 style={{ color: "white",
				textAlign: "center",}}>
		GUATEMALA
	</h5> */}
            <div className="row">
                <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                    <h5 className="headin5_amrc col_white_amrc pt2">ENCUÉNTRANOS</h5>
                    <p><i className="fa fa-location-arrow"></i> Blvd. Los Proceres 24-69 Zona 10 <br/>Zona Pradera, Torre 4 - Nivel 5, Oficina 510 </p>
                    <p><i className="fa fa-phone"></i>  6091-1200  </p>
                    <p><i className="fa fa fa-envelope"></i> info@solutionbox.com.gt</p>
                </div>


            <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">SEDES</h5>
                <ul className="footer_ul_amrc">
                <li><a href="https://www.solutionboxusa.com/" target='_blank' rel="noreferrer">USA</a></li>
                <li><a href="https://www.solutionbox.com.uy/" target='_blank' rel="noreferrer">Uruguay</a></li>
                <li><a href="https://www.solutionbox.com.do/" target='_blank' rel="noreferrer">Republica Dominicana</a></li>
                <li><a href="https://www.solutionbox.cr/" target='_blank' rel="noreferrer">Costa Rica</a></li>
                <li><a href="https://www.solutionbox.com.hk/" target='_blank' rel="noreferrer">Hong Kong</a></li>
                <li><a href="http://www.solutionbox.com.pa/" target='_blank' rel="noreferrer">Panama</a></li>
                <li><a href="http://www.solutionbox.com.hn/" target='_blank' rel="noreferrer">Honduras</a></li>
                <li><a href="http://www.solutionbox.com.sv/" target='_blank' rel="noreferrer">El Salvador</a></li>
                <li><a href="https://www.solutionbox.com.ar/" target='_blank' rel="noreferrer">Argentina</a></li>
                <li><a href="http://www.solutionbox.com.py/" target='_blank' rel="noreferrer">Paraguay</a></li>
                </ul>
            </div>
            


            <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">SOLUTION</h5>

                <ul className="footer_ul_amrc">
                <li><Link to="nuestraempresa">La Empresa</Link></li>
                <li><Link to="trabajaconnosotros">Trabaja con nosotros</Link></li>
                <li><a href="https://www.solutionbox.com.ar/rma">RMA</a></li>
                <li><a href="https://www.solutionbox.com.ar/info-impositiva">Legajo Impositivo</a></li>
                </ul>
            </div>


                <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">WEB</h5>

                <ul className="footer_ul_amrc">
                <li><a href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf">Catalogo Digital</a></li>
                <li><Link to="capacitaciones">Capacitaciones</Link></li>
                <li><Link to="contacto">Alta Usuarios</Link></li>
                </ul>

                </div>
            </div>
            </div>


            <div className="container">
            <p className="text-center">© 2022 Solution Box S.A | Blvd. Los Proceres 24-69 Zona 10, Guatemala </p>

            <ul className="social_footer_ul">
            <li><a href="https://www.facebook.com/solutionbox.guatemala" target='_blank' rel="noreferrer" className='iconoFacebook'><i className="fab fa-facebook-f gran"></i></a></li>
            <li><a href="https://twitter.com/solutionboxusa" target='_blank' rel="noreferrer" className='iconoTwitter'><i class="fab fa-twitter gran"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target='_blank' rel="noreferrer" className='iconoYoutube'><i className="fab fa-youtube gran"></i></a></li>
            <li><a href="https://www.instagram.com/solutionbox.guatemala" target='_blank' rel="noreferrer" className='iconoInstagram'><i className="fab fa-instagram gran"></i></a></li>
            <li><a href="https://www.linkedin.com/company/solution-box-llc" target='_blank' rel="noreferrer" className='iconoLinkedin'><i className="fab fa-linkedin gran"></i></a></li>
            </ul>

        </div>

    </footer>
  )
}

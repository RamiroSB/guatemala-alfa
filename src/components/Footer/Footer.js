import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading} from "./FooterStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Iconos.css'


export const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px",
                marginBottom: "30px" }}>
		Solution Box S.R.L
	</h1>
	<h5 style={{ color: "white",
				textAlign: "center",
				marginTop: "-30px",
                marginBottom: "30px" }}>
		GUATEMALA
	</h5>
	<Container>
		<Row>
		<Column>
			<Heading>SEDES</Heading>
			<FooterLink href="https://www.solutionboxusa.com/" target='_blank'>USA</FooterLink>
			<FooterLink href="https://www.solutionbox.com.uy/" target='_blank'>Uruguay</FooterLink>
			<FooterLink href="https://www.solutionbox.com.do/" target='_blank'>Republica Dominicana</FooterLink>
			<FooterLink href="https://www.solutionbox.cr/" target='_blank'>Costa Rica</FooterLink>
			<FooterLink href="https://www.solutionbox.com.hk/" target='_blank'>Hong Kong</FooterLink>
			<FooterLink href="http://www.solutionbox.com.pa/" target='_blank'>Panama</FooterLink>
			<FooterLink href="http://www.solutionbox.com.hn/" target='_blank'>Honduras</FooterLink>
			<FooterLink href="http://www.solutionbox.com.sv/" target='_blank'>El Salvador</FooterLink>
			<FooterLink href="https://www.solutionbox.com.ar/" target='_blank'>Argentina</FooterLink>
			<FooterLink href="http://www.solutionbox.com.py/" target='_blank'>Paraguay</FooterLink>
		</Column>
		<Column>
			<Heading>SOLUTION</Heading>
			<FooterLink href="#">La empresa</FooterLink>
			<FooterLink href="#">Trabaja con nostros</FooterLink>
			<FooterLink href="#">RMA</FooterLink>
			<FooterLink href="#">Info Impositiva</FooterLink>
		</Column>
		<Column>
			<Heading>WEB</Heading>
			<FooterLink href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf">Catalogo digital</FooterLink>
			<FooterLink href="#">Cursos</FooterLink>
			<FooterLink href="#">Seminarios</FooterLink>
			<FooterLink href="#">Alta usuarios</FooterLink>
		</Column>
		<Column>

			<Heading>CONTACTO</Heading>
			<FooterLink href="https://www.facebook.com/solutionbox.guatemala/" target='_blank'>
			<FontAwesomeIcon icon={faFacebook} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</FooterLink>


			<FooterLink href="https://www.instagram.com/solutionbox.guatemala/" target='_blank'>
			<FontAwesomeIcon icon={faInstagram} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</FooterLink>


			<FooterLink href="https://twitter.com/solutionboxusa" target='_blank'>
			<FontAwesomeIcon icon={faTwitter} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</FooterLink>


			<FooterLink href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target='_blank'>
			<FontAwesomeIcon icon={faYoutube} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
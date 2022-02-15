import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { ICONO } from "@fortawesome/free-regular-svg-icons"; */
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
			<FooterLink href="#">USA</FooterLink>
			<FooterLink href="#">Uruguay</FooterLink>
			<FooterLink href="#">Republica Dominicana</FooterLink>
			<FooterLink href="#">Costa Rica</FooterLink>
			<FooterLink href="#">Hong Kong</FooterLink>
			<FooterLink href="#">Panama</FooterLink>
			<FooterLink href="#">Honduras</FooterLink>
			<FooterLink href="#">El Salvador</FooterLink>
			<FooterLink href="#">Guatemala</FooterLink>
			<FooterLink href="#">Uruguay</FooterLink>
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
			<FooterLink href="#">Catalogo digital</FooterLink>
			<FooterLink href="#">Cursos</FooterLink>
			<FooterLink href="#">Seminarios</FooterLink>
			<FooterLink href="#">Alta usuarios</FooterLink>
		</Column>
		<Column>

			<Heading>CONTACTO</Heading>
			<FooterLink href="#">
			<FontAwesomeIcon icon={faFacebook} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</FooterLink>


			<FooterLink href="#">
			<FontAwesomeIcon icon={faInstagram} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</FooterLink>


			<FooterLink href="#">
			<FontAwesomeIcon icon={faTwitter} className="iconos"/>
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</FooterLink>


			<FooterLink href="#">
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
import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
width: 100%;
height:50%;

@media (max-width: 1100px) {
	padding: 70px 30px;
    height:100%;
    
}

@media (max-width: 700px) {
    height:110%;  
	text-align:center;
}


@media (max-width: 400px) {
    height:140%;  
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
/* margin-left: 60px; */
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 5px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: red;
	transition: 200ms ease-in;
}

@media (max-width: 450px) {
	text-align:center;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;

@media (max-width: 450px) {
	margin-bottom: 5px;
	text-align:center;
}
`;
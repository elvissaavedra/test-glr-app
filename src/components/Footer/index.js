import React from 'react';

import imgFacebook from '../shared/images/icon-facebook.svg';
import imgInstagram from '../shared/images/icon-instagram.svg';
import imgTwitter from '../shared/images/icon-twitter.svg';

import './style.css';

export const Footer = () => {
	return (
		<div className='footer-div'>
			<section className='footer-div-section1'>
				<div>Grupo LA Republica</div>
				<div>RTV</div>
				<div>LR/PODCAST</div>
				<div>EDICION IMPRESION</div>
				<div>
					<input />
				</div>
				<div className='box-subscribe'>SUSCRÍBETE</div>
				<div className='box-social'>
					<img src={imgFacebook} alt='facebook' />
					<img src={imgInstagram} alt='instagram' />
					<img src={imgTwitter} alt='twitter' />
				</div>
			</section>
			<section className='footer-div-section2'>
				<div className='footer-div-section2-div1'>
					<div className='footer-div-section2-div1-div1'>
						<p>Últimas noticias</p>
						<p>Últimas noticias</p>
						<p>Dólar en Perú</p>
						<p>Premios The Best 2020</p>
					</div>
					<div className='footer-div-section2-div1-div1'>
						<p>Política</p>
						<p>Espectáculos</p>
						<p>DolarToday</p>
					</div>
					<div className='footer-div-section2-div1-div1'>
						<p>Economía</p>
						<p>Sociedad</p>
						<p>Dólar Blue</p>
					</div>
					<div className='footer-div-section2-div1-div1'>
						<p>Deportes</p>
						<p>Recetas</p>
						<p>Partidos de Hoy</p>
					</div>
					<div className='footer-div-section2-div1-div1'>
						<p>Sociedad</p>
						<p>Últimas noticias</p>
						<p>Horóscopo de Hoy</p>
					</div>
					<div className='footer-div-section2-div1-div1'>
						<p>Mundo</p>
						<p>Sociedad</p>
						<p>Coronavirus en Perú</p>
					</div>
				</div>
				<div className='footer-div-section2-div2'>
					<img src='https://cdn.larepublica.pe/images/content/default/newHome/larepublica-01.svg' alt='logoRepublica' />
					<span>©Todos los derechos reservados - 2020</span>
				</div>
			</section>
		</div>
	);
};

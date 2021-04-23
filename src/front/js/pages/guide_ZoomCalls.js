import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import ZOOMfirstImg from "../../img/img_ZoomCalls/1.png";
import ZOOMsecondImg from "../../img/img_ZoomCalls/2.png";
import ZOOMthirdImg from "../../img/img_ZoomCalls/3.png";
import ZOOMfourthImg from "../../img/img_ZoomCalls/4.png";
import ZOOMfifthImg from "../../img/img_ZoomCalls/5.png";
import ZOOMsixthImg from "../../img/img_ZoomCalls/6.png";
import ZOOMseventhImg from "../../img/img_ZoomCalls/7.jpg";
import ZOOMeighthImg from "../../img/img_ZoomCalls/8.jpg";
import "../../styles/home.scss";

export const ZoomCalls = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container mb-5">
				<h1>MI PRIMERA VIDEO LLAMDA</h1>
				<h1>EN ZOOM</h1>
				<h5>EN EL APP DE TU TELÉFONO</h5>

				{/* video tutorial */}
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/l6Ee84FPT68"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>

				<h3>Paso 1</h3>
				<p>
					Para poder seguir los pasos de esta guía, necesita tener una cuenta de Zoom, si no tiene cuenta
					favor crear una en{" "}
					<a href="https://zoom.us/signin" target="_blank" rel="noopener noreferrer">
						<i>este enlace</i>
					</a>
					Y luego regrese a esta guía. Si ya tiene cuenta favor seguir al paso <a href="#paso2">número 2</a>.
				</p>

				<h3 id="paso2">Paso 2</h3>
				<p>Abrimos la aplicación en nuestro celular, presionando con nuestro dedo sobre el icono de Zoom.</p>
				{/* esta clase es la unica diferente porque tiene tamano diferente al resto */}
				<img src="1.png" className="zoomTutorialImg1" />

				<h3>Paso 3</h3>
				<p>
					Cuando termine de abrir la aplicación vamos a poder ver la pantalla inicio de Zoom, donde podremos
					ver las diferentes opciones disponibles de la app, para crear la video llamada necesita presionar
					con su dedo{" "}
					<strong>
						<i>“Nueva reunión”</i>
					</strong>
					.
				</p>
				<img src="2.png" className="zoomTutorialImg" />
				{/* <img src="2.jpg" className="zoomTutorialImg" /> */}

				<h3>Paso 4</h3>
				<p>
					La siguiente pantalla, presione el botón{" "}
					<strong>
						<i>“Iniciar una reunión”</i>
					</strong>
					.
				</p>
				<img src="3.png" className="zoomTutorialImg4" />

				<h3>Paso 5</h3>
				<p>
					Cuando inicie la video llamada, nos va mostrar un panel donde podremos activar o desactivar
					presionando sobre el icono audio y video, para invitar a personas a la reunión, tendremos que
					presionar sobre{" "}
					<strong>
						<i>“Participantes”</i>
					</strong>
					.
				</p>
				<img src="4.png" className="zoomTutorialImg" />

				<h3>Paso 6</h3>
				<p>
					En la ventanilla de{" "}
					<strong>
						<i>“Participantes”</i>
					</strong>
					, vamos a presionar sobre la opción{" "}
					<strong>
						<i>“Invitar”</i>
					</strong>
					, nos mostrara las opciones para compartir la invitación, en este ejemplo vamos a utilizar{" "}
					<strong>
						<i>“Copiar vinculo”</i>
					</strong>
					.
				</p>
				<img src="5.png" className="zoomTutorialImg" />
				<br />
				<img src="6.png" className="zoomTutorialImg" />

				<h3>Paso 7</h3>
				<p>
					Esta opción nos permite compartir en link o url de acceso en cualquier aplicación, para este ejemplo
					utilizaremos{" "}
					<i>
						<strong>WhatsApp</strong>
					</i>
					, al ingresar en un chat, mantenemos presionado nuestro dedo sobre la sección donde se escribe el
					mensaje, y elegimos la opción de{" "}
					<i>
						<strong>“Pegar”</strong>
					</i>
					, esto mostrara el vínculo de la reunión, y presionamos el icono de enviar para compartir el
					vínculo. Con esto ya habremos compartido la reunión con la persona que queríamos.
				</p>
				<img src="7.jpg" className="zoomTutorialImg" />
				<br />
				<img src="8.jpg" className="zoomTutorialImg" />
			</div>

			<div className="container">
				{/* Aqui va a ir la parte de likes y share a redes sociales - Work in progress */}
				{/* <i className=" far fa-heart mr-2 userProfileIcon" /> */}
				{/* vvv boton de share en Facebook pero todavia no se ve bien el boton, pero si funciona vvv */}
				{/* <div
					className="fb-share-button"
					data-href="https://developers.facebook.com/docs/plugins/"
					data-layout="button"
					data-size="large">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
						className="fb-xfbml-parse-ignore">
						Compartir
					</a>
				</div> */}
				<Link to="/">
					<button className="btn btn-primary mb-2">Volver al menú principal</button>
				</Link>
			</div>
		</>
	);
};

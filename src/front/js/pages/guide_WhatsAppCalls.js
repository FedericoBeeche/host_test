import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import WA_firstImg from "../../img/img_WhatsAppCalls/WA1.jpg";
import WA_secondImg from "../../img/img_WhatsAppCalls/WA2.png";
import WA_thirdImg from "../../img/img_WhatsAppCalls/WA3.jpg";
import "../../styles/home.scss";

export const WhatsAppCalls = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container mb-5">
				<div className="row justify-content-center">
					<h1>MI PRIMERA VIDEO LLAMDA</h1>
				</div>
				<div className="row justify-content-center">
					<h1>POR WHATSAPP</h1>
				</div>
				<div className="row justify-content-center">
					<h5>¿¡QUÉ!?¿¡SE HACEN VIDEOLLAMADAS EN WHATSAPP!?</h5>
				</div>
			</div>

			<div className="container mb-5">
				{/* video tutorial */}
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/86bJe6qZ6HY"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>

				<h3 className="h3GuidesStep">Paso 1</h3>
				<p>
					Primero necesitamos abrir la aplicación en nuestro celular, entonces tienen que buscar el icono de
					WhatsApp en su celular y presionar con su dedo sobre la aplicación para que se abra.
				</p>
				<img src="WA1.jpg" className="imgGuia WATutorialImg1" />

				<h3 className="h3GuidesStep">Paso 2</h3>
				<p>
					Una vez que abrimos la aplicación, vamos a poder ver los chats que tenemos abiertos, donde tendremos
					que seleccionar presionando con el dedo sobre la persona con la que se quiere realizar la video
					llamada.
				</p>
				<img src="WA2.png" className="imgGuia WATutorialImg" />

				<h3 className="h3GuidesStep">Paso 3</h3>
				<p>
					Cuando abrimos el chat correspondiente, tendrá que presionar con el dedo sobre el icono que parece
					un video cámara, y esta hará que la aplicación genere la video llamada.
				</p>
				<img src="WA3.jpg" className="imgGuia WATutorialImg" />

				<h3 className="h3GuidesStep">Paso 4</h3>
				<p>
					Una vez generada la llamada podremos agregar otra persona a la llamada, presionando con el dedo
					sobre el icono señalado en la imagen abajo, después de presionarlo la aplicación va solicitar que
					seleccione a la persona que quiere agregar a la llamada.
				</p>

				<div className="divisionGuiaYBotones mb-2 mt-3" />
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
					<button className="btn btn-dark mb-2">Volver al menú principal</button>
				</Link>
			</div>
		</>
	);
};

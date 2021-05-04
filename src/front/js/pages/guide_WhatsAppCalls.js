import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import WA_firstImg from "../../img/img_WhatsAppCalls/WA1.jpg";
import WA_secondImg from "../../img/img_WhatsAppCalls/WA2.png";
import WA_thirdImg from "../../img/img_WhatsAppCalls/WA3.jpg";
import "../../styles/home.scss";
import QRCode from "react-qr-code";

export const WhatsAppCalls = () => {
	const { store, actions } = useContext(Context);
	const URL = "https://3000-green-thrush-yduojqeb.ws-us03.gitpod.io/guide_WhatsAppCalls"; //reemplazar con el URL de la pagina

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="col-sm-7 col-12">
					<div className="row justify-content-center">
						<div className="title">
							<div className="">VIDEO LLAMADA POR</div>
							<div className="">WHATSAPP</div>
						</div>
						<div className="row justify-content-center ml-1 mr-1">
							<div className="subtitle mb-1">¿¡QUÉ!?¿¡SE HACEN VIDEOLLAMADAS EN WHATSAPP!?</div>
						</div>
						{/* <div className="row justify-content-center">
							<button
								onClick={() => {
									actions.addFavorite(store.tutorials[0].title, store.tutorials[0].link);
								}}>
								<i className="fa fa-heart" />
							</button>
						</div> */}
					</div>
					<div className="row justify-content-center ml-1 mr-1 py-4 guideFavBtn">
						<div className="d-flex align-items-center">
							<button
								className="darkModeBtn"
								onClick={() => {
									actions.addFavorite(store.tutorials[0].title, store.tutorials[0].link);
								}}>
								<span>Agregar a favoritos</span>
								<i className="far fa-heart ml-2" />
							</button>
						</div>
						<div>
							<div className="row justify-content-center">
								<QRCode className="ml-5" value={URL} size={75} level={"H"} includeMargin={true} />
							</div>
						</div>
					</div>
					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 1</h3>
						<p>
							Primero necesitamos abrir la aplicación en nuestro celular, entonces tienen que buscar el
							icono de WhatsApp en su celular y presionar con su dedo sobre la aplicación para que se
							abra.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Primero necesitamos abrir la aplicación en nuestro celular, entonces tienen que buscar el icono de WhatsApp en su celular y presionar con su dedo sobre la aplicación para que se abra.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark ml-2">
							Detener lectura
						</button>
						{/* la clase de esta img es la unica diferente porque es la unica con dimensiones diferentes al resto */}
						<div className="row justify-content-center">
							<img src="WA1.jpg" className="image imageIcon" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 2</h3>
						<p>
							Una vez que abrimos la aplicación, vamos a poder ver los chats que tenemos abiertos, donde
							tendremos que seleccionar presionando con el dedo sobre la persona con la que se quiere
							realizar la video llamada.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que abrimos la aplicación, vamos a poder ver los chats que tenemos abiertos, donde tendremos que seleccionar presionando con el dedo sobre la persona con la que se quiere realizar la video llamada.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="WA2.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 3</h3>
						<p>
							Cuando abrimos el chat correspondiente, tendrá que presionar con el dedo sobre el icono que
							parece una video cámara, y esta hará que la aplicación genere la video llamada.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Cuando abrimos el chat correspondiente, tendrá que presionar con el dedo sobre el icono que parece una video cámara, y esta hará que la aplicación genere la video llamada.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="WA3.jpg" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 4</h3>
						<p>
							Una vez generada la llamada podremos agregar otra persona a la llamada, presionando con el
							dedo sobre el icono señalado en la imagen abajo, después de presionarlo la aplicación va
							solicitar que seleccione a la persona que quiere agregar a la llamada.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez generada la llamada podremos agregar otra persona a la llamada, presionando con el dedo sobre el icono señalado en la imagen abajo, después de presionarlo la aplicación va solicitar que seleccione a la persona que quiere agregar a la llamada.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark ml-2">
							Detener lectura
						</button>
					</div>

					<div className="divisionGuiaYBotones" />

					<Link to="/">
						<button className="btn btn-dark mt-4 mb-4">Volver al menú principal</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

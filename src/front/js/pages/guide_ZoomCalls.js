import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import ZOOMfirstImg from "../../img/img_ZoomCalls/zoom1.png";
import ZOOMsecondImg from "../../img/img_ZoomCalls/zoom2.png";
import ZOOMthirdImg from "../../img/img_ZoomCalls/zoom3.png";
import ZOOMfourthImg from "../../img/img_ZoomCalls/zoom4.png";
import ZOOMfifthImg from "../../img/img_ZoomCalls/zoom5.png";
import ZOOMsixthImg from "../../img/img_ZoomCalls/zoom6.png";
import ZOOMseventhImg from "../../img/img_ZoomCalls/zoom7.jpg";
import ZOOMeighthImg from "../../img/img_ZoomCalls/zoom8.jpg";
import "../../styles/home.scss";

export const ZoomCalls = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container mb-2">
				<div className="row justify-content-center">
					<h1 className="Zoom_Toph1Guide">MI PRIMER</h1>
				</div>
				<div className="row justify-content-center">
					<h1 className="Zoom_Bottomh1Guide">LLAMADA EN ZOOM</h1>
				</div>
				<div className="row justify-content-center">
					<h5 className="Zoom_h5Guide">EN EL APP DE TU TELÉFONO</h5>
				</div>
			</div>

			<div className="container mb-2">
				<div className="row">
					<h3 className="h3GuidesStep">Paso 1</h3>
				</div>
				<div>
					<p>
						Para poder seguir los pasos de esta guía, necesita tener una cuenta de Zoom, si no tiene cuenta
						favor crear una en{" "}
						<a href="https://zoom.us/signin" target="_blank" rel="noopener noreferrer">
							<i>este enlace</i>.
						</a>
						Y luego regrese a esta guía. Si ya tiene cuenta favor seguir al paso{" "}
						<a href="#paso2">número 2</a>.
					</p>
					<button
						onClick={() =>
							responsiveVoice.speak(
								"Para poder seguir los pasos de esta guía, necesita tener una cuenta de Zoom, si no tiene cuenta favor crear una en este enlace. Y luego regrese a esta guía. Si ya tiene cuenta favor seguir al paso numero dos.",
								"Spanish Female"
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
				<h3 className="h3GuidesStep" id="paso2">
					Paso 2
				</h3>
				<div>
					<p>
						Abrimos la aplicación en nuestro celular, presionando con nuestro dedo sobre el icono de Zoom.
					</p>
					<button
						onClick={() =>
							responsiveVoice.speak(
								"Abrimos la aplicación en nuestro celular, presionando con nuestro dedo sobre el icono de Zoom.",
								"Spanish Female"
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
				<div className="row col-12 justify-content-center">
					{/* esta clase es la unica diferente porque tiene tamano diferente al resto */}
					<img src="zoom1.png" className="imgGuia zoomTutorialImg1" />
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 3</h3>
				</div>
				<div className="row">
					<p>
						Cuando termine de abrir la aplicación vamos a poder ver la pantalla inicio de Zoom, donde
						podremos ver las diferentes opciones disponibles de la app, para crear la video llamada necesita
						presionar con su dedo{" "}
						<strong>
							<i>“Nueva reunión”</i>
						</strong>
						.
					</p>
					<button
						onClick={() =>
							responsiveVoice.speak(
								"Cuando termine de abrir la aplicación vamos a poder ver la pantalla inicio de Zoom, donde podremos ver las diferentes opciones disponibles de la app, para crear la video llamada necesita presionar con su dedo nueva reunión",
								"Spanish Female"
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
				<div className="row col-12 justify-content-center">
					<img src="zoom2.png" className="imgGuia zoomTutorialImg" />
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 4</h3>
				</div>
				<div className="row">
					<p>
						La siguiente pantalla, presione el botón{" "}
						<strong>
							<i>“Iniciar una reunión”</i>
						</strong>
						.
					</p>
					<button
						onClick={() =>
							responsiveVoice.speak(
								"La siguiente pantalla, presione el botón iniciar una reunión”",
								"Spanish Female"
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
				<div className="row col-12 justify-content-center">
					<img src="zoom3.png" className="imgGuia zoomTutorialImg4" />
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 5</h3>
				</div>
				<div className="row">
					<p>
						Cuando inicie la video llamada, nos va mostrar un panel donde podremos activar o desactivar
						presionando sobre el icono audio y video, para invitar a personas a la reunión, tendremos que
						presionar sobre{" "}
						<strong>
							<i>“Participantes”</i>
						</strong>
						.
					</p>
					<button
						onClick={() =>
							responsiveVoice.speak(
								"Cuando inicie la video llamada, nos va mostrar un panel donde podremos activar o desactivar presionando sobre el icono audio y video, para invitar a personas a la reunión, tendremos que presionar sobre",
								"Spanish Female"
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
				<div className="row col-12 justify-content-center">
					<img src="zoom4.png" className="imgGuia zoomTutorialImg" />
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 6</h3>
				</div>
				<div className="row">
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
					<button
						onClick={() =>
							responsiveVoice.speak(
								"En la ventanilla de participantes, vamos a presionar sobre la opción invitar, nos mostrara las opciones para compartir la invitación, en este ejemplo vamos a utilizar copiar vinculo”",
								"Spanish Female"
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
				<div className="row col-12 justify-content-center">
					<img src="zoom5.png" className="imgGuia zoomTutorialImg mb-2" />
				</div>
				<br />
				<div className="row col-12 justify-content-center">
					<img src="zoom6.png" className="imgGuia zoomTutorialImg" />
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 7</h3>
				</div>
				<div className="row">
					<p>
						Esta opción nos permite compartir en link o url de acceso en cualquier aplicación, para este
						ejemplo utilizaremos{" "}
						<i>
							<strong>WhatsApp</strong>
						</i>
						, al ingresar en un chat, mantenemos presionado nuestro dedo sobre la sección donde se escribe
						el mensaje, y elegimos la opción de{" "}
						<i>
							<strong>“Pegar”</strong>
						</i>
						, esto mostrara el vínculo de la reunión, y presionamos el icono de enviar para compartir el
						vínculo. Con esto ya habremos compartido la reunión con la persona que queríamos.
					</p>
					<button
						onClick={() =>
							responsiveVoice.speak(
								"Esta opción nos permite compartir en link o url de acceso en cualquier aplicación, para este ejemplo utilizaremos WhatsApp, al ingresar en un chat, mantenemos presionado nuestro dedo sobre la sección donde se escribe el mensaje, y elegimos la opción de pegar, esto mostrara el vínculo de la reunión, y presionamos el icono de enviar para compartir el vínculo. Con esto ya habremos compartido la reunión con la persona que queríamos.",
								"Spanish Female"
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
				<div className="row col-12 justify-content-center">
					<img src="zoom7.jpg" className="imgGuia zoomTutorialImg mb-2" />
				</div>
				<br />
				<div className="row col-12 justify-content-center">
					<img src="zoom8.jpg" className="imgGuia zoomTutorialImg" />
				</div>
				<div className="divisionGuiaYBotones mb-2 mt-3" />
			</div>

			<div className="container">
				<Link to="/">
					<button className="btn btn-dark mb-2">Volver al menú principal</button>
				</Link>
			</div>
		</>
	);
};

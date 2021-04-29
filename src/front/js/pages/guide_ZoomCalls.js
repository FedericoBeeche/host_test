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
				{/* video tutorial */}
				<div className="row justify-content-center">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/l6Ee84FPT68"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 1</h3>
				</div>
				<div>
					<p>
						Para poder seguir los pasos de esta guía, necesita tener una cuenta de Zoom, si no tiene cuenta
						favor crear una en{" "}
						<a href="https://zoom.us/signin" target="_blank" rel="noopener noreferrer">
							<i>este enlace</i>
						</a>
						Y luego regrese a esta guía. Si ya tiene cuenta favor seguir al paso{" "}
						<a href="#paso2">número 2</a>.
					</p>
				</div>
				<h3 className="h3GuidesStep" id="paso2">
					Paso 2
				</h3>
				<div>
					<p>
						Abrimos la aplicación en nuestro celular, presionando con nuestro dedo sobre el icono de Zoom.
					</p>
				</div>
				<div className="row col-12 justify-content-center">
					{/* esta clase es la unica diferente porque tiene tamano diferente al resto */}
					<img src="zoom1.png" className="imgGuia zoomTutorialImg1" />
				</div>
				<h3 className="h3GuidesStep">Paso 3</h3>
				<p>
					Cuando termine de abrir la aplicación vamos a poder ver la pantalla inicio de Zoom, donde podremos
					ver las diferentes opciones disponibles de la app, para crear la video llamada necesita presionar
					con su dedo{" "}
					<strong>
						<i>“Nueva reunión”</i>
					</strong>
					.
				</p>
				<img src="zoom2.png" className="imgGuia zoomTutorialImg" />

				<h3 className="h3GuidesStep">Paso 4</h3>
				<p>
					La siguiente pantalla, presione el botón{" "}
					<strong>
						<i>“Iniciar una reunión”</i>
					</strong>
					.
				</p>
				<img src="zoom3.png" className="imgGuia zoomTutorialImg4" />

				<h3 className="h3GuidesStep">Paso 5</h3>
				<p>
					Cuando inicie la video llamada, nos va mostrar un panel donde podremos activar o desactivar
					presionando sobre el icono audio y video, para invitar a personas a la reunión, tendremos que
					presionar sobre{" "}
					<strong>
						<i>“Participantes”</i>
					</strong>
					.
				</p>
				<img src="zoom4.png" className="imgGuia zoomTutorialImg" />

				<h3 className="h3GuidesStep">Paso 6</h3>
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
				<img src="zoom5.png" className="imgGuia zoomTutorialImg mb-2" />
				<br />
				<img src="zoom6.png" className="imgGuia zoomTutorialImg" />

				<h3 className="h3GuidesStep">Paso 7</h3>
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
				<img src="zoom7.jpg" className="imgGuia zoomTutorialImg mb-2" />
				<br />
				<img src="zoom8.jpg" className="imgGuia zoomTutorialImg" />
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

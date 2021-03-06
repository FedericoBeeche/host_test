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
import QRCode from "react-qr-code";
import { WhatsappShareButton, WhatsappIcon } from "react-share"; // $ npm install react-share --save
import { FacebookShareButton, FacebookIcon } from "react-share"; // $ npm install react-share --save
import { Scroll } from "../component/scroll";
import { BackToHome } from "../component/backToHome";

export const ZoomCalls = () => {
	const { store, actions } = useContext(Context);
	const URL = `${store.frontend_url}guide_ZoomCalls`;

	let favoriteTitleArray = store.favorites.map(obj => obj.tutorial_title); // turn favorites object into name array because includes method only works with arrays
	let isFavorite = favoriteTitleArray.includes("Mi primer videollamada en Zoom (para celular)"); // store.tutorials[1].title does not work

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="col-sm-7 col-12">
					<Scroll showBelow={180} />
					<div className="d-none d-sm-block">
						<BackToHome showBelow={180} />
					</div>
					<div className="row justify-content-center mb-4">
						<div className="title">
							<div className="">MI PRIMER LLAMADA EN</div>
							<div className="">ZOOM</div>
						</div>
						<div className="row justify-content-center ml-1 mr-1">
							<div className="subtitle mb-1">EN EL APP DE TU TEL??FONO</div>
						</div>
						{/* <div className="row justify-content-center">
							<button
								onClick={() => {
									actions.addFavorite(store.tutorials[2].title, store.tutorials[2].link);
								}}>
								<i className="fa fa-heart" />
							</button>
						</div> */}
					</div>
					<div className="d-flex justify-content-between py-3 guideFavBtn">
						<div className="">
							<button
								className="darkModeBtn buttonhover"
								onClick={() => {
									//actions.addFavorite(store.tutorials[2].title, store.tutorials[2].link);
									store.token
										? actions.addFavorite(store.tutorials[2].title, store.tutorials[2].link)
										: actions.alertLoginToFavorite();
								}}>
								<span>{isFavorite ? "Es Favorito" : "??Favorito?"}</span>
								<i className={isFavorite ? "fas fa-heart ml-2" : "far fa-heart ml-2"} />
							</button>
						</div>
						<div className="row mx-0">
							<div className="sharetext align-self-center">Compartir:</div>
							<div className="mx-sm-3 mx-2 buttonhover">
								<WhatsappShareButton title="Guia para videollamadas por Zoom" url={URL}>
									<WhatsappIcon size={30} round={true} />
								</WhatsappShareButton>
							</div>
							<div className="buttonhover">
								<FacebookShareButton quote="Guia para videollamadas por Zoom" url={URL}>
									<FacebookIcon size={30} round={true} />
								</FacebookShareButton>
							</div>
						</div>
					</div>

					{/*Cada paso debe estar encerrado en un div*/}

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 1</h3>
						<p>
							Para poder seguir los pasos de esta gu??a, necesita tener una cuenta de Zoom, si no tiene
							cuenta favor crear una en{" "}
							<a href="https://zoom.us/signin" target="_blank" rel="noopener noreferrer">
								<i>este enlace</i>.
							</a>{" "}
							Y luego regrese a esta gu??a. Si ya tiene cuenta favor seguir al paso n??mero 2.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Para poder seguir los pasos de esta gu??a, necesita tener una cuenta de Zoom, si no tiene cuenta favor crear una en este enlace. Y luego regrese a esta gu??a. Si ya tiene cuenta favor seguir al paso numero dos.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 2</h3>
						<p>
							Abrimos la aplicaci??n en nuestro celular, presionando con nuestro dedo sobre el icono de
							Zoom.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Abrimos la aplicaci??n en nuestro celular, presionando con nuestro dedo sobre el icono de Zoom.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
						{/* la clase de esta img es la unica diferente porque es la unica con dimensiones diferentes al resto */}
						<div className="row justify-content-center">
							<img src="zoom1.png" className="image zoomTutorialImg1" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 3</h3>
						<p>
							Cuando termine de abrir la aplicaci??n vamos a poder ver la pantalla inicio de Zoom, donde
							podremos ver las diferentes opciones disponibles de la app, para crear la video llamada
							necesita presionar con su dedo{" "}
							<strong>
								<i>???Nueva reuni??n???</i>
							</strong>
							.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Cuando termine de abrir la aplicaci??n vamos a poder ver la pantalla inicio de Zoom, donde podremos ver las diferentes opciones disponibles de la app, para crear la video llamada necesita presionar con su dedo nueva reuni??n",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="zoom2.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 4</h3>
						<p>
							La siguiente pantalla, presione el bot??n{" "}
							<strong>
								<i>???Iniciar una reuni??n???</i>
							</strong>
							.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"La siguiente pantalla, presione el bot??n iniciar una reuni??n???",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="zoom3.png" className="image zoomTutorialImg4" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 5</h3>
						<p>
							Cuando inicie la video llamada, nos va mostrar un panel donde podremos activar o desactivar
							presionando sobre el icono audio y video, para invitar a personas a la reuni??n, tendremos
							que presionar sobre{" "}
							<strong>
								<i>???Participantes???</i>
							</strong>
							.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Cuando inicie la video llamada, nos va mostrar un panel donde podremos activar o desactivar presionando sobre el icono audio y video, para invitar a personas a la reuni??n, tendremos que presionar sobre",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="zoom4.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 6</h3>
						<p>
							En la ventanilla de{" "}
							<strong>
								<i>???Participantes???</i>
							</strong>
							, vamos a presionar sobre la opci??n{" "}
							<strong>
								<i>???Invitar???</i>
							</strong>
							, nos mostrara las opciones para compartir la invitaci??n, en este ejemplo vamos a utilizar{" "}
							<strong>
								<i>???Copiar vinculo???</i>
							</strong>
							.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"En la ventanilla de participantes, vamos a presionar sobre la opci??n invitar, nos mostrara las opciones para compartir la invitaci??n, en este ejemplo vamos a utilizar copiar vinculo???",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="zoom5.png" className="image" />
							<img src="zoom6.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 7</h3>
						<p>
							Esta opci??n nos permite compartir en link o url de acceso en cualquier aplicaci??n, para este
							ejemplo utilizaremos{" "}
							<i>
								<strong>WhatsApp</strong>
							</i>
							, al ingresar en un chat, mantenemos presionado nuestro dedo sobre la secci??n donde se
							escribe el mensaje, y elegimos la opci??n de{" "}
							<i>
								<strong>???Pegar???</strong>
							</i>
							, esto mostrara el v??nculo de la reuni??n, y presionamos el icono de enviar para compartir el
							v??nculo. Con esto ya habremos compartido la reuni??n con la persona que quer??amos.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Esta opci??n nos permite compartir en link o url de acceso en cualquier aplicaci??n, para este ejemplo utilizaremos WhatsApp, al ingresar en un chat, mantenemos presionado nuestro dedo sobre la secci??n donde se escribe el mensaje, y elegimos la opci??n de pegar, esto mostrara el v??nculo de la reuni??n, y presionamos el icono de enviar para compartir el v??nculo. Con esto ya habremos compartido la reuni??n con la persona que quer??amos.",
									"Spanish Latin American Female"
								)
							}
							type="button"
							value="Play"
							className="btn btn-dark buttonhover">
							Leer
						</button>
						<button
							onClick={() => responsiveVoice.cancel()}
							type="button"
							value="Detener"
							className="btn btn-dark buttonhover ml-2">
							Detener lectura
						</button>
						<div className="row justify-content-center">
							<img src="zoom7.jpg" className="image" />
							<img src="zoom8.jpg" className="image" />
						</div>
					</div>

					<div className="divisionGuiaYBotones" />

					<div className="row justify-content-center m-4">
						<div classNme="text-dark">Tambi??n puedes compartir el C??digo QR de esta gu??a:</div>
					</div>
					<div className="row justify-content-center m-4">
						<QRCode className="" value={URL} size={150} level={"H"} includeMargin={true} />
					</div>

					<Link to="/">
						<button className="mx-auto btn btn-dark m-4 d-block d-sm-none">Volver al men?? principal</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

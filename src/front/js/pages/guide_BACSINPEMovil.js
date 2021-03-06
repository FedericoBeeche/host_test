import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import BACfirstImg from "../../img/img_BACSINPEMovil/BAC1..jpg";
import BACsecondImg from "../../img/img_BACSINPEMovil/BAC2.jpg";
import BACthirdImg from "../../img/img_BACSINPEMovil/BAC3.png";
import BACfourthImg from "../../img/img_BACSINPEMovil/BAC4.png";
import BACfifthImg from "../../img/img_BACSINPEMovil/BAC5.png";
import BACsixthImg from "../../img/img_BACSINPEMovil/BAC6.png";
import BACseventhImg from "../../img/img_BACSINPEMovil/BAC7.png";
import BACeigthImg from "../../img/img_BACSINPEMovil/BAC8.png";
import BACninthImg from "../../img/img_BACSINPEMovil/BAC9.png";
import BACtenthImg from "../../img/img_BACSINPEMovil/BAC10.png";
import BACeleventhImg from "../../img/img_BACSINPEMovil/BAC11.png";
import BACStwelfthImg from "../../img/img_BACSINPEMovil/BAC12.png";
import "../../styles/home.scss";
import QRCode from "react-qr-code";
import { WhatsappShareButton, WhatsappIcon } from "react-share"; // $ npm install react-share --save
import { FacebookShareButton, FacebookIcon } from "react-share"; // $ npm install react-share --save
import { Scroll } from "../component/scroll";
import { BackToHome } from "../component/backToHome";

export const BAC_SINPE = () => {
	const { store, actions } = useContext(Context);
	const URL = `${store.frontend_url}guide_BACSINPEMovil`;

	let favoriteTitleArray = store.favorites.map(obj => obj.tutorial_title); // turn favorites object into name array because includes method only works with arrays
	let isFavorite = favoriteTitleArray.includes("Transferencias SINPE BAC"); // store.tutorials[1].title does not work

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
							<div className="">MI PRIMER TRANSFERENCIA</div>
							<div className="">SINPE M??VIL</div>
						</div>
						<div className="row justify-content-center ml-1 mr-1">
							<div className="subtitle mb-2">EN BANCA M??VIL DEL BAC</div>
						</div>
					</div>
					<div className="d-flex justify-content-between py-3 guideFavBtn">
						<div className="">
							<button
								className="darkModeBtn buttonhover"
								onClick={() => {
									//actions.addFavorite(store.tutorials[1].title, store.tutorials[1].link);
									store.token
										? actions.addFavorite(store.tutorials[1].title, store.tutorials[1].link)
										: actions.alertLoginToFavorite();
								}}>
								<span>{isFavorite ? "Es Favorito" : "??Favorito?"}</span>
								<i className={isFavorite ? "fas fa-heart ml-2" : "far fa-heart ml-2"} />
							</button>
						</div>
						<div className="row mx-0">
							<div className="sharetext align-self-center">Compartir:</div>
							<div className="mx-sm-3 mx-2 buttonhover">
								<WhatsappShareButton title="Guia para transferencias SinpeM??vil en el BAC" url={URL}>
									<WhatsappIcon size={30} round={true} />
								</WhatsappShareButton>
							</div>
							<div className="buttonhover">
								<FacebookShareButton quote="Guia para transferencias SinpeM??vil en el BAC" url={URL}>
									<FacebookIcon size={30} round={true} />
								</FacebookShareButton>
							</div>
						</div>
					</div>

					{/*Cada paso debe estar encerrado en un div*/}

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 1</h3>
						<p>
							Primero, buscaremos la aplicaci??n de Banca M??vil en nuestro tel??fono y abriremos la
							aplicaci??n presionando con nuestro dedo encima de la aplicaci??n
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Primero, buscaremos la aplicaci??n de Banca M??vil en nuestro tel??fono y abriremos la aplicaci??n presionando con nuestro dedo encima de la aplicaci??n",
									"Spanish Female"
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
							<img src="BAC1..jpg" className="image imageIcon" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 2</h3>
						<p>
							Una vez que abre la aplicaci??n, la misma nos va solicitar un usuario y contrase??a, esta
							informaci??n debi?? haber sido brindada por el asesor del BAC. Si no tiene esta informaci??n
							tendr?? que ir personalmente a una sucursal y solicitarla.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que abre la aplicaci??n, la misma nos va solicitar un usuario y contrase??a, esta informaci??n debi?? haber sido brindada por el asesor del BAC. Si no tiene esta informaci??n tendr?? que ir personalmente a una sucursal y solicitarla.",
									"Spanish Female"
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
							<img src="BAC2.jpg" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 3</h3>
						<p>
							Despu??s de agregar la informaci??n de usuario y contrase??a, se presiona con el dedo el bot??n
							de ingresar.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Despu??s de agregar la informaci??n de usuario y contrase??a, se presiona con el dedo el bot??n de ingresar.",
									"Spanish Female"
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
							<img src="BAC3.png" className="image" />
						</div>
					</div>

					<div className="mt-54 mb-5">
						<h3 className="h3GuidesStep">Paso 4</h3>
						<p>
							Despu??s de presionar el bot??n de ingresar, la aplicaci??n nos va dirigir al inicio, en donde
							mostraran las cuentas, tarjetas y prestamos que est??n a registradas a su nombre.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Despu??s de presionar el bot??n de ingresar, la aplicaci??n nos va dirigir al inicio, en donde mostraran las cuentas, tarjetas y prestamos que est??n a registradas a su nombre.",
									"Spanish Female"
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
							<img src="BAC4.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 5</h3>
						<p>
							Luego, seleccione con el dedo en el men?? inferior la opci??n de <i>???Transferencias???</i>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Luego, seleccione con el dedo en el men?? inferior la opci??n de transferencias.",
									"Spanish Female"
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
							<img src="BAC5.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 6</h3>
						<p>
							La aplicaci??n nos redirigir?? a la secci??n de transferencias, donde se muestran las
							diferentes opciones que tiene el banco para realizar una transferencia. En este ejemplo
							vamos a seleccionar <i>???A SINPE M??vil???</i>, presione con su dedo sobre la opci??n{" "}
							<strong>A SINPE M??vil</strong>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"La aplicaci??n nos redirigir?? a la secci??n de transferencias, donde se muestran las diferentes opciones que tiene el banco para realizar una transferencia. En este ejemplo vamos a seleccionar a sinpe M??vil presione con su dedo sobre la opci??n a sinpe M??vil",
									"Spanish Female"
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
							<img src="BAC6.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 7</h3>
						<p>
							Luego, la aplicaci??n nos va a mostrar las cuentas que se pueden utilizar para la
							transferencia, y se tendr?? que seleccionar la que se quiere usar para la transferencia,
							presione con su dedo sobre la cuenta que quiere utilizar.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Luego, la aplicaci??n nos va a mostrar las cuentas que se pueden utilizar para la transferencia, y se tendr?? que seleccionar la que se quiere usar para la transferencia, presione con su dedo sobre la cuenta que quiere utilizar.",
									"Spanish Female"
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
							<img src="BAC7.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 8</h3>
						<p>
							Una vez que seleccionamos la cuenta, la aplicaci??n nos va mostrar el siguiente paso, el cual
							es digitar el n??mero de celular de la persona o instituci??n a la que vamos a enviar la
							Transferencia SINPE M??vil. Presionamos sobre el espacio donde dice <i>???Digite el numero???</i>
							, e ingresamos el numero correspondiente. Tambi??n se puede guardar el numero en favoritos
							solo presionando en el cuadrado a la par de <i>???Guardar como favorito???</i>, esto para evitar
							que cuando se vaya a hacer la transferencia el sistema le pida el c??digo BAC o Token, esto
							es Opcional.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que seleccionamos la cuenta, la aplicaci??n nos va mostrar el siguiente paso, el cual es digitar el n??mero de celular de la persona o instituci??n a la que vamos a enviar la Transferencia sinpe M??vil. Presionamos sobre el espacio donde dice Digite el numero, e ingresamos el numero correspondiente. Tambi??n se puede guardar el numero en favoritos solo presionando en el cuadrado a la par de ???Guardar como favorito, esto para evitar que, cuando se vaya a hacer la transferencia el sistema le pida el c??digo BAC o Token, esto es opcional.",
									"Spanish Female"
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
							<img src="BAC8.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 9</h3>
						<p>
							Una vez la informaci??n es ingresada, podremos ver el nombre de la persona o instituci??n a la
							que se le va a enviar el dinero, por medio de esto podemos confirmar si se le esta enviando
							a la persona o instituci??n correcta. Una vez confirmada la informaci??n, presionamos el bot??n
							de <i>???Continuar???</i> para ir al siguiente paso.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez la informaci??n es ingresada, podremos ver el nombre de la persona o instituci??n a la que se le va a enviar el dinero, por medio de esto podemos confirmar si se le esta enviando a la persona o instituci??n correcta. Una vez confirmada la informaci??n, presionamos el bot??n de continuar para ir al siguiente paso.",
									"Spanish Female"
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
							<img src="BAC9.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 10</h3>
						<p>
							Despu??s de presionar <i>???Continuar???</i>, la aplicaci??n nos va solicitar el <i>???Monto???</i>{" "}
							que vamos a enviar y la
							<i>???Descripci??n???</i> (es opcional) donde escribimos la raz??n de la transferencia, una vez
							seleccionado todo, presionamos <i>???Continuar???</i>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Despu??s de presionar continuar, la aplicaci??n nos va solicitar el monto que vamos a enviar y la descripci??n, la cual es opcional, donde escribimos la raz??n de la transferencia, una vez seleccionado todo, presionamos continuar.",
									"Spanish Female"
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
							<img src="BAC10.png" className="image" />
						</div>
						<p>
							<strong>IMPORTANTE:</strong>{" "}
							<i>
								Recuerde que el monto a transferir debe ser indicado en la moneda de la cuenta destino.
							</i>
						</p>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 11</h3>
						<p>
							Luego veremos el resumen de la transferencia, y el sistema solicitando el c??digo BAC o Token
							(App del celular) para completar la transferencia. Ingresamos el token, presionamos{" "}
							<i>???Transferir???</i>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Luego veremos el resumen de la transferencia, y el sistema solicitando el c??digo BAC o Token, app del celular, para completar la transferencia. Ingresamos el token, presionamos transferir.",
									"Spanish Female"
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
							<img src="BAC11.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 12</h3>
						<p>
							Una vez que presionamos transferir el sistema realizara la transferencia, y luego nos
							mostrara el resumen con el comprobante de la transferencia. Y lo logramos nuestra primera
							transferencia con SINPE M??vil.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que presionamos transferir el sistema realizara la transferencia, y luego nos mostrara el resumen con el comprobante de la transferencia. Y lo logramos nuestra primera transferencia con sinpe m??vil.",
									"Spanish Female"
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
							<img src="BAC12.png" className="image" />
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

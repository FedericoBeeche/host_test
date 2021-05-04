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

export const BAC_SINPE = () => {
	const { store, actions } = useContext(Context);
	const URL = store.frontend_url;

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="col-sm-7 col-12">
					<div className="row justify-content-center">
						<div className="title">
							<div className="">MI PRIMER TRANSFERENCIA</div>
							<div className="">SINPE MÓVIL</div>
						</div>
						<div className="row justify-content-center ml-1 mr-1">
							<div className="subtitle mb-2">EN BANCA MÓVIL DEL BAC</div>
						</div>
					</div>
					<div className="row justify-content-center ml-1 mr-1 py-2 guideFavBtn">
						<div className="d-flex align-items-center">
							<button
								className="darkModeBtn"
								onClick={() => {
									// actions.addFavorite(store.tutorials[0].title, store.tutorials[0].link);
									store.token
										? actions.addFavorite(store.tutorials[1].title, store.tutorials[1].link)
										: actions.alertLoginToFavorite();
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

					{/*Cada paso debe estar encerrado en un div*/}

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 1</h3>
						<p>
							Primero, buscaremos la aplicación de Banca Móvil en nuestro teléfono y abriremos la
							aplicación presionando con nuestro dedo encima de la aplicación
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Primero, buscaremos la aplicación de Banca Móvil en nuestro teléfono y abriremos la aplicación presionando con nuestro dedo encima de la aplicación",
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
						{/* la clase de esta img es la unica diferente porque es la unica con dimensiones diferentes al resto */}
						<div className="row justify-content-center">
							<img src="BAC1..jpg" className="image imageIcon" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 2</h3>
						<p>
							Una vez que abre la aplicación, la misma nos va solicitar un usuario y contraseña, esta
							información debió haber sido brindada por el asesor del BAC. Si no tiene esta información
							tendrá que ir personalmente a una sucursal y solicitarla.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que abre la aplicación, la misma nos va solicitar un usuario y contraseña, esta información debió haber sido brindada por el asesor del BAC. Si no tiene esta información tendrá que ir personalmente a una sucursal y solicitarla.",
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
						<div className="row justify-content-center">
							<img src="BAC2.jpg" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 3</h3>
						<p>
							Después de agregar la información de usuario y contraseña, se presiona con el dedo el botón
							de ingresar.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Después de agregar la información de usuario y contraseña, se presiona con el dedo el botón de ingresar.",
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
						<div className="row justify-content-center">
							<img src="BAC3.png" className="image" />
						</div>
					</div>

					<div className="mt-54 mb-5">
						<h3 className="h3GuidesStep">Paso 4</h3>
						<p>
							Después de presionar el botón de ingresar, la aplicación nos va dirigir al inicio, en donde
							mostraran las cuentas, tarjetas y prestamos que estén a registradas a su nombre.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Después de presionar el botón de ingresar, la aplicación nos va dirigir al inicio, en donde mostraran las cuentas, tarjetas y prestamos que estén a registradas a su nombre.",
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
						<div className="row justify-content-center">
							<img src="BAC4.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 5</h3>
						<p>
							Luego, seleccione con el dedo en el menú inferior la opción de <i>“Transferencias”</i>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Luego, seleccione con el dedo en el menú inferior la opción de transferencias.",
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
						<div className="row justify-content-center">
							<img src="BAC5.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 6</h3>
						<p>
							La aplicación nos redirigirá a la sección de transferencias, donde se muestran las
							diferentes opciones que tiene el banco para realizar una transferencia. En este ejemplo
							vamos a seleccionar <i>“A SINPE Móvil”</i>, presione con su dedo sobre la opción{" "}
							<strong>A SINPE Móvil</strong>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"La aplicación nos redirigirá a la sección de transferencias, donde se muestran las diferentes opciones que tiene el banco para realizar una transferencia. En este ejemplo vamos a seleccionar a sinpe Móvil presione con su dedo sobre la opción a sinpe Móvil",
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
						<div className="row justify-content-center">
							<img src="BAC6.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 7</h3>
						<p>
							Luego, la aplicación nos va a mostrar las cuentas que se pueden utilizar para la
							transferencia, y se tendrá que seleccionar la que se quiere usar para la transferencia,
							presione con su dedo sobre la cuenta que quiere utilizar.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Luego, la aplicación nos va a mostrar las cuentas que se pueden utilizar para la transferencia, y se tendrá que seleccionar la que se quiere usar para la transferencia, presione con su dedo sobre la cuenta que quiere utilizar.",
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
						<div className="row justify-content-center">
							<img src="BAC7.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 8</h3>
						<p>
							Una vez que seleccionamos la cuenta, la aplicación nos va mostrar el siguiente paso, el cual
							es digitar el número de celular de la persona o institución a la que vamos a enviar la
							Transferencia SINPE Móvil. Presionamos sobre el espacio donde dice <i>“Digite el numero”</i>
							, e ingresamos el numero correspondiente. También se puede guardar el numero en favoritos
							solo presionando en el cuadrado a la par de <i>“Guardar como favorito”</i>, esto para evitar
							que cuando se vaya a hacer la transferencia el sistema le pida el código BAC o Token, esto
							es Opcional.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que seleccionamos la cuenta, la aplicación nos va mostrar el siguiente paso, el cual es digitar el número de celular de la persona o institución a la que vamos a enviar la Transferencia sinpe Móvil. Presionamos sobre el espacio donde dice Digite el numero, e ingresamos el numero correspondiente. También se puede guardar el numero en favoritos solo presionando en el cuadrado a la par de “Guardar como favorito, esto para evitar que, cuando se vaya a hacer la transferencia el sistema le pida el código BAC o Token, esto es opcional.",
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
						<div className="row justify-content-center">
							<img src="BAC8.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 9</h3>
						<p>
							Una vez la información es ingresada, podremos ver el nombre de la persona o institución a la
							que se le va a enviar el dinero, por medio de esto podemos confirmar si se le esta enviando
							a la persona o institución correcta. Una vez confirmada la información, presionamos el botón
							de <i>“Continuar”</i> para ir al siguiente paso.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez la información es ingresada, podremos ver el nombre de la persona o institución a la que se le va a enviar el dinero, por medio de esto podemos confirmar si se le esta enviando a la persona o institución correcta. Una vez confirmada la información, presionamos el botón de continuar para ir al siguiente paso.",
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
						<div className="row justify-content-center">
							<img src="BAC9.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 10</h3>
						<p>
							Después de presionar <i>“Continuar”</i>, la aplicación nos va solicitar el <i>“Monto”</i>{" "}
							que vamos a enviar y la
							<i>“Descripción”</i> (es opcional) donde escribimos la razón de la transferencia, una vez
							seleccionado todo, presionamos <i>“Continuar”</i>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Después de presionar continuar, la aplicación nos va solicitar el monto que vamos a enviar y la descripción, la cual es opcional, donde escribimos la razón de la transferencia, una vez seleccionado todo, presionamos continuar.",
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
							Luego veremos el resumen de la transferencia, y el sistema solicitando el código BAC o Token
							(App del celular) para completar la transferencia. Ingresamos el token, presionamos{" "}
							<i>“Transferir”</i>.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Luego veremos el resumen de la transferencia, y el sistema solicitando el código BAC o Token, app del celular, para completar la transferencia. Ingresamos el token, presionamos transferir.",
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
						<div className="row justify-content-center">
							<img src="BAC11.png" className="image" />
						</div>
					</div>

					<div className="mt-5 mb-5">
						<h3 className="h3GuidesStep">Paso 12</h3>
						<p>
							Una vez que presionamos transferir el sistema realizara la transferencia, y luego nos
							mostrara el resumen con el comprobante de la transferencia. Y lo logramos nuestra primera
							transferencia con SINPE Móvil.
						</p>
						<button
							onClick={() =>
								responsiveVoice.speak(
									"Una vez que presionamos transferir el sistema realizara la transferencia, y luego nos mostrara el resumen con el comprobante de la transferencia. Y lo logramos nuestra primera transferencia con sinpe móvil.",
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
						<div className="row justify-content-center">
							<img src="BAC12.png" className="image" />
						</div>
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

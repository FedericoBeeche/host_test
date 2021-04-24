import React, { useContext } from "react";
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

export const BAC_SINPE = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container mb-2">
				<h1>MI PRIMERA TRANSFERENCIA</h1>
				<h1>SINPE MÓVIL</h1>
				<h5>EN BANCA MÓVIL DEL BAC</h5>

				{/* video tutorial */}
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/IDNkk-jHe7c"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>

				<h3>Paso 1</h3>
				<p>
					Primero, buscaremos la aplicación de Banca Móvil en nuestro teléfono y abriremos la aplicación
					presionando con nuestro dedo encima de la aplicación
				</p>
				{/* la clase de esta img es la unica diferente porque es la unica con dimensiones diferentes al resto */}
				<img src="BAC1..jpg" className="imgGuia bacTutorialImg1" />
				<h3>Paso 2</h3>
				<p>
					Una vez que abre la aplicación, la misma nos va solicitar un usuario y contraseña, esta información
					debió haber sido brindada por el asesor del BAC. Si no tiene esta información tendrá que ir
					personalmente a una sucursal y solicitarla.
				</p>
				<img src="BAC2.jpg" className="imgGuia bacTutorialImg" />
				<h3>Paso 3</h3>
				<p>
					Después de agregar la información de usuario y contraseña, se presiona con el dedo el botón de
					ingresar.
				</p>
				<img src="BAC3.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 4</h3>
				<p>
					Después de presionar el botón de ingresar, la aplicación nos va dirigir al inicio, en donde
					mostraran las cuentas, tarjetas y prestamos que estén a registradas a su nombre.
				</p>
				<img src="BAC4.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 5</h3>
				<p>
					Luego, seleccione con el dedo en el menú inferior la opción de <i>“Transferencias”</i>.
				</p>
				<img src="BAC5.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 6</h3>
				<p>
					La aplicación nos redirigirá a la sección de transferencias, donde se muestran las diferentes
					opciones que tiene el banco para realizar una transferencia. En este ejemplo vamos a seleccionar{" "}
					<i>“A SINPE Móvil”</i>, presione con su dedo sobre la opción <strong>A SINPE Móvil</strong>.
				</p>
				<img src="BAC6.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 7</h3>
				<p>
					Luego, la aplicación nos va a mostrar las cuentas que se pueden utilizar para la transferencia, y se
					tendrá que seleccionar la que se quiere usar para la transferencia, presione con su dedo sobre la
					cuenta que quiere utilizar.
				</p>
				<img src="BAC7.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 8</h3>
				<p>
					Una vez que seleccionamos la cuenta, la aplicación nos va mostrar el siguiente paso, el cual es
					digitar el número de celular de la persona o institución a la que vamos a enviar la Transferencia
					SINPE Móvil. Presionamos sobre el espacio donde dice <i>“Digite el numero”</i>, e ingresamos el
					numero correspondiente. También se puede guardar el numero en favoritos solo presionando en el
					cuadrado a la par de <i>“Guardar como favorito”</i>, esto para evitar que cuando se vaya a hacer la
					transferencia el sistema le pida el código BAC o Token, esto es Opcional.
				</p>
				<img src="BAC8.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 9</h3>
				<p>
					Una vez la información es ingresada, podremos ver el nombre de la persona o institución a la que se
					le va a enviar el dinero, por medio de esto podemos confirmar si se le esta enviando a la persona o
					institución correcta. Una vez confirmada la información, presionamos el botón de <i>“Continuar”</i>{" "}
					para ir al siguiente paso.
				</p>
				<img src="BAC9.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 10</h3>
				<p>
					Después de presionar <i>“Continuar”</i>, la aplicación nos va solicitar el <i>“Monto”</i> que vamos
					a enviar y la
					<i>“Descripción”</i> (es opcional) donde escribimos la razón de la transferencia, una vez
					seleccionado todo, presionamos <i>“Continuar”</i>.
				</p>
				<img src="BAC10.png" className="imgGuia bacTutorialImg" />
				<p>
					<strong>IMPORTANTE:</strong>{" "}
					<i>Recuerde que el monto a transferir debe ser indicado en la moneda de la cuenta destino.</i>
				</p>
				<h3>Paso 11</h3>
				<p>
					Luego veremos el resumen de la transferencia, y el sistema solicitando el código BAC o Token (App
					del celular) para completar la transferencia. Ingresamos el token, presionamos <i>“Transferir”</i>.
				</p>
				<img src="BAC11.png" className="imgGuia bacTutorialImg" />
				<h3>Paso 12</h3>
				<p>
					Una vez que presionamos transferir el sistema realizara la transferencia, y luego nos mostrara el
					resumen con el comprobante de la transferencia. Y lo logramos nuestra primera transferencia con
					SINPE Móvil.
				</p>
				<img src="BAC12.png" className="imgGuia bacTutorialImg" />
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

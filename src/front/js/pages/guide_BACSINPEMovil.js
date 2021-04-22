import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const BAC_SINPE = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h1>MI PRIMERA TRANSFERENCIA</h1>
				<h1>SINPE MÓVIL</h1>
				<h5>EN BANCA MÓVIL DEL BAC</h5>

				<h3>Paso 1</h3>
				<p>
					Primero, buscaremos la aplicación de Banca Móvil en nuestro teléfono y abriremos la aplicación
					presionando con nuestro dedo encima de la aplicación
				</p>
				<h3>Paso 2</h3>
				<p>
					Una vez que abre la aplicación, la misma nos va solicitar un usuario y contraseña, esta información
					debió haber sido brindada por el asesor del BAC. Si no tiene esta información tendrá que ir
					personalmente a una sucursal y solicitarla.
				</p>
				<h3>Paso 3</h3>
				<p>
					Después de agregar la información de usuario y contraseña, se presiona con el dedo el botón de
					ingresar.
				</p>
				<h3>Paso 4</h3>
				<p>
					Después de presionar el botón de ingresar, la aplicación nos va dirigir al inicio, en donde
					mostraran las cuentas, tarjetas y prestamos que estén a registradas a su nombre.
				</p>
				<h3>Paso 5</h3>
				<p>
					Luego, seleccione con el dedo en el menú inferior la opción de <i>“Transferencias”</i>.
				</p>
				<h3>Paso 6</h3>
				<p>
					La aplicación nos redirigirá a la sección de transferencias, donde se muestran las diferentes
					opciones que tiene el banco para realizar una transferencia. En este ejemplo vamos a seleccionar{" "}
					<i>“A SINPE Móvil”</i>, presione con su dedo sobre la opción <strong>A SINPE Móvil</strong>.
				</p>
				<h3>Paso 7</h3>
				<p>
					Luego, la aplicación nos va a mostrar las cuentas que se pueden utilizar para la transferencia, y se
					tendrá que seleccionar la que se quiere usar para la transferencia, presione con su dedo sobre la
					cuenta que quiere utilizar.
				</p>
				<h3>Paso 8</h3>
				<p>
					Una vez que seleccionamos la cuenta, la aplicación nos va mostrar el siguiente paso, el cual es
					digitar el número de celular de la persona o institución a la que vamos a enviar la Transferencia
					SINPE Móvil. Presionamos sobre el espacio donde dice <i>“Digite el numero”</i>, e ingresamos el
					numero correspondiente. También se puede guardar el numero en favoritos solo presionando en el
					cuadrado a la par de <i>“Guardar como favorito”</i>, esto para evitar que cuando se vaya a hacer la
					transferencia el sistema le pida el código BAC o Token, esto es Opcional.
				</p>
				<h3>Paso 9</h3>
				<p>
					Una vez la información es ingresada, podremos ver el nombre de la persona o institución a la que se
					le va a enviar el dinero, por medio de esto podemos confirmar si se le esta enviando a la persona o
					institución correcta. Una vez confirmada la información, presionamos el botón de <i>“Continuar”</i>{" "}
					para ir al siguiente paso.
				</p>
				<h3>Paso 10</h3>
				<p>
					Después de presionar <i>“Continuar”</i>, la aplicación nos va solicitar el <i>“Monto”</i> que vamos
					a enviar y la
					<i>“Descripción”</i> (es opcional) donde escribimos la razón de la transferencia, una vez
					seleccionado todo, presionamos <i>“Continuar”</i>.
				</p>
				<p>
					<strong>IMPORTANTE:</strong>{" "}
					<i>Recuerde que el monto a transferir debe ser indicado en la moneda de la cuenta destino.</i>
				</p>
				<h3>Paso 11</h3>
				<p>
					Luego veremos el resumen de la transferencia, y el sistema solicitando el código BAC o Token (App
					del celular) para completar la transferencia. Ingresamos el token, presionamos <i>“Transferir”</i>.
				</p>
				<h3>Paso 12</h3>
				<p>
					Una vez que presionamos transferir el sistema realizara la transferencia, y luego nos mostrara el
					resumen con el comprobante de la transferencia. Y lo logramos nuestra primera transferencia con
					SINPE Móvil.
				</p>
			</div>

			<div className="container">
				{/* Aqui va a ir la parte de likes y share a redes sociales - Work in progress */}
				{/* <i className=" far fa-heart mr-2 userProfileIcon" /> */}
				<Link to="/">
					<button className="btn btn-primary mb-2">Volver al menú principal</button>
				</Link>
			</div>
		</>
	);
};

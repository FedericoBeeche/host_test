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
					<h1 className="WA_Toph1Guide">MI PRIMER</h1>
				</div>
				<div className="row justify-content-center">
					<h1 className="WA_Middleh1Guide">VIDEO LLAMADA</h1>
				</div>
				<div className="row justify-content-center">
					<h1 className="WA_Bottomh1Guide">POR WHATSAPP</h1>
				</div>
				<div className="row justify-content-center">
					<h5 className="WA_h5Guide">¿¡QUÉ!?¿¡SE HACEN VIDEOLLAMADAS EN WHATSAPP!?</h5>
				</div>
			</div>

			<div className="container mb-5">
				{/* video tutorial */}
				<div className="row justify-content-center">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/86bJe6qZ6HY"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 1</h3>
					<p>
						Primero necesitamos abrir la aplicación en nuestro celular, entonces tienen que buscar el icono
						de WhatsApp en su celular y presionar con su dedo sobre la aplicación para que se abra.
					</p>
					<div className="row col-12 justify-content-center">
						<img src="WA1.jpg" className="imgGuia WATutorialImg1" />
					</div>
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 2</h3>
					<p>
						Una vez que abrimos la aplicación, vamos a poder ver los chats que tenemos abiertos, donde
						tendremos que seleccionar presionando con el dedo sobre la persona con la que se quiere realizar
						la video llamada.
					</p>
					<div className="row col-12 justify-content-center">
						<img src="WA2.png" className="imgGuia WATutorialImg" />
					</div>
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 3</h3>
					<p>
						Cuando abrimos el chat correspondiente, tendrá que presionar con el dedo sobre el icono que
						parece un video cámara, y esta hará que la aplicación genere la video llamada.
					</p>
					<div className="row col-12 justify-content-center">
						<img src="WA3.jpg" className="imgGuia WATutorialImg" />
					</div>
				</div>
				<div className="row">
					<h3 className="h3GuidesStep">Paso 4</h3>
					<p>
						Una vez generada la llamada podremos agregar otra persona a la llamada, presionando con el dedo
						sobre el icono señalado en la imagen abajo, después de presionarlo la aplicación va solicitar
						que seleccione a la persona que quiere agregar a la llamada.
					</p>
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

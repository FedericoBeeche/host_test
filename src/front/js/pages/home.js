import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="home_menuH1">Menú de guías</h1>
			<h4 className="mb-4 home_menuH4">Aquí podrás encontrar las guías con la información más actualizada.</h4>
			<div className="d-flex justify-content-center mb-4">
				<input className="buscador" type="text" placeholder="Buscar guía" />
				<button className="btn btn-dark ml-2">Buscar</button>
			</div>
			<div className="container">
				<div className="card-columns row">
					<div className="col-sm-3">
						<Link to="/guide_BACSINPEMovil">
							<div className="card">
								<img
									src="https://i.ytimg.com/vi/gY4BdVdRF_s/maxresdefault.jpg"
									className="card-img"
									alt="..."
								/>
							</div>
						</Link>
						<h5 className="menu_h5GuideTitle">Transferencias SINPE BAC</h5>
						<p>
							Todo mundo está hablando de transferencias SINPE móvil pero... ¿qué son realmente estas
							transferencias?
						</p>
					</div>
					<div className="col-sm-3">
						<Link to="/guide_ZoomCalls">
							<div className="card">
								<img
									src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AA1D/production/_116094534_46bd3031-50b2-492b-9505-6c270c0fbf45.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
						</Link>
						<h5 className="menu_h5GuideTitle">Mi primer videollamada en Zoom (para celular)</h5>
						<p>Como invitar a amigos, familia, y hasta mis mascotas.</p>
					</div>
					<div className="col-sm-3">
						<Link to="/guide_WhatsAppCalls">
							<div className="card">
								<img
									src="https://www.dignited.com/wp-content/uploads/2020/03/fix-WhatsApp-call-not-working.jpg"
									className="card-img-top"
									alt="..."
								/>
							</div>
						</Link>
						<h5 className="menu_h5GuideTitle">Videollamadas por WhatsApp</h5>
						<p>¿Para qué bajar Zoom si puedo usar el mismo WhatsApp?</p>
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<img src="https://svgshare.com/i/WVA.svg" className="leerSVG text-center" />
				</div>
			</div>
		</div>
	);
};

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Menú de guías</h1>
			<h4 className="mb-3">Aquí podrás encontrar las guías con la información más actualizada.</h4>
			<div className="d-flex justify-content-center mb-3">
				<input type="text" placeholder="Buscar guía" />
				<button className="btn btn-primary ml-2">Buscar</button>
			</div>
			<div className="card-deck">
				<div className="card">
					<img
						src="https://i.ytimg.com/vi/gY4BdVdRF_s/maxresdefault.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Transferencias SINPE BAC</h5>
						<p className="card-text">
							Todo mundo está hablando de transferencias SINPE móvil pero... ¿qué son realmente estas
							transferencias?
						</p>
						<Link to="/guide_BACSINPEMovil">
							<button className="btn btn-primary">Ver guía</button>
						</Link>
						<p className="card-text">
							<small className="text-muted">Actualizado hace 1 día</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://ichef.bbci.co.uk/news/976/cpsprodpb/AA1D/production/_116094534_46bd3031-50b2-492b-9505-6c270c0fbf45.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Mi primera videollamada en Zoom (para celular)</h5>
						<p className="card-text">Como invitar a amigos, familia, y hasta mis mascotas.</p>
						<br />
						<button className="btn btn-primary">Ver guía</button>
						<p className="card-text">
							<small className="text-muted">Actualizado hace 4 días</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://www.dignited.com/wp-content/uploads/2020/03/fix-WhatsApp-call-not-working.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Videollamadas por WhatsApp</h5>
						<p className="card-text">¿Para qué bajar Zoom si puedo usar el mismo WhatsApp?</p>
						<br />
						<br />
						<button className="btn btn-primary">Ver guía</button>
						<p className="card-text">
							<small className="text-muted">Actualizado hace 1 semana</small>
						</p>
					</div>
				</div>
			</div>
			{/* Este icono todavia no lo pongo porque no le he agregado estilos y el original es enorme, mas adelante le pongo style */}
			<div className="d-flex justify-content-center">
				<img src="https://svgshare.com/i/WVA.svg" className="leerSVG text-center" />
			</div>
		</div>
	);
};

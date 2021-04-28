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
			<div className="container guideContainer">
				<div className="card-columns row justify-content-center">
					{store.tutorials.map((tutorial, index) => {
						return (
							<div className="col-sm-3" key={index}>
								<Link to={tutorial.link}>
									<div className="card">
										<img src={tutorial.img} className="card-img" alt="..." />
									</div>
								</Link>
								<h5 className="menu_h5GuideTitle">{tutorial.title}</h5>
								<p>{tutorial.description}</p>
							</div>
						);
					})}
				</div>

				<div className="d-flex justify-content-center">
					<img src="https://svgshare.com/i/WVA.svg" className="leerSVG text-center" />
				</div>
			</div>
		</div>
	);
};

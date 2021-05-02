import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogoPagina } from "../../img/Logo.png";
import { Favorites } from "./favorites";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light navbar-expand-md mb-3 navbarStyle d-flex align-items-center">
			<div className="navbar-brand m-0 p-0" href="#">
				<Link to="/">
					<img className="logoClass p-0 m-0" src="Logo.png" alt="¿Cómo hago?" />
					{/* <span className="navbar-brand mb-0 h1">¿Cómo hago?</span> */}
				</Link>
			</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarSm">
				<i className="fas fa-bars text-coral" />
			</button>
			<div className="navbar-collapse collapse text-right" id="collapsingNavbarSm">
				<ul className="navbar-nav w-100 justify-content-end">
					<li className="nav-item">
						<button className="darkModeBtn" onClick={() => actions.themeToggler()}>
							Modo Oscuro
						</button>
					</li>
					<li className="nav-item ml-3">
						<Favorites />
					</li>
					<li className="nav-item ml-3">
						{store.token ? (
							<Link to="/">
								<button onClick={() => actions.logout()} className="btn text-coral">
									Cerrar sesión
								</button>
							</Link>
						) : (
							<Link to="/login">
								<i className=" far fa-user-circle userProfileIcon" />
							</Link>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

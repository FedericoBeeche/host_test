import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogoPagina } from "../../img/Logo.png";
import { Favorites } from "./favorites";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light mb-3 navbarStyle">
			<Link to="/">
				<img className="logoClass p-0 m-0" src="Logo.png" alt="¿Cómo hago?" />
				{/* <span className="navbar-brand mb-0 h1">¿Cómo hago?</span> */}
			</Link>
			<div className="d-flex justify-content-center ml-auto">
				<Favorites />
				<button className="darkModeBtn" onClick={() => actions.themeToggler()}>
					Modo Oscuro
				</button>

				<i className=" far fa-heart mr-2 userProfileIcon" />
				{store.token ? (
					<Link to="/">
						<button onClick={() => actions.logout()} className="btn text-coral">
							Cerrar sesión
						</button>
					</Link>
				) : (
					<Link to="/login">
						<i className=" far fa-user-circle mr-2 userProfileIcon" />
					</Link>
				)}
			</div>
		</nav>
	);
};

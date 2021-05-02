import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogoPagina } from "../../img/Logo.png";
import { Favorites } from "./favorites";
import { FavoritesSmall } from "./favoritessmall";
import { FavReact } from "./favreact";
import { FavReactSmall } from "./favreactsmall";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light navbar-expand-md mb-3 navbarStyle d-flex align-items-center bg-darkcoral px-sm-5">
			<div className="navbar-brand m-0 p-0" href="#">
				<Link style={{ textDecoration: "none" }} to="/">
					{/* <img className="logoClass p-0 m-0" src="Logo.png" alt="¿Cómo hago?" /> */}
					{/* <span className="navbar-brand mb-0 h1">¿Cómo hago?</span> */}
					<div className="logotext">
						<div>¿CÓMO</div>
						<div>HAGO?</div>
					</div>
				</Link>
			</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarSm">
				<i className="fas fa-bars text-coral" />
			</button>
			<div className="navbar-collapse collapse text-right" id="collapsingNavbarSm">
				<ul className="navbar-nav w-100 justify-content-end">
					{/*Responsive DARKMODE button*/}
					<li className="nav-item d-none d-md-block">
						<button className="darkModeBtn" onClick={() => actions.themeToggler()}>
							Modo Oscuro
						</button>
					</li>
					<li className="nav-item d-block d-sm-none m-1">
						<div className="text-coral p-0" onClick={() => actions.themeToggler()}>
							Modo Oscuro
						</div>
					</li>

					{/*Responsive FAVORITES button*/}
					<li className="nav-item ml-3 d-none d-md-block">
						{/* <Favorites /> */}
						<FavReact />
					</li>
					<li className="nav-item ml-3 d-block d-sm-none m-1">
						{/* <FavoritesSmall /> */}
						<FavReactSmall />
					</li>

					{/*Responsive LOGIN/LOGOUT button*/}
					<li className="nav-item ml-3 d-none d-md-block">
						{store.token ? (
							<Link to="/">
								<div onClick={() => actions.logout()} className="text-coral">
									Cerrar Sesión
								</div>
							</Link>
						) : (
							<Link to="/login">
								<i className=" far fa-user-circle userProfileIcon" />
							</Link>
						)}
					</li>
					<li className="nav-item ml-3 d-block d-sm-none m-1">
						{store.token ? (
							<Link style={{ textDecoration: "none" }} to="/">
								<div onClick={() => actions.logout()} className="text-coral">
									Cerrar Sesión
								</div>
							</Link>
						) : (
							<Link style={{ textDecoration: "none" }} to="/login">
								<div className="text-coral">Iniciar Sesión</div>
							</Link>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

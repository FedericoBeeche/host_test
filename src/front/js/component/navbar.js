import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogoPagina } from "../../img/Logo.png";
import { FavReact } from "./favreact";
import { FavReactSmall } from "./favreactsmall";
import { logo2 } from "../../img/logo2.png";
import { modoOscuro } from "../../img/navbarBtn/modoOscuro.png";
import { modoClaro } from "../../img/navbarBtn/modoClaro.png";
import { iniciarSesion } from "../../img/navbarBtn/iniciarSesion.png";
import { cerrarSesion } from "../../img/navbarBtn/cerrarSesion.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light navbar-expand-md mb-3 navbarStyle d-flex align-items-center bg-darkcoral px-sm-5">
			<div className="navbar-brand m-0 p-0" href="#">
				<Link style={{ textDecoration: "none" }} to="/">
					<div>
						<img className="logotext py-2" src="logo2.png" />
					</div>
				</Link>
			</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbarSm">
				<i className="fas fa-bars text-coral" />
			</button>
			<div className="navbar-collapse collapse text-right" id="collapsingNavbarSm">
				<ul className="navbar-nav w-100 justify-content-end">
					{/*Responsive DARKMODE button*/}
					{/*Visible only on md and lg*/}
					<li className="nav-item d-none d-md-block d-lg-block">
						{store.theme == "light" ? (
							<div className="" onClick={() => actions.themeToggler()}>
								<img className="navbar-icon buttonhover" src="modoOscuro.png" />
							</div>
						) : (
							<div className="" onClick={() => actions.themeToggler()}>
								<img className="navbar-icon buttonhover" src="modoClaro.png" />
							</div>
						)}
					</li>
					{/*Visible only on xs*/}
					<li className="nav-item d-block d-sm-none m-1">
						{store.theme == "light" ? (
							<div className="text-coral p-0" onClick={() => actions.themeToggler()}>
								Modo Oscuro
							</div>
						) : (
							<div className="text-coral p-0" onClick={() => actions.themeToggler()}>
								Modo Claro
							</div>
						)}
					</li>
					{/*Visible only on sm*/}
					<li className="nav-item d-none d-sm-block d-md-none m-1">
						{store.theme == "light" ? (
							<div className="text-coral p-0" onClick={() => actions.themeToggler()}>
								Modo Oscuro
							</div>
						) : (
							<div className="text-coral p-0" onClick={() => actions.themeToggler()}>
								Modo Claro
							</div>
						)}
					</li>

					{/*Responsive FAVORITES button*/}
					{/*Visible only on md and lg*/}
					<li className="nav-item ml-3 d-none d-md-block d-lg-block">
						<FavReact />
					</li>
					{/*Visible only on xs*/}
					<li className="nav-item ml-3 d-block d-sm-none m-1">
						<FavReactSmall />
					</li>
					{/*Visible only on sm*/}
					<li className="nav-item ml-3 d-none d-sm-block d-md-none m-1">
						<FavReactSmall />
					</li>

					{/*Responsive LOGIN/LOGOUT button*/}
					{/*Visible only on md and lg*/}
					<li className="nav-item ml-3 d-none d-md-block d-lg-block">
						{store.token ? (
							<Link style={{ textDecoration: "none" }} to="/">
								<div
									onClick={() => actions.logout()}
									className="text-coral font-weight-bold pt-2 buttonhover">
									Cerrar Sesión
								</div>
							</Link>
						) : (
							<Link to="/login">
								<div className="">
									<i className=" far fa-user-circle buttonhover userProfileIcon" />
								</div>
							</Link>
						)}
					</li>
					{/*Visible only on xs*/}
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
					{/*Visible only on sm*/}
					<li className="nav-item ml-3 d-none d-sm-block d-md-none m-1">
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

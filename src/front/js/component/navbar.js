import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 navbarStyle">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">¿Cómo hago?</span>
			</Link>
			<div className="d-flex justify-content-center ml-auto">
				<i className=" far fa-heart mr-2 userProfileIcon" />
				<i className=" far fa-user-circle mr-2 userProfileIcon" />
				<Link to="/login">
					<button className="btn btn-primary">Iniciar sesión</button>
				</Link>
			</div>
		</nav>
	);
};

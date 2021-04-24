import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";
import { Login } from "./login";

import "../../styles/demo.scss";

export const SignUp = () => {
	return (
		<div className="container-fluid">
			<h2 className="text-center m-5">Crear cuenta</h2>
			<div className="m-auto col-8 col-sm-3">
				<form>
					<div className="row mb-3 d-block">
						<label htmlFor="firstname_input" className="form-label">
							Nombre
						</label>
						<input className="d-block w-100 p-2" type="text" id="firstname_input" placeholder="Nombre" />
					</div>

					<div className="row mb-3 d-block">
						<label htmlFor="lastname_input" className="form-label">
							Apellidos
						</label>
						<input className="d-block w-100 p-2" type="text" id="lastname_input" placeholder="Apellidos" />
					</div>
					<div className="row mb-3 d-block">
						<label htmlFor="email_input" className="form-label">
							Correo electrónico
						</label>
						<input
							className="d-block w-100 p-2"
							type="email"
							id="email_input"
							placeholder="correo@ejemplo.com"
						/>
					</div>

					<div className="row mb-0 d-block">
						<label htmlFor="password_input" className="form-label">
							Contraseña
						</label>
						<input
							className="d-block w-100 p-2"
							type="password"
							id="password_input"
							placeholder="Digita tu contraseña"
						/>
					</div>
					<div className="row my-3 d-flex justify-content-center">
						<p>
							<input className="form-check-input" type="checkbox" value="" required />
							<small>Acepto</small>
							<small className="text-info"> Terminos y Condiciones</small>
						</p>
					</div>
					<div className="row my-3 d-flex justify-content-center">
						<button type="button" className="btn btn-success">
							Registrate
						</button>
					</div>
				</form>

				<div className="text-center">
					<small>¿Ya tienes cuenta?</small>
					<Link to={"/login"}>
						<small className="text-info"> Regresa, e inicia sesion</small>
					</Link>
				</div>
			</div>
		</div>
	);
};

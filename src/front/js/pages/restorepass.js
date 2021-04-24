import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";
import { Login } from "./login";

import "../../styles/demo.scss";

export const RestorePass = () => {
	return (
		<div className="container-fluid">
			<h2 className="text-center m-5">Restablezca su Contraseña</h2>
			<div className="m-auto col-8 col-sm-3">
				<form>
					<div className="row mb-3 d-block">
						<label htmlFor="email_input" className="form-label">
							Ingrese su correo electronico *
						</label>
						<input
							className="d-block w-100 p-2"
							type="email"
							id="email_input"
							placeholder="correo@ejemplo.com"
						/>
					</div>
				</form>
				<div className="row my-3 d-flex justify-content">
					<Link to={"/login"}>
						<button type="button" className="btn btn-success">
							Enviar
						</button>
					</Link>
					<Link to={"/login"}>
						<button type="button" className="btn btn-outline-danger ml-2">
							Cancelar
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";
import { Login } from "./login";

import "../../styles/demo.scss";

export const ChangePass = () => {
	return (
		<div className="container-fluid">
			{/* same classes as restorepass.js as the page is basically the same */}
			<h2 className="text-center pwResetTopH2">Restablezca su</h2>
			<h2 className="text-center mb-5 ml-5 mr-5 mt-3 pwResetBottomH2">contraseña</h2>
			<div className="m-auto col-8 col-sm-3">
				<form>
					<div className="row mb-3 d-block">
						<label htmlFor="password" className="form-label">
							Ingrese nueva contraseña
						</label>
						<input
							className="d-block w-100 p-2 infoBox"
							type="password"
							id="password_input"
							placeholder="Nueva contraseña"
							required
						/>
					</div>
				</form>
				<div className="row my-3 d-flex justify-content">
					<Link to={"/login"}>
						<button type="button" className="btn btn-success">
							Confirmar
						</button>
					</Link>
					<Link to={"/login"}>
						<button type="button" className="btn btn-danger ml-2">
							Cancelar
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

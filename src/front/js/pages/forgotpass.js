import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";
import { Login } from "./login";

import "../../styles/demo.scss";

export const ForgotPass = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	const forgotPasswordHandler = () => {
		const URL = `${store.url}/forgotmail/${email}`;
		const CONFIG = {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		};

		fetch(URL, CONFIG)
			.then(resp => {
				console.log("Send email request: ", resp.ok);
				resp.status >= 200 && resp.status < 300
					? console.log("Send email successful, status: ", resp.status)
					: console.error("Send email failed, status: ", resp.status);
				return resp.json();
			})
			.then(() => {})
			.catch(error => console.error("Send email error: ", error));
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5 ">
				<h2 className="text-center form-title m-0">Restablezca su</h2>
			</div>
			<div className="row justify-content-center mb-5 ">
				<h2 className="text-center form-title">contraseña</h2>
			</div>

			<div className="m-auto col-8 col-sm-3">
				<form>
					<div className="row mb-3 d-block">
						<label htmlFor="email_input" className="form-label">
							Ingrese su correo electronico *
						</label>
						<input
							className="d-block w-100 p-2 infoBox"
							type="email"
							id="email_input"
							placeholder="correo@ejemplo.com"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
				</form>
				<div className="row my-4 d-flex justify-content">
					<Link to={"/login"}>
						<button type="button" className="btn btn-info buttonhover" onClick={forgotPasswordHandler}>
							Enviar
						</button>
					</Link>
					<Link to={"/login"}>
						<button type="button" className="btn btn-dark buttonhover ml-3 mb-5">
							Cancelar
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

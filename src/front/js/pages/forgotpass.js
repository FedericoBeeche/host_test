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
	const history = useHistory();

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
				if (resp.ok) {
					console.log("Send email successful, status: ", resp.status);
					swal({
						title: "Correo enviado",
						text: "Revisa tu correo electrónico para reestablecer tu contraseña",
						icon: "success",
						timer: "4500",
						button: {
							visible: true,
							text: "Aceptar"
						}
					});
					history.push("/login");
				} else {
					console.error("Send email failed, status: ", resp.status);
					swal({
						//title: "Good job!",
						text: "Hubo un error al enviar el correo",
						icon: "error",
						timer: "3500",
						button: {
							visible: true,
							text: "Entendido"
						}
					});
					throw new Error("Hubo un error al enviar el correo");
				}
				return resp.json();
			})
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
					<div>
						<button type="button" className="btn btn-info buttonhover" onClick={forgotPasswordHandler}>
							Enviar
						</button>
					</div>
					<Link to={"/login"}>
						<button type="button" className="btn btn-dark buttonhover ml-3 mb-5">
							Cancelar
						</button>
					</Link>
				</div>
				<div className="text-center mb-5">
					<Link to={"/"}>
						<button type="button" className="buttonhover btn btn-light custom-btn btn-sm">
							Volver al menú principal
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

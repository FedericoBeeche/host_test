import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link, useParams } from "react-router-dom";
import { logo2 } from "../../img/logo2.png";
import { modoOscuro } from "../../img/navbarBtn/modoOscuro.png";
import { modoClaro } from "../../img/navbarBtn/modoClaro.png";
import { iniciarSesion } from "../../img/navbarBtn/iniciarSesion.png";
import { cerrarSesion } from "../../img/navbarBtn/cerrarSesion.png";

import "../../styles/home.scss";
import { Login } from "./login";

import "../../styles/demo.scss";

export const ChangePass = () => {
	const { store, actions } = useContext(Context);
	const { token } = useParams();
	const [email, setEmail] = useState("default");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const history = useHistory();

	useEffect(() => {
		const URL = `${store.url}/resetpassword/${token}`;
		const CONFIG = {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		};

		fetch(URL, CONFIG)
			.then(resp => {
				console.log("THIS IS THE CHANGE PASSWORD RESPONSE", resp);
				return resp.json();
			})
			.then(data => {
				console.log("THIS IS THE DATA: ", data);
				setEmail(data);
			})
			.catch(error => {
				console.error("CHANGE PASSWORD error: ", error);
			});
	}, []);

	const resetPasswordHandler = () => {
		const URL = `${store.url}/api/user/${email}`;
		const CONFIG = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				password: password
			})
		};

		fetch(URL, CONFIG)
			.then(resp => {
				console.log("RESET PASSWORD request: ", resp.ok);
				if (password == "") {
					console.error("RESET PASSWORD failed, status: ", resp.status);
					swal({
						//title: "Good job!",
						text: "Ingresa tu nueva contraseña",
						icon: "error",
						timer: "4500",
						button: {
							visible: true,
							text: "Entendido"
						}
					});
					throw new Error("Hubo un error al resetear la contraseña");
				}
				if (password !== confirmpassword) {
					console.error("RESET PASSWORD failed, status: ", resp.status);
					swal({
						//title: "Good job!",
						text: "Verifica que ambas contraseñas sean iguales",
						icon: "error",
						timer: "4500",
						button: {
							visible: true,
							text: "Entendido"
						}
					});
					throw new Error("Hubo un error al resetear la contraseña");
				}
				if (resp.ok) {
					console.log("RESET PASSWORD successful, status: ", resp.status);
					swal({
						title: "Contraseña actualizada",
						text: "Inicia sesión con tu contraseña",
						icon: "success",
						timer: "4500",
						button: {
							visible: true,
							text: "Aceptar"
						}
					});
					history.push("/login");
				} else {
					console.error("RESET PASSWORD failed, status: ", resp.status);
					swal({
						//title: "Good job!",
						text: "Hubo un error al resetear la contraseña",
						icon: "error",
						timer: "4500",
						button: {
							visible: true,
							text: "Entendido"
						}
					});
					throw new Error("Hubo un error al resetear la contraseña");
				}
				return resp.json();
			})
			.catch(error => console.error("Send email error: ", error));
	};

	return (
		<div className="container">
			{email !== "expired" && email !== "" ? (
				<>
					{" "}
					<div className="row justify-content-center mt-5 ">
						<h2 className="text-center form-title m-0">Restablezca su</h2>
					</div>
					<div className="row justify-content-center mb-5 ">
						<h2 className="text-center form-title">contraseña</h2>
					</div>
					<div className="m-auto col-10 col-sm-3">
						<form>
							<div className="row mb-3 d-block">
								<label htmlFor="password" className="form-label">
									Ingrese su nueva contraseña
								</label>
								<input
									className="d-block w-100 p-2 infoBox"
									type="password"
									id="password_input"
									placeholder="Nueva contraseña"
									value={password}
									onChange={e => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="row mb-3 d-block">
								<label htmlFor="password" className="form-label">
									Confirmar nueva contraseña
								</label>
								<input
									className="d-block w-100 p-2 infoBox"
									type="password"
									id="password_input"
									placeholder="Confirmar contraseña"
									value={confirmpassword}
									onChange={e => setConfirmPassword(e.target.value)}
									required
								/>
							</div>
						</form>
						<div className="row my-4 d-flex justify-content">
							<div>
								<button
									type="button"
									className="btn btn-info buttonhover"
									onClick={resetPasswordHandler}>
									Confirmar
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
				</>
			) : (
				<>
					<h2 className="text-center m-5">El link para reestablecer su contraseña ha expirado</h2>
					<div className="text-center m-5">
						<Link to={"/"}>
							<button type="button" className="buttonhover btn btn-light custom-btn btn-sm">
								Volver al menú principal
							</button>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

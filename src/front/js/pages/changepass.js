import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link, useParams } from "react-router-dom";

import "../../styles/home.scss";
import { Login } from "./login";

import "../../styles/demo.scss";

export const ChangePass = () => {
	const { store, actions } = useContext(Context);
	const { token } = useParams();
	const [email, setEmail] = useState("default");
	const [password, setPassword] = useState("");

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
				resp.status >= 200 && resp.status < 300
					? console.log("Reset password successful, status: ", resp.status)
					: console.error("Reset password failed, status: ", resp.status);
				return resp.json();
			})
			.then(() => {})
			.catch(error => console.error("RESET PASSWORD error: ", error));
	};

	return (
		<div className="container-fluid">
			{email !== "expired" && email !== "" ? (
				<>
					{" "}
					<h2 className="text-center pwResetTopH2">Restablezca su</h2>
					<h2 className="text-center mb-5 ml-5 mr-5 mt-3 pwResetBottomH2">contraseña</h2>
					<div className="m-auto col-8 col-sm-3">
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
						</form>
						<div className="row my-3 d-flex justify-content">
							<Link to={"/login"}>
								<button type="button" className="btn btn-success" onClick={resetPasswordHandler}>
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
				</>
			) : email !== "expired" ? (
				<h2 className="text-center m-5">El token para reestablecer contraseña no es válido</h2>
			) : (
				<h2 className="text-center m-5">El link para reestablecer su contraseña ha expirado</h2>
			)}
		</div>
	);
};

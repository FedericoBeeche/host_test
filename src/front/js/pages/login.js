import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";
import { SignUp } from "./signup";
import { ForgotPass } from "./forgotpass";
import { ChangePass } from "./changepass";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleClick = () => {
		actions.login(email, password).then(() => {
			actions.getFavorites();
			// actions.getCurrentUser();
		});
	};

	return (
		<div className="container">
			<div className="row justify-content-center my-5">
				<h2 className="text-center form-title">Iniciar sesión</h2>
			</div>

			{store.token && store.token != "" && store.token != undefined ? (
				history.push("/")
			) : (
				<div className="m-auto col-8 col-sm-3">
					<form>
						<div className="row mb-3 d-block">
							<label htmlFor="email_input" className="form-label">
								Correo electrónico
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

						<div className="row mb-0 d-block">
							<label htmlFor="password_input" className="form-label">
								Contraseña
							</label>
							<input
								className="d-block w-100 p-2 infoBox"
								type="password"
								id="password_input"
								placeholder="Digita tu contraseña"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="row justify-content-end">
							<Link to={"/forgotpass"}>
								<small className="text-info">¿Has olvidado tu contraseña?</small>
							</Link>
						</div>
					</form>

					<div className="row my-4">
						<button type="button" className="btn btn-info buttonhover" onClick={handleClick}>
							Ingresar
						</button>
					</div>
					<div className="text-center mb-5">
						<small>¿No tienes una cuenta aún? </small>
						<Link to={"/signup"}>
							<small className="text-info">Regístrate</small>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

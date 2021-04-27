import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";
import { SignUp } from "./signup";
import { RestorePass } from "./restorepass";
import { ChangePass } from "./changepass";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleClick = () => {
		actions.login(email, password).then(() => {
			// actions.getFavorites();
			// actions.getCurrentUser();
		});
	};

	return (
		<div className="container-fluid">
			<h2 className="text-center m-5 loginH2">Iniciar sesión</h2>
			{store.token && store.token != "" && store.token != undefined ? (
				history.push("/")
			) : (
				<div className="m-auto col-8 col-sm-3 loginBox">
					<form>
						<div className="row mb-3 d-block">
							<label htmlFor="email_input" className="form-label loginText">
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
							<label htmlFor="password_input" className="form-label loginText">
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
					</form>
					<div className="d-flex justify-content-end">
						<Link to={"/restorepass"}>
							<small className="text-info float-right mt-1">¿Has olvidado tu contraseña?</small>
						</Link>
					</div>

					<div className="row my-3">
						<button type="button" className="btn btn-dark" onClick={handleClick}>
							Ingresar
						</button>
					</div>
					<div className="text-center">
						<small>¿No tienes una cuenta aún? </small>
						<Link to={"/signup"}>
							<small className="text-info">Regístrate</small>
						</Link>
					</div>
					<div className="text-center">
						<Link to={"/changepass"}>
							<small className="text-info"> Cambio de contraseña</small>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

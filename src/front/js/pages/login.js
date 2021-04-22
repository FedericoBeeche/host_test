import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";

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
			<h2 className="text-center m-5">Iniciar sesión</h2>
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
								className="d-block w-100 p-2"
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
								className="d-block w-100 p-2"
								type="password"
								id="password_input"
								placeholder="Digita tu contraseña"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</form>
					<div className="d-flex justify-content-end">
						<Link to={"/password/reset"}>
							<small className="text-info float-right m-0">¿Has olvidado tu contraseña?</small>
						</Link>
					</div>

					<div className="row my-3">
						<button type="button" className="btn btn-success" onClick={handleClick}>
							Ingresar
						</button>
					</div>
					<div className="text-center">
						<small>¿No tienes una cuenta aún? </small>
						<Link to={"/register"}>
							<small className="text-info">Regístrate</small>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

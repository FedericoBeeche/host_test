import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { Link } from "react-router-dom";

import "../../styles/home.scss";

import "../../styles/demo.scss";
import { ChangePass } from "./changepass";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [agree, setAgree] = useState(false);
	const history = useHistory();

	const checkboxHandler = () => {
		// if agree === true, it will be set to false
		// if agree === false, it will be set to true
		setAgree(!agree);
		// Don't miss the exclamation mark
	};

	const registrationHandler = () => {
		const URL = `${store.url}/api/register`;
		const CONFIG = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				lastname: lastname,
				email: email,
				password: password
			})
		};

		fetch(URL, CONFIG)
			.then(resp => {
				if (resp.status === 409) {
					//alert("Este correo electrónico ya está registrado");
					swal({
						//title: "Good job!",
						text: "Este correo electrónico ya está registrado",
						icon: "error",
						timer: "3000",
						button: {
							visible: true,
							text: "ok"
						}
					});
					throw new Error("Status Code 409: email already registered"); // throw to handle error when email is already registered
				}
				if (resp.status !== 200 && resp.status !== 409) {
					//alert("Todos los campos del formulario son requeridos");
					swal({
						//title: "Good job!",
						text: "Todos los campos del formulario son requeridos",
						icon: "error",
						timer: "3000",
						button: {
							visible: true,
							text: "ok"
						}
					});
					throw new Error("There was some error during registration");
				}
				if (password !== confirmpassword) {
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
				} else return resp.json();
			})
			.then(data => {
				console.log("User added to DB: ", data);
				//alert("Thank you for registration");
				swal({
					title: "¡Gracias por registrarse!",
					text: "Inicia sesión con tu nueva cuenta",
					icon: "success",
					timer: "3500"
				});
			})
			.then(() => history.push("/login"))
			.catch(error => {
				console.error("REGISTER User error: ", error);
			});
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-center my-5">
				<h2 className="text-center form-title">Crear cuenta</h2>
			</div>

			{store.token && store.token != "" && store.token != undefined ? (
				history.push("/")
			) : (
				<div className="m-auto col-8 col-sm-3">
					<form>
						<div className="row mb-2 d-block">
							<label htmlFor="firstname_input" className="form-label">
								Nombre
							</label>
							<input
								className="d-block w-100 p-2 signUpBox"
								type="text"
								id="firstname_input"
								placeholder="Nombre"
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>

						<div className="row mb-2 d-block">
							<label htmlFor="lastname_input" className="form-label">
								Apellidos
							</label>
							<input
								className="d-block w-100 p-2 signUpBox"
								type="text"
								id="lastname_input"
								placeholder="Apellidos"
								value={lastname}
								onChange={e => setLastname(e.target.value)}
							/>
						</div>
						<div className="row mb-2 d-block">
							<label htmlFor="email_input" className="form-label">
								Correo electrónico
							</label>
							<input
								className="d-block w-100 p-2 signUpBox"
								type="email"
								id="email_input"
								placeholder="correo@ejemplo.com"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>

						<div className="row mb-2 d-block">
							<label htmlFor="password_input" className="form-label">
								Contraseña
							</label>
							<input
								className="d-block w-100 p-2 signUpBox"
								type="password"
								id="password_input"
								placeholder="Digita tu contraseña"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="row mb-0 d-block">
							<label htmlFor="password_input" className="form-label">
								Confirmar contraseña
							</label>
							<input
								className="d-block w-100 p-2 signUpBox"
								type="password"
								id="password_input"
								placeholder="Confirmar contraseña"
								value={confirmpassword}
								onChange={e => setConfirmPassword(e.target.value)}
							/>
						</div>
						<div className="row my-1 d-flex justify-content-center">
							<p>
								<div>
									<input type="checkbox" id="agree" onChange={checkboxHandler} />
									<label htmlFor="agree">
										{" "}
										<small className="ml-1"> Acepto </small>
									</label>
									<a href="#terms" data-toggle="modal" className="text-info">
										<small> Términos y Condiciones</small>
									</a>
									<div
										className="modal fade"
										id="terms"
										data-bs-backdrop="static"
										data-bs-keyboard="false"
										tabIndex="-1"
										aria-labelledby="staticBackdropLabel"
										aria-hidden="true">
										<div className="modal-dialog">
											<div className="">
												<div className="modal-header text-white bg-darkcoral">
													<h4 className="modal-title" id="staticBackdropLabel">
														Términos y Condiciones
													</h4>
													<button
														type="button"
														className="row btn btn-secondary btn-sm m-1"
														data-bs-dismiss="modal">
														<span aria-hidden="true">Cerrar</span>
													</button>
												</div>
											</div>

											<div className="modal-dialog-scrollable">
												<div className="modal-content">
													<div className="modal-body text-dark">
														<h2>
															<strong>POLÍTICA DE PRIVACIDAD</strong>
														</h2>{" "}
														<span className="termsAndConditions">
															El presente Política de Privacidad establece los términos en
															que Como Hago usa y protege la información que es
															proporcionada por sus usuarios al momento de utilizar su
															sitio web. Esta compañía está comprometida con la seguridad
															de los datos de sus usuarios. Cuando le pedimos llenar los
															campos de información personal con la cual usted pueda ser
															identificado, lo hacemos asegurando que sólo se empleará de
															acuerdo con los términos de este documento.
														</span>
														<br />
														<br />
														<span>
															Sin embargo esta Política de Privacidad puede cambiar con el
															tiempo o ser actualizada por lo que le recomendamos y
															enfatizamos revisar continuamente esta página para
															asegurarse que está de acuerdo con dichos cambios.
															Información que es recogida Nuestro sitio web podrá recoger
															información personal por ejemplo: Nombre, información de
															contacto como su dirección de correo electrónica e
															información demográfica. Así mismo cuando sea necesario
															podrá ser requerida información específica para procesar
															algún pedido o realizar una entrega o facturación. Uso de la
															información recogida Nuestro sitio web emplea la información
															con el fin de proporcionar el mejor servicio posible,
															particularmente para mantener un registro de usuarios, de
															pedidos en caso que aplique, y mejorar nuestros productos y
															servicios.{" "}
														</span>
														<br />
														<br />
														<span>
															Es posible que sean enviados correos electrónicos
															periódicamente a través de nuestro sitio con ofertas
															especiales, nuevos productos y otra información publicitaria
															que consideremos relevante para usted o que pueda brindarle
															algún beneficio, estos correos electrónicos serán enviados a
															la dirección que usted proporcione y podrán ser cancelados
															en cualquier momento. Como Hago está altamente comprometido
															para cumplir con el compromiso de mantener su información
															segura. Usamos los sistemas más avanzados y los actualizamos
															constantemente para asegurarnos que no exista ningún acceso
															no autorizado. Cookies Una cookie se refiere a un fichero
															que es enviado con la finalidad de solicitar permiso para
															almacenarse en su ordenador, al aceptar dicho fichero se
															crea y la cookie sirve entonces para tener información
															respecto al tráfico web, y también facilita las futuras
															atletico de madrid noticias recurrente.{" "}
														</span>
														<br />
														<br />
														<span>
															Otra función que tienen las cookies es que con ellas las web
															pueden reconocerte individualmente y por tanto brindarte el
															mejor servicio personalizado de su web. Nuestro sitio web
															emplea las cookies para poder identificar las páginas que
															son visitadas y su frecuencia. Esta información es empleada
															únicamente para análisis estadístico y después la
															información se elimina de forma permanente. Usted puede
															eliminar las cookies en cualquier momento desde su
															ordenador.{" "}
														</span>
														<br />
														<br />
														<span>
															Sin embargo las cookies ayudan a proporcionar un mejor
															servicio de los sitios web, estás no dan acceso a
															información de su ordenador ni de usted, a menos de que
															usted así lo quiera y la proporcione directamente. Usted
															puede aceptar o negar el uso de cookies, sin embargo la
															mayoría de navegadores aceptan cookies automáticamente pues
															sirve para tener un mejor servicio web. También usted puede
															cambiar la configuración de su ordenador para declinar las
															cookies.{" "}
														</span>
														<br />
														<br />
														<span>
															Si se declinan es posible que no pueda utilizar algunos de
															nuestros servicios. Enlaces a Terceros Este sitio web
															pudiera contener en laces a otros sitios que pudieran ser de
															su interés. Una vez que usted de clic en estos enlaces y
															abandone nuestra página, ya no tenemos control sobre al
															sitio al que es redirigido y por lo tanto no somos
															responsables de los términos o privacidad ni de la
															protección de sus datos en esos otros sitios terceros.
															Dichos sitios están sujetos a sus propias políticas de
															privacidad por lo cual es recomendable que los consulte para
															confirmar que usted está de acuerdo con estas.{" "}
														</span>
														<br />
														<br />
														<span>
															Control de su información personal En cualquier momento
															usted puede restringir la recopilación o el uso de la
															información personal que es proporcionada a nuestro sitio
															web. Cada vez que se le solicite rellenar un formulario,
															como el de alta de usuario, puede marcar o desmarcar la
															opción de recibir información por correo electrónico.{" "}
														</span>
														<br />
														<br />
														<span>
															En caso de que haya marcado la opción de recibir nuestro
															boletín o publicidad usted puede cancelarla en cualquier
															momento. Esta compañía no venderá, cederá ni distribuirá la
															información personal que es recopilada sin su
															consentimiento, salvo que sea requerido por un juez con un
															orden judicial. Como Hago Se reserva el derecho de cambiar
															los términos de la presente Política de Privacidad en
															cualquier momento.
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</p>
						</div>
						<div className="row my-2">
							<button
								type="button"
								disabled={!agree}
								className="btn btn-info botonhover"
								onClick={registrationHandler}>
								Regístrate
							</button>
						</div>
					</form>

					<div className="text-center mb-5">
						<small>¿Ya tienes cuenta?</small>
						<Link to={"/login"}>
							<small className="text-info"> Regresa, e inicia sesion</small>
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
			)}
		</div>
	);
};

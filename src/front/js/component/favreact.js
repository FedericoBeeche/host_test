import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { misFavoritos } from "../../img/navbarBtn/misFavoritos.png";

import "../../styles/demo.scss";

export const FavReact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle
					style={{
						background: "none",
						border: "none",
						boxShadow: "none"
					}}
					bsPrefix="p-0">
					<img className="navbar-icon buttonhover" src="misFavoritos.png" />
				</Dropdown.Toggle>
				<Dropdown.Menu
					style={{
						//background: "#fcdada",
						background: "#eeeeee",
						border: "none",
						boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
					}}>
					{store.favorites.length == 0 ? (
						<Dropdown.Item>
							<div className="d-flex justify-content-between">
								<Link style={{ textDecoration: "none", color: "#2b2d4a" }} to="/">
									No ha seleccionado favoritos
								</Link>
							</div>
						</Dropdown.Item>
					) : (
						store.favorites.map((item, index) => {
							return (
								<Dropdown.Item key={index}>
									<div className="d-flex justify-content-between">
										<Link
											style={{ textDecoration: "none", color: "#2b2d4a" }}
											to={item.tutorial_link}>
											{item.tutorial_title}
										</Link>
										<span
											className="float-end ml-3 text-darkblue"
											onClick={() => actions.deleteFavorites(index)}>
											<i className="fas fa-trash-alt" />
										</span>
									</div>
								</Dropdown.Item>
							);
						})
					)}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

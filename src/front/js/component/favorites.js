import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="dropdown">
			<a
				// className="btn dropdown-toggle" remove classes to prevent default behaviour
				className=""
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				<i className=" far fa-heart userProfileIcon" />{" "}
				{/* <span className="badge badge-secondary">{store.favorites.length}</span> */}
			</a>

			<div className="dropdown-menu">
				{store.favorites.length == 0 ? (
					<a className="dropdown-item text-center">(empty)</a>
				) : (
					store.favorites.map((item, index) => {
						// filter returns an array, so we have to specify the position to get the id value from filteredResults

						return (
							<a className="dropdown-item" key={index}>
								{item.tutorial_title}
								<span onClick={() => actions.deleteFavorites(index)}>
									<i className="fas fa-trash-alt float-right" />
								</span>
							</a>
						);
					})
				)}
			</div>
		</div>
	);
};

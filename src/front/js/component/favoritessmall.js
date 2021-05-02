import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const FavoritesSmall = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-coral">
			<a
				// className="btn dropdown-toggle" remove classes to prevent default behaviour
				className="text-coral p-0"
				href="#"
				role="button"
				id="dropdownMenuLink"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Mis Favoritos
				{/* <span className="badge badge-secondary">{store.favorites.length}</span> */}
			</a>

			<div className="dropdown-menu">
				{store.favorites.length == 0 ? (
					<a className="dropdown-item text-center">(empty)</a>
				) : (
					store.favorites.map((item, index) => {
						let filteredResults = store.favorites_raw.filter(function(currentElement) {
							return currentElement.item_id == item.id && currentElement.item_type == item.item_type;
						});

						// filter returns an array, so we have to specify the position to get the id value from filteredResults

						return (
							<a className="dropdown-item" key={index}>
								<span onClick={() => actions.removeFavorite(filteredResults[0].id)}>
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

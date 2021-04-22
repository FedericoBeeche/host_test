import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const BAC_SINPE = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>I made it!</h1>
		</div>
	);
};

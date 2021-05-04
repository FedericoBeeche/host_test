import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles"; //$ npm install @material-ui/core
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton"; //$ npm install @material-ui/icons

const useStyles = makeStyles(theme => ({
	toTop: {
		zIndex: 2,
		position: "fixed",
		bottom: "5.8vh",
		backgroundColor: "#f2818150", //last two digits of hex define transparency --> 50% in this case
		color: "8f3749",
		"&:hover, &.Mui-focusVisible": {
			transition: "0.4s",
			color: "#8f3749",
			backgroundColor: "#DCDCDC"
		},
		right: "5%"
	}
}));

export const Scroll = ({ showBelow }) => {
	const classes = useStyles();

	const [show, setShow] = useState(showBelow ? false : true);

	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true);
		} else {
			if (show) setShow(false);
		}
	};

	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	});

	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behaviour: "smooth" });
	};

	return (
		<div>
			{show && (
				<IconButton onClick={handleClick} className={classes.toTop}>
					<ExpandLessIcon />
				</IconButton>
			)}
		</div>
	);
};

Scroll.propTypes = {
	showBelow: PropTypes.number
};

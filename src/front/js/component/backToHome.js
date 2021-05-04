import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import { makeStyles } from "@material-ui/core/styles"; //$ npm install @material-ui/core
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton"; //$ npm install @material-ui/icons
import { useHistory } from "react-router-dom"; // hook used to redirect to another route
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	toTop: {
		zIndex: 2,
		position: "fixed",
		bottom: "90px",
		backgroundColor: "#f2818150", //last two digits of hex define transparency --> 50% in this case
		color: "8f3749",
		"&:hover, &.Mui-focusVisible": {
			transition: "0.4s",
			color: "#fcfff8",
			backgroundColor: "#DCDCDC"
		},
		left: "5%"
	}
}));

const BootstrapButton = withStyles({
	root: {
		boxShadow: "none",
		textTransform: "none",
		fontSize: 16,
		padding: "6px 12px",
		border: "none", //"1px solid",
		lineHeight: 1.5,
		backgroundColor: "#f2818150",
		borderColor: "#f28181",
		color: "#2b2d4a",
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		"&:hover": {
			backgroundColor: "#8f3749",
			borderColor: "#0062cc",
			boxShadow: "none"
		},
		"&:active": {
			boxShadow: "none",
			backgroundColor: "#0062cc",
			borderColor: "#005cbf"
		},
		"&:focus": {
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
		}
	}
})(Button);

// const useStyles = makeStyles(theme => ({
// 	margin: {
// 		margin: theme.spacing(1)
// 	}
// }));

// const theme = createMuiTheme({
// 	palette: {
// 		primary: green
// 	}
// });

export const BackToHome = ({ showBelow }) => {
	const classes = useStyles();

	const [show, setShow] = useState(showBelow ? false : true);
	const history = useHistory();

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
		history.push("/");
	};

	return (
		<div>
			{show && (
				<BootstrapButton
					variant="contained"
					color="primary"
					disableRipple
					className={classes.toTop}
					onClick={handleClick}>
					Volver al menú principal
				</BootstrapButton>
			)}
		</div>
	);
};

BackToHome.propTypes = {
	showBelow: PropTypes.number
};

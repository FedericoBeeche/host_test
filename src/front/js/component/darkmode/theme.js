import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#fcfff8",
	fontColor: "#000"
};

export const darkTheme = {
	body: "#323232",
	fontColor: "#fcfff8"
};

export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${props => props.theme.body};

	}

`;

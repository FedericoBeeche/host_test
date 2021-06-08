import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#fcfff8",
	fontColor: "#2b2d4a"
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

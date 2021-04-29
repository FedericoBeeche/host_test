import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import styled, { ThemeProvider } from "styled-components";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { ChangePass } from "./pages/changepass";
import { RestorePass } from "./pages/restorepass";
import { BAC_SINPE } from "./pages/guide_BACSINPEMovil";
import { ZoomCalls } from "./pages/guide_ZoomCalls";
import { WhatsAppCalls } from "./pages/guide_WhatsAppCalls";
import injectContext from "./store/appContext";
import { lightTheme, darkTheme, GlobalStyles } from "./component/darkmode/theme";
import { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const StyledApp = styled.div`
	color: ${props => props.theme.fontColor};
`;

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	// const themeToggler = () => {
	// 	theme === "light" ? setTheme("dark") : setTheme("light");
	// };

	return (
		<ThemeProvider theme={store.theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<StyledApp>
				<div className="d-flex flex-column h-100">
					<BrowserRouter basename={basename}>
						<ScrollToTop>
							<Navbar />
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/login">
									<Login />
								</Route>
								<Route exact path="/signup">
									<SignUp />
								</Route>
								<Route exact path="/changepass">
									<ChangePass />
								</Route>
								<Route exact path="/restorepass">
									<RestorePass />
								</Route>
								<Route exact path="/guide_BACSINPEMovil">
									<BAC_SINPE />
								</Route>
								<Route exact path="/guide_ZoomCalls">
									<ZoomCalls />
								</Route>
								<Route exact path="/guide_WhatsAppCalls">
									<WhatsAppCalls />
								</Route>
								<Route exact path="/single/:theid">
									<Single />
								</Route>
								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
							<Footer />
						</ScrollToTop>
					</BrowserRouter>
				</div>
			</StyledApp>
		</ThemeProvider>
	);
};

export default injectContext(Layout);

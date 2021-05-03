import { lightTheme, darkTheme } from "../component/darkmode/theme";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			tutorials: [],
			token: null,
			theme: "light",
			favorites: [],
			title1: "Transferencias SINPE BAC",
			title2: "Videollamadas por WhatsApp",
			title3: "Mi primer videollamada en Zoom (para celular)",
			url: "https://3001-coral-bear-2qu9ixmh.ws-us04.gitpod.io" // change this! do NOT add slash '/' at the end
		},
		actions: {
			login: async (email, password) => {
				const store = getStore();

				const URL = `${store.url}/api/token`;
				const CONFIG = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

				try {
					const resp = await fetch(URL, CONFIG);
					if (resp.status !== 200) {
						alert("There was an error during authentication");
						return false;
					}

					const data = await resp.json();
					console.log("Token created from back-end", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				} catch (error) {
					console.error("CREATE Token error: ", error);
				}
			},

			themeToggler: () => {
				const store = getStore();
				store.theme === "light" ? setStore({ theme: "dark" }) : setStore({ theme: "light" });
				//store.theme === "light" ? setTheme("dark") : setTheme("light");
				console.log(store.theme);
			},

			storeSessionToken: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},

			logout: () => {
				sessionStorage.removeItem("token");
				//sessionStorage.removeItem("current_username");
				//setStore({ token: null, favorites: [], current_username: "" });
				setStore({ token: null });
			},

			getTutorials: () => {
				const store = getStore();

				fetch(`${store.url}/api/tutorial`)
					.then(resp => {
						console.log("GET tutorials request: ", resp.ok);
						resp.status >= 200 && resp.status < 300
							? console.log("GET tutorials successful, status: ", resp.status)
							: console.error("GET tutorials failed, status: ", resp.status);
						return resp.json();
					})
					.then(data => {
						setStore({ tutorials: data, loading: false });
						console.log("Tutorials array: ", data);
					})
					.catch(error => console.error("GET tutorials error: ", error));
			},

			handleOnSelectTutorial: item => {
				console.log("Selected tutorial on search", item);
				setStore({ tutorials: [item] });
			},

			handleOnFocusTutorial: () => {
				console.log("Focused");
				getActions().getTutorials();
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				//fetch(process.env.BACKEND_URL + "/api/hello") // global variable process.env.BACKEND_URL is not working
				const store = getStore();
				fetch(`${store.url}/api/hello`)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//favorites
			addFavorite: item => {
				const store = getStore();

				const token = sessionStorage.getItem("token");

				const URL = `${store.url}/api/favorites`;
				const CONFIG = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					},
					body: JSON.stringify({
						title: item,
						link: " "
					})
				};

				fetch(URL, CONFIG)
					.then(resp => {
						if (resp.status === 200) return resp.json();
						else alert("There was some error while adding the favorite");
					})
					.then(data => {
						console.log("Favorite added to DB: ", data);
					})
					.catch(error => {
						console.error("CREATE Token error: ", error);
					});

				fetch(`${store.url}/api/favorites/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("dataresult", store);
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getFavorites: () => {
				const store = getStore();
				const token = sessionStorage.getItem("token");

				fetch(`${store.url}/api/favorites/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					}
				})
					.then(resp => {
						//console.log("respuesta", resp.json());
						return resp.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("dataresult", store);
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			deleteFavorites: index => {
				const store = getStore();
				const deleteId = store.favorites[index].id;
				let token = localStorage.getItem("token");
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
				fetch(`${store.url}/api/favorites/${deleteId}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					}
				}).then(resp => {
					//console.log("respuesta", resp.json());
					return resp.json();
				});
			}
		}
	};
};

export default getState;

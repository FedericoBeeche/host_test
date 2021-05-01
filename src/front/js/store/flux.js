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
			url: "https://3001-amaranth-crab-eik3u2z1.ws-us04.gitpod.io" // change this! do NOT add slash '/' at the end
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
				console.log(token);
				const tokenPayload = jwt_decode(token).sub; // jwt_decode returns the jwt object payload. Using "jwt debugger" we can see that .sub retuns the id in this case
				console.log("ID obtained from token with jwt_decode: ", tokenPayload);
				console.log("Item passed as parameter to addFavorite(): ", item);

				let filteredResults = store.favorites.filter(function(currentElement) {
					// the current value is an object, so you can check on its properties
					return currentElement.id == item.id && currentElement.item_type == item.item_type;
				});

				console.log("Filtered result: ", filteredResults);

				if (filteredResults.length == 0) {
					const URL = `${store.url}/favorite`;
					const CONFIG = {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token
						},
						body: JSON.stringify({
							item_id: item.id,
							item_type: item.item_type,
							user_id: tokenPayload
						})
					};

					fetch(URL, CONFIG)
						.then(resp => {
							if (resp.status === 200) return resp.json();
							else alert("There was some error while adding the favorite");
						})
						.then(data => {
							console.log("Favorite added to DB: ", data);
							getActions().getFavorites();
						})
						.then(() => getActions().getFavoritesRaw()) // added to allow deletion of items just added, otherwise a Refresh is needed
						.catch(error => {
							console.error("CREATE Token error: ", error);
						});
				} else alert("Item already added to favorites");
			},
			removeFavorite: favoriteId => {
				const store = getStore();

				const URL = `${store.url}/favorite/${favoriteId}`;
				const CONFIG = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token
					}
				};

				fetch(URL, CONFIG)
					.then(resp => {
						console.log("DELETE favorites request: ", resp.ok);
						resp.status >= 200 && resp.status < 300
							? console.log("DELETE favorites successful, status: ", resp.status)
							: console.error("DELETE favorites failed, status: ", resp.status);
						return resp.json();
					})
					.then(() => getActions().getFavorites()) // remember to use callback function, otherwise it wont work
					.then(() => getActions().getFavoritesRaw())
					.catch(error => console.error("DELETE favorites error: ", error));

				console.log("This is the URL to remove: ", URL);

				console.log("This the fav ID to remove: ", favoriteId);
			}
		}
	};
};

export default getState;

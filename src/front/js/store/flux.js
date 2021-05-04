import { lightTheme, darkTheme } from "../component/darkmode/theme";
import swal from "sweetalert"; // $ npm i sweetalert (to replace alerts by alerts with styles)
import jwt_decode from "jwt-decode"; // $ npm install jwt-decode (library to decode jwt)

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
            current_username: "",

            url: "https://3001-coffee-goldfish-9abudip6.ws-us03.gitpod.io" // change this! do NOT add slash '/' at the end
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
                    if (resp.status == 401) {
                        //alert("Hubo un error al iniciar sesión");
                        swal({
                            //title: "Good job!",
                            text: "Las credenciales no son válidas",
                            icon: "error",
                            timer: "3000",
                            button: {
                                visible: true,
                                text: "ok"
                            }
                        });
                        return false;
                    }
                    if (resp.status !== 200) {
                        //alert("Hubo un error al iniciar sesión");
                        swal({
                            //title: "Good job!",
                            text: "Hubo un error al iniciar sesión",
                            icon: "error",
                            timer: "3000",
                            button: {
                                visible: true,
                                text: "ok"
                            }
                        });
                        return false;
                    }

                    const data = await resp.json();
                    console.log("Token created from back-end", data);
                    sessionStorage.setItem("token", data.access_token);
                    //alert("Bienvenido");
                    swal({
                        title: "¡Hola!",
                        text: "Has iniciado sesión",
                        icon: "success",
                        timer: "2000"
                    });
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
                swal({
                    title: "¡Hasta pronto!",
                    text: "Has cerrado sesión",
                    icon: "success",
                    timer: "2000"
                });
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
            addFavorite: (title, link) => {
                const store = getStore();
                let favoriteTitleArray = store.favorites.map(obj => obj.tutorial_title); // turn favorites object into name array because includes method only works with arrays
                let isFavorite = favoriteTitleArray.includes(title);

                if (isFavorite) {
                    //alert("El item ya fue agregado a Favoritos");
                    swal({
                        //title: "Good job!",
                        text: "El item ya fue agregado a Favoritos",
                        icon: "info",
                        timer: "4000",
                        button: {
                            visible: true,
                            text: "ok"
                        }
                    });
                    return false;
                } else {
                    const URL = `${store.url}/api/favorites`;
                    const CONFIG = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + store.token
                        },
                        body: JSON.stringify({
                            title: title,
                            link: link
                        })
                    };

                    fetch(URL, CONFIG)
                        .then(resp => {
                            if (resp.status === 200) return resp.json();
                            else {
                                swal({
                                    //title: "Good job!",
                                    text: "Hubo un error al agregar a favoritos",
                                    icon: "error",
                                    timer: "4000",
                                    button: {
                                        visible: true,
                                        text: "ok"
                                    }
                                });
                            }
                        })
                        .then(data => {
                            console.log("Favorite added to DB: ", data);
                            getActions().getFavorites();
                        })
                        .catch(error => {
                            console.error("CREATE Token error: ", error);
                        });
                }
            },

            getFavorites: () => {
                const store = getStore();
                const token = sessionStorage.getItem("token");
                if (store.token && store.token != "" && store.token != undefined) {
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
                            console.log("Get Favorites", store.favorites);
                        })
                        .catch(err => {
                            console.log("error", err);
                        });
                }
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
            },

            getCurrentUser: () => {
                // add this function to login.js
                const store = getStore();

                if (store.token && store.token != "" && store.token != undefined) {
                    const current_user_id = jwt_decode(store.token).sub; // jwt_decode returns the jwt object payload. Using "jwt debugger" we can see that .sub retuns the id in this case
                    console.log("Current user IDs from token with jwt_decode: ", current_user_id);

                    fetch(`${store.url}/api/user/${current_user_id}`)
                        .then(resp => {
                            console.log("GET current user request: ", resp.ok);
                            resp.status >= 200 && resp.status < 300
                                ? console.log("GET current user successful, status: ", resp.status)
                                : console.error("GET current user failed, status: ", resp.status);
                            return resp.json();
                        })
                        .then(data => {
                            sessionStorage.setItem("current_username", data.name);
                            setStore({ current_username: data.name, loading: false });
                            console.log("Current user: ", data);
                        })
                        .catch(error => console.error("GET current user error: ", error));
                }
            },

            storeSessionUser: () => {
                const store = getStore();
                const current_username = sessionStorage.getItem("current_username");
                if (store.token && store.token != "" && store.token != undefined)
                    setStore({ current_username: current_username });
            }
        }
    };
};

export default getState;

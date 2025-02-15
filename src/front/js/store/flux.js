

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			/* changeColor: (index, color) => {
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
			}, */
			
			userLogin: async (email, password) => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",{
						method: 'POST',
						headers: {"Content-type" : "application/json"},
						body: JSON.stringify({email, password})})

					const data = await resp.json()

					if (!resp.ok) {
						throw new Error(data.msg || "Error al iniciar sesión");
					}

					sessionStorage.setItem("accessToken", data.token);
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error al iniciar seccion", error)
				    throw error;
				}
			},

			userRegister: async(email, password) => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/register",{
						method:"POST",
						headers: {
							"Content-type" : "application/json"

						},
						body: JSON.stringify({ email, password })
					});
					
					const data = await resp.json();

					if (!resp.ok) {
						throw new Error(data.msg || "Failed to register.");
					}
					
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Failed to register.", error)
					throw error;
				}
			},

			userLogout: () => {
				try {
					sessionStorage.removeItem("accessToken");
					setStore({ user: null }); 
				} catch (error) {
					console.error("Error al intentar cerrar sesión:", error);
					throw error;
				}
			},

			userPrivate: async () =>{
				try {
					const token = sessionStorage.getItem("accessToken")
					if (!token) {
						throw new Error ("Access token missing.");
					}
					const resp = await fetch(process.env.BACKEND_URL + "/api/private", {
						method : "GET",
						headers: {
							Authorization: `Bearer ${token}`
						}
					});

					const data = await resp.json();

					if(!resp.ok){
						throw new Error(data.msg || "Failed to obtain protected data.");
					}

					const {user} = getStore();

					if(JSON.stringify(user) !== JSON.stringify(data)){
						setStore({user: data});
						console.log("User data updated on the storage.", data)
					}
				} catch (error) {
					console.error("Failed to obtain protected data.", error);
					throw error;
				}
			}



		}
	};
};

export default getState;

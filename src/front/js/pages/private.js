import React, {useContext, useEffect} from "react";
import { Navbar } from "../component/navbar";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {

	const navigate = useNavigate()

	const{actions, store} = useContext(Context)

	useEffect(() => {
		const isLoggedIn = sessionStorage.getItem("accessToken")

		if (!isLoggedIn){
			navigate("/")
		} else {
			actions.userPrivate()
			.then(() => console.log("Ingresamos al ruta privada."))
			.catch(error => console.error("Fallo el ingreso a la ruta privada", error))
		}
	}, [actions, navigate]);

	const {user} = store;

	return (
		<>
		<Navbar />
		<div className="container-fluid text-center">
            <h1 className="mt-5 bg-ligth rounded border">
				{user && (
					<p>Bienvenido, {user.email}, Gracia por hacer login</p>
				)}
			</h1>
		</div>
		</>
	);
};
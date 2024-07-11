import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { actions } = useContext(Context);

	const handleLogout = () => {
        try{
            actions.userLogout();
			alert("User logged out successfully.")   
                navigate("/")
        }
        catch(error){
            setError("Failed to log out.", error);
        }
    }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Vista privada</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary" onClick={handleLogout}>Log out</button>
					</Link>
				</div>
				{error && <div className="alert alert-danger" role="alert">{error}</div>}
			</div>
		</nav>
	);
};
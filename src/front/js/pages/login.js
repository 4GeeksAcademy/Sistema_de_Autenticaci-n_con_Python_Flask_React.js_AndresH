import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPasswor] = useState('')
    const [error, setError] = useState(null)
    const { actions } = useContext(Context);
            
    const handleLogin = async (e) => {
            e.preventDefault();
            try {
                const response = await actions.userLogin(email, password);
                if(response && response.token){
                        window.location.href = '/private';
                }
            } catch (error) {
                setError("Email o Contraseña es incorrecto")
            }
    }


	return (
		<>
        <div className="container py-3 mt-5 bg-light fw-bolder rounded">
            <h1 className="text-center h2">LOGIN</h1>
                <form onSubmit={handleLogin} className="p-5"> 
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" 
                        className="form-control"
                        onChange={(e) => setPasswor(e.target.value)}
                        id="exampleInputPassword1" />
                    </div>
                    <div className="h6 bg-danger text-center">{error}</div>
                    {error &&  <div className="h6 alert-danger text-center" role="alert">{error}</div>}
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <Link className="btn btn-warning border" to={'/'}>Go to home</Link>
        </div>
        </>
	);
};

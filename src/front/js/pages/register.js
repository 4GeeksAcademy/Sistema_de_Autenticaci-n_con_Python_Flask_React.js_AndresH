import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = () => {
	
    const [email, setEmail] = useState('')
    const [password, setPasswor] = useState('')
    const [error, setError] = useState(null)
    const { actions } = useContext(Context);

    const navigate = useNavigate()
    
    const handleRegister = async(e) => {
        e.preventDefault();
        try{
            const response = await actions.userRegister(email, password);
            if (response.email){        
                console.log("Usuario registrado con exito")        
                alert ("Usuario registrado")
                navigate("/")
            }
        }
        catch(error){
            setError("Oops el usuario no fue registrado Intentelo nuevamente...!");
        }
    }


	return (
         <div className="container py-3 mt-5 rounded fw-bolder bg-light">
                <h1 className="text-center h2">REGISTRATE</h1>
                <form className="p-5" onSubmit={handleRegister} >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                        onChange={(e) => setEmail(e.target.value)}  
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" 
                        onChange={(e) => setPasswor(e.target.value)}
                        className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit"  className="btn btn-primary">Register</button>
                </form>
                <Link className="btn btn-warning border" to={'/'}>Go to home</Link>
        </div>
	);
};

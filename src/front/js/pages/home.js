import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid py-5 text-center">
            <div className="row">
                <div className="col-12">
                    <h1>Bienvenido al sistema de registro de usuarios</h1>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <button type="button" onClick={() => navigate("/register")} className="btn btn-success me-5 btn-lg">Regístrate</button>
                    <button type="button" onClick={() => navigate("/login")} className="btn btn-primary btn-lg ">Inicia sesión</button>
                </div>
            </div>
        </div>
    );
};








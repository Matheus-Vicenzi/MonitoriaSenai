import React from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export default function LoginAutenticação() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />

      <div className="login-box">
        <h1>Você precisa fazer o Login!</h1>
        <Link to="/">
          <button type="submit" className="button-fieldAutent">
            Ir para o Login
          </button>
        </Link>
      </div>
    </div>
  );
}

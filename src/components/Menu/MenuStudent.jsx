import React from "react";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";

import LogoSenai from "../LogoSenai/LogoSenai";

import ListaMenuStudent from "./ListaMenuStudent";
import LoginAutenticação from "../LoginBox/LoginAutenticação";

export default function MenuStudent(props) {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";

  console.log(isAuthenticated);

  return (
    <div className="containerStudent">
      {isAuthenticated ? (
        <Menu
          lista={<ListaMenuStudent />}
          titulo="Seja Bem Vindo a Monitoria"
          logo={
            <LogoSenai
              url="/src/assets/imgs/logo-unisenai.png"
              alt="Logo UniSenai"
            />
          }
        />
      ) : (
        <>
          <LoginAutenticação />
        </>
      )}
    </div>
  );
}

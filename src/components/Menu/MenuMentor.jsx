import React from "react";
import Menu from "./Menu";
import LogoSenai from "../LogoSenai/LogoSenai";
import LoginAutenticação from "../LoginBox/LoginAutenticação";

import ListaMenuMentor from "./ListaMenuMentor";

export default function MenuMentor(props) {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";

  console.log(isAuthenticated);
  return (
    <div className="containerMentor">
      {isAuthenticated ? (
        <Menu
          lista={<ListaMenuMentor />}
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

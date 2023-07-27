import React from "react";
import Menu from "./Menu";

import LogoSenai from "../LogoSenai/LogoSenai";

import ListaMenuStudent from "./ListaMenuStudent";

export default function MenuStudent(props) {
  return (
    <div className="containerStudent">
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
    </div>
  );
}

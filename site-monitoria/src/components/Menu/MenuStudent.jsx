import React from "react";
import Menu from "./Menu";

import LogoSenai from "../LogoSenai/LogoSenai";

import ListaMenuStudent from "./ListaMenuStudent";

export default function MenuStudent(props) {
  return (
    <div>
      <Menu
        lista={<ListaMenuStudent />}
        titulo="Seja Bem Vindo a Monitoria"
        imagem={
          <LogoSenai
            url="/src/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
      />
    </div>
  );
}

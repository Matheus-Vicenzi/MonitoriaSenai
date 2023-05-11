import React from "react";
import Menu from "./Menu";
import LogoSenai from "../LogoSenai/LogoSenai";

import ListaMenuMentor from "./ListaMenuMentor";

export default function MenuMentor(props) {
  return (
    <div>
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
    </div>
  );
}

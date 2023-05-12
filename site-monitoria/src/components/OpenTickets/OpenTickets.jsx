import React from "react";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";

export default function OpenTickets() {
  return (
    <div>
      <Menu
        lista={<ListaMenuStudent />}
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

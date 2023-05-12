import React from "react";
import ListaMenuMentor from "../Menu/ListaMenuMentor";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";

export default function ScheduleMentor() {
  return (
    <div>
      <Menu
        lista={<ListaMenuMentor />}
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

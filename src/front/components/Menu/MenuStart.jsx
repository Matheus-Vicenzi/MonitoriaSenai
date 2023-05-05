import React from "react";
import MenuPrincipal from "./Menu";
import LogoSenai from "../LogoSenai/LogoSenai";

export default function MenuPrincipalInicio(props) {
  return (
    <div className="menuInicio">
      <MenuPrincipal
        titulo="Seja Bem Vindo a Monitoria"
        logo={
          <LogoSenai
            url="/src/front/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
      />
    </div>
  );
}

import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import LogoSenai from "../LogoSenai/LogoSenai";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import Inputs from "../Inputs/Inputs";
import "./Recover.css";
export default function Recover() {
  return (
    <>
      <Link to="/">
        <ArrowBackIosIcon className="voltar" />
      </Link>

      <LogoSenai
        url="/src/front/assets/imgs/logo-unisenai.png"
        alt="Logo UniSenai"
      />

      <div className="login-box">
        <h1>Recuperar Senha</h1>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Seu E-mail" icon={<MailRoundedIcon />} />
          <button className="button-fieldR">RECUPERAR</button>

          <p className="registre">
            <Link to="/RecoverPassword"> Pass</Link>
          </p>
        </div>
      </div>
    </>
  );
}

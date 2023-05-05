import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import LogoSenai from "../LogoSenai/LogoSenai";
import InputSenha from "../Inputs/InputSenha";
import LockIcon from "@mui/icons-material/Lock";
import "./Recover.css";

export default function RecoverPassword() {
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
          <InputSenha name="Sua Nova Senha" icon={<LockIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <InputSenha name="Confirme sua Senha" icon={<LockIcon />} />
        </div>
        <button className="button-fieldR">RECUPERAR</button>
      </div>
    </>
  );
}

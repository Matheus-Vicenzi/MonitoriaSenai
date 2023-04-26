import React from "react";
import "./Register.css";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Input from "../Inputs/Inputs";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InputSenha from "../Inputs/InputSenha";
import LogoSenai from "../LogoSenai/LogoSenai";
import { Link } from "react-router-dom";
import Inputs from "../Inputs/Inputs";

export default function Register() {
  return (
    <>
      <Link to="/">
        <ArrowBackIosIcon className="voltar" />
      </Link>

      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />

      <div className="login-box">
        <h1>Crie sua Conta</h1>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Seu E-mail" icon={<MailRoundedIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Seu Nome" icon={<PersonIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Seu Telefone" icon={<CallIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Seu Curso" icon={<MenuBookIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Período do Curso" icon={<QueryBuilderIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <InputSenha name="Sua Senha" />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <InputSenha name="Confirme sua Senha" />
        </div>

        <hr />

        <button className="button-field">CADASTRAR</button>

        <p className="termos">
          Ao se cadastrar, você aceita os{" "}
          <span>
            Termos de <br /> Uso
          </span>{" "}
          e a <span>Politica de Privacidade.</span>
        </p>
      </div>
    </>
  );
}

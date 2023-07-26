import React from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Student.css";
import Inputs from "../Inputs/Inputs";

export default function Student() {
  return (
    <div className="containerStudentPage">
      <Menu
        lista={<ListaMenuStudent />}
        logo={
          <LogoSenai
            url="/src/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
        titulo="Dados Pessoais"
        conteudo={
          <>
            <Inputs
              name="name"
              nameLabel="Nome"
              icon={<PersonIcon />}
              width="80%"
              disabled="disabled"
            />

            <Inputs
              name="phone"
              nameLabel="Telefone"
              icon={<CallIcon />}
              width="80%"
              disabled="disabled"
            />

            <Inputs
              name="email"
              nameLabel="Email"
              icon={<MenuBookIcon />}
              width="80%"
              disabled="disabled"
            />
          </>
        }
      />
    </div>
  );
}

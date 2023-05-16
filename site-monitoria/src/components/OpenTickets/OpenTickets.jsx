import React from "react";
import "./OpenTickets.css";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import { useState } from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import PersonIcon from "@mui/icons-material/Person";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArticleIcon from "@mui/icons-material/Article";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SelectMaior from "../Select/SelectMaior";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Menu from "../Menu/Menu";
import { Input } from "@mui/material";
import InputsLittle from "../Inputs/InputsLittle";

export default function OpenTickets(props) {
  const [value, setValue] = useState();
  return (
    <div className="">
      <Menu
        lista={<ListaMenuStudent />}
        logo={
          <LogoSenai
            url="/src/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
        titulo="Abertura de Monitoria"
        conteudo={
          <>
            <InputsLittle
              name="Assunto da Monitoria"
              icon={<ArticleIcon />}
              className="openTicket"
            />
            <SelectMaior icon={<AutoStoriesIcon />} name="Disciplina" />
            <SelectMaior icon={<PersonIcon />} name="Monitor" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DemoItem label="">
                  <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <SelectMaior icon={<AccessTimeIcon />} name="Horário" />
            <button className="button-field">Agendar</button>
          </>
        }
      />
    </div>
  );
}

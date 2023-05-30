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
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SelectMaior from "../Select/SelectBigger";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Menu from "../Menu/Menu";
import TextAreaTicket from "../TextAreaTicket/TextAreaTicket";

export default function OpenTickets(props) {
  const [value, setValue] = useState();
  return (
    <div className="containerOpenTickets">
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
            <TextAreaTicket width="30rem" />
            <button className="buttonOpen">Agendar</button>
          </>
        }
      />
    </div>
  );
}

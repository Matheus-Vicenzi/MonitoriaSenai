import React from "react";
import Menu from "./Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LogoSenai from "../LogoSenai/LogoSenai";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddIcon from "@mui/icons-material/Add";

export default function MenuStudent(props) {
  return (
    <div>
      <Menu
        lista={["Abrir Chamado", "Chamados", "Aluno", "Sair"].map(
          (text, index) => (
            <ListItem key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/">{index == 0 && <AddIcon />}</Link>
                  <Link to="/ViewTickets">
                    {index == 1 && <HeadsetMicIcon />}
                  </Link>
                  <Link to="/">{index == 2 && <PersonIcon />}</Link>
                  <Link to="/">{index == 3 && <ExitToAppIcon />}</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
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

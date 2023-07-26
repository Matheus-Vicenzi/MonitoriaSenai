import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";

export default function ListaMenuStudent() {
  return (
    <div>
      {["Abrir Chamado", "Chamados", "Aluno", "Sair"].map((text, index) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/OpenTickets">
                {index == 0 && <AddIcon />} {index == 0 ? text : ""}
              </Link>
              <Link to="/ViewTicketsStudent">
                {index == 1 && <HeadsetMicIcon />} {index == 1 ? text : ""}
              </Link>
              <Link to="/Student">
                {index == 2 && <PersonIcon />} {index == 2 ? text : ""}{" "}
              </Link>
              <Link to="/">
                {index == 3 && <ExitToAppIcon />} {index == 3 ? text : ""}
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}

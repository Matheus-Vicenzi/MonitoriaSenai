import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddIcon from "@mui/icons-material/Add";
export default function ListaMenuMentor() {
  return (
    <div>
      lista=
      {["Curso/Disciplina", "Agenda", "Chamados", "Sair"].map((text, index) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/RegisterCourseDiscipline">
                {index == 0 && <AddIcon />}
              </Link>
              <Link to="/ViewTickets">{index == 1 && <HeadsetMicIcon />}</Link>
              <Link to="/">{index == 2 && <PersonIcon />}</Link>
              <Link to="/">{index == 3 && <ExitToAppIcon />}</Link>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}

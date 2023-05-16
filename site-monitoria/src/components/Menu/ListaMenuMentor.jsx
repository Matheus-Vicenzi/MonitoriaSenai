import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ListItemText from "@mui/material/ListItemText";
import TodayIcon from "@mui/icons-material/Today";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcon from "@mui/icons-material/Add";
export default function ListaMenuMentor() {
  return (
    <div>
      {[
        "Curso/Disciplina",
        "Agenda",
        "Chamados",
        "Gerenciamento de Contas",
        "Sair",
      ].map((text, index) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/RegisterCourseDiscipline">
                {index == 0 && <AddIcon />}
              </Link>
              <Link to="/ScheduleMentor">{index == 1 && <TodayIcon />}</Link>
              <Link to="/ViewTicketsMentor">
                {index == 2 && <HeadsetMicIcon />}
              </Link>
              <Link to="/UserManagement">
                {index == 3 && <ManageAccountsIcon />}
              </Link>
              <Link to="/">{index == 4 && <ExitToAppIcon />}</Link>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}

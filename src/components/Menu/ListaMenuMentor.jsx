import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import TodayIcon from "@mui/icons-material/Today";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
export default function ListaMenuMentor() {
  const { id } = useParams();
  return (
    <div>
      {["Curso/Disciplina", "Agenda", "Sair"].map((text, index) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/RegisterCourseDiscipline">
                {index == 0 && <AddIcon />} {index == 0 ? text : ""}
              </Link>
              <Link to={`/ScheduleMentor/${id}`}>
                {index == 1 && <TodayIcon />} {index == 1 ? text : ""}
              </Link>

              <Link to="/">
                {index == 2 && <ExitToAppIcon />} {index == 2 ? text : ""}
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}

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
import { useParams } from "react-router-dom";

export default function ListaMenuStudent() {
  const { id } = useParams();
  return (
    <div>
      {["Abrir Chamado", "Chamados", "Aluno", "Sair"].map((text, index) => (
        <ListItem key={text}>
          <ListItemButton>
            <ListItemIcon>
              <Link to={`/OpenTickets/${id}`}>
                {index == 0 && <AddIcon />} {index == 0 ? text : ""}
              </Link>
              <Link to={`/ViewTicketsStudent/${id}`}>
                {index == 1 && <HeadsetMicIcon />} {index == 1 ? text : ""}
              </Link>
              <Link to={`/Student/${id}`}>
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

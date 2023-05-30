import React from "react";
import "./ScheduleMentor.css";
import Menu from "../Menu/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ModalSchedule from "../Modal.jsx/ModalSchedule";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TableRow from "@mui/material/TableRow";
import Inputs from "../Inputs/Inputs";
import Paper from "@mui/material/Paper";
import LogoSenai from "../LogoSenai/LogoSenai";
import ListaMenuMentor from "../Menu/ListaMenuMentor";

export default function ScheduleMentor(props) {
  return (
    <div className="VisualizarChamados">
      <Menu
        lista={<ListaMenuMentor />}
        logo={
          <LogoSenai
            url="/src/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
        titulo="Agenda Monitor"
        conteudo={
          <TableContainer
            component={Paper}
            style={{ backgroundColor: "#E7EFF7" }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <h3>Nome Aluno</h3>
                  </TableCell>
                  <TableCell align="center">
                    <h3>Data de Abertura e Horário</h3>
                  </TableCell>
                  <TableCell align="center">
                    <h3>Ação</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}>
                  <TableCell align="center">sdsd</TableCell>
                  <TableCell align="center">sdsd</TableCell>
                  <TableCell align="center" className="tablePerfil">
                    <ModalSchedule
                      titulo="Cadastro de Curso"
                      input={
                        <>
                          <Inputs name="Disciplina" icon={<MenuBookIcon />} />
                          <Inputs name="Curso" icon={<MenuBookIcon />} />
                        </>
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        }
      />
    </div>
  );
}

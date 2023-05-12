import React, { useState } from "react";
import "./ViewTickets.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";
import ListaMenuMentor from "../Menu/ListaMenuMentor";

export default function ViewTicketsMentor() {
  return (
    <>
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
                      <h3>Data de Abertura e Horário</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Nome do Aluno</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Disciplina</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Assunto</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Status</h3>
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
                    <TableCell align="center">sdsdsd</TableCell>
                    <TableCell align="center">sdsdsdsd</TableCell>
                    <TableCell align="center">ok</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          }
        />
      </div>
    </>
  );
}

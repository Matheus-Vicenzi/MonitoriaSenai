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
import ListaMenuStudent from "../Menu/ListaMenuStudent";

export default function ViewTicketsStudents(props) {
  //paginação
  //const [itens, setItens] = useState();
  // const [itensPerPage, setItensPerPage] = useState(5);
  // const [currentPage, setCurrentPage] = useState(0);

  //const pages = Math.ceil(itens / itensPerPage);

  return (
    <>
      <div className="containerViewTickets">
        <Menu
          lista={<ListaMenuStudent />}
          logo={
            <LogoSenai
              url="/src/assets/imgs/logo-unisenai.png"
              alt="Logo UniSenai"
            />
          }
          titulo="Chamados"
          conteudo={
            <TableContainer
              component={Paper}
              style={{ backgroundColor: "#E7EFF7" }}>
              <Table
                sx={{ minWidth: 100 }}
                aria-label="simple table"
                className="tableView">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <h3>Data de Abertura e Horário</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Nome do Monitor</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Descrição</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Status</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">sdsd</TableCell>
                    <TableCell align="left">sdsd</TableCell>
                    <TableCell align="left">sdsdsd</TableCell>
                    <TableCell align="center">sdsdsdsd</TableCell>
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

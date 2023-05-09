import React from "react";
import "./ViewTickets.css";
import MenuPrincipal from "../Menu/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function VisualizarChamados(props) {
  return (
    <>
      <div className="VisualizarChamados">
        <MenuPrincipal
          titulo="Chamados"
          conteudo={
            <TableContainer
              component={Paper}
              style={{ backgroundColor: "#E7EFF7" }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <h3>Data de Abertura</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Nome do Monitor</h3>
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">sdsd</TableCell>
                    <TableCell align="center">sdsd</TableCell>
                    <TableCell align="center">sdsdsd</TableCell>
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

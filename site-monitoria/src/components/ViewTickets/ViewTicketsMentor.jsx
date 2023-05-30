import React, { useState, useEffect } from "react";
import "./ViewTickets.css";
import { chamados } from "../../chamados";
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
  const [dadosChamados, setDadosChamados] = useState([]);

  useEffect(() => {
    setDadosChamados(chamados);
  }, []);
  console.log(chamados);

  return (
    <>
      <div className="containerViewTickets">
        <Menu
          lista={<ListaMenuMentor />}
          logo={
            <LogoSenai
              url="/src/assets/imgs/logo-unisenai.png"
              alt="Logo UniSenai"
            />
          }
          titulo="Visualizar Chamados"
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
                    <TableCell align="left">
                      <h3>Nome do Aluno</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Disciplina</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Assunto</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Status</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {chamados &&
                    chamados.map((chama) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell align="center">{chama.data}</TableCell>
                        <TableCell align="left">{chama.nome}</TableCell>
                        <TableCell align="left">{chama.disciplina}</TableCell>
                        <TableCell align="left">{chama.assunto}</TableCell>
                        <TableCell align="center">ok</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          }
        />
      </div>
    </>
  );
}

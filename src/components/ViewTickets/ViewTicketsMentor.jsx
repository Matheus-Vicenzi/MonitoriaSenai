import React, { useState, useEffect } from "react";
import "./ViewTickets.css";
import { chamados } from "../../chamados";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import LogoSenai from "../LogoSenai/LogoSenai";
import ModalSchedule from "../Modal.jsx/ModalSchedule";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TableRow from "@mui/material/TableRow";
import TextAreaTicket from "../TextAreaTicket/TextAreaTicket";
import Inputs from "../Inputs/Inputs";
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
                  {chamados &&
                    chamados.map((chama) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell align="center">sdsd</TableCell>
                        <TableCell align="center">sdsd</TableCell>
                        <TableCell align="center" className="tablePerfil">
                          <ModalSchedule
                            titulo="Dados dos Chamados"
                            status="Ok"
                            input={
                              <>
                                <>
                                  <Inputs
                                    nameLabel="Disciplina"
                                    icon={<MenuBookIcon />}
                                    width="80%"
                                    disabled="disabled"
                                    value="kkkkk"
                                  />
                                  <Inputs
                                    nameLabel="Curso"
                                    icon={<MenuBookIcon />}
                                    width="80%"
                                    disabled="disabled"
                                    value="kkkkk"
                                  />
                                </>
                                <TextAreaTicket
                                  width="19.8rem"
                                  disabled="disabled"
                                  value="kkkkk"
                                />
                              </>
                            }
                          />
                        </TableCell>
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

import React, { useState, useEffect } from "react";
import "./ViewTickets.css";
import { chamados } from "../../chamados";
import { useParams } from "react-router-dom";
import axios from "axios";
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
import CancelIcon from "@mui/icons-material/Cancel";
import Menu from "../Menu/Menu";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import LoginAutenticação from "../LoginBox/LoginAutenticação";

export default function ViewTicketsStudent() {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";

  const [dataMentoringStudent, setDataMentoringStudent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMentoringStudent();
  }, []);

  const getMentoringStudent = () => {
    axios
      .get(
        "http://localhost:8080/api/mentoring-event/get-mentoring-by-student/" +
          id
      )
      .then((response) => {
        setDataMentoringStudent(response.data);
      });
  };

  console.log(dataMentoringStudent);

  const handleChange = (event) => {
    setHora(event.target.value);
  };

  return (
    <>
      <div className="containerViewTickets">
        {isAuthenticated ? (
          <Menu
            lista={<ListaMenuStudent />}
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
                        <h3>Nome Monitor</h3>
                      </TableCell>
                      <TableCell align="center">
                        <h3>Data de Solicitação</h3>
                      </TableCell>
                      <TableCell align="center">
                        <h3>Data de Agendamento</h3>
                      </TableCell>
                      <TableCell align="center">
                        <h3>Status</h3>
                      </TableCell>
                      <TableCell align="center">
                        <h3>Informaçãos Adicionais</h3>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataMentoringStudent?.data &&
                      dataMentoringStudent?.data.map((data) => (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell align="center">
                            {data.mentor.name}
                          </TableCell>
                          <TableCell align="center">
                            {data.requestDate.slice(0, -19)} {" / "}
                            {data.requestDate.slice(11, -13)}
                          </TableCell>
                          <TableCell align="center">
                            {data.scheduleDate.slice(0, -19)} {" / "}
                            {data.scheduleDate.slice(14, -10)}
                          </TableCell>
                          <TableCell align="center">{<CancelIcon />}</TableCell>
                          <TableCell align="center" className="tablePerfil">
                            <ModalSchedule
                              titulo="Dados dos Chamados"
                              height="250px"
                              input={
                                <>
                                  <TextAreaTicket
                                    width="19.8rem"
                                    disabled="disabled"
                                    value={data.studentDescription}
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
        ) : (
          <>
            <LoginAutenticação />
          </>
        )}
      </div>
    </>
  );
}

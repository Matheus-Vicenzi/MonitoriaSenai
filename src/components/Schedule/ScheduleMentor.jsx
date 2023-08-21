import React, { useState, useEffect } from "react";
import "./ScheduleMentor.css";
import Menu from "../Menu/Menu";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ModalSchedule from "../Modal.jsx/ModalSchedule";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TableRow from "@mui/material/TableRow";
import TextAreaTicket from "../TextAreaTicket/TextAreaTicket";
import Inputs from "../Inputs/Inputs";
import Paper from "@mui/material/Paper";
import LogoSenai from "../LogoSenai/LogoSenai";
import ListaMenuMentor from "../Menu/ListaMenuMentor";
import LoginAutenticação from "../LoginBox/LoginAutenticação";
import { useParams } from "react-router-dom";

export default function ScheduleMentor(props) {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  useEffect(() => {
    getUser();
  }, []);
  const { id } = useParams();

  const [pegarMonitorias, setPegarMonitorias] = useState();
  const [user, setUser] = useState();

  const getUser = () => {
    axios
      .get(
        "http://localhost:8080/api/mentoring-event/get-mentoring-by-mentor/" +
          id
      )
      .then((response) => {
        setPegarMonitorias(response.data);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "http://localhost:8080/api/security/login",
        user
      );
      console.log(user);
      setPermission(response?.data.data.securityLevel);
    } catch (err) {
      console.log(err);
    }
  };

  {
    pegarMonitorias?.data &&
      pegarMonitorias?.data.map((pegar) => console.log(pegar.id));
  }
  return (
    <div className="VisualizarChamados">
      {isAuthenticated ? (
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
                      <h3>Aluno</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Data de Solicitação</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Data do Agendamento</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Status</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Info</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegarMonitorias?.data &&
                    pegarMonitorias?.data.map((pegar) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <>
                          <TableCell align="center">
                            {pegar.student.name}
                          </TableCell>
                          <TableCell align="center">
                            {pegar.requestDate.slice(0, -19)} {" / "}
                            {pegar.requestDate.slice(11, -13)}
                          </TableCell>
                          <TableCell align="center">
                            {pegar.scheduleDate.slice(0, -19)} {" / "}
                            {pegar.scheduleDate.slice(14, -10)}
                          </TableCell>
                          <TableCell align="center">
                            {pegar.mentoringEventStatus}
                          </TableCell>
                          <TableCell align="center" className="tablePerfil">
                            <ModalSchedule
                              titulo="Dados da Agenda"
                              height="400px"
                              input={
                                <>
                                  <TextAreaTicket
                                    width="19.8rem"
                                    disabled="disabled"
                                    value={pegar.studentDescription}
                                  />
                                  <form onSubmit={handleSubmit}>
                                    <select className="selectOpenTickets">
                                      <option value={1}>
                                        Selecione o status
                                      </option>
                                      <option value={2}>Aceito</option>
                                      <option value={3}>Pendente</option>
                                      <option value={4}>Rejeitado</option>
                                      <option value={5}>Finalizado</option>
                                    </select>
                                    <button className="buttonModalSchedule">
                                      Confirmar Monitoria
                                    </button>
                                  </form>
                                </>
                              }
                            />
                          </TableCell>
                        </>
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
  );
}

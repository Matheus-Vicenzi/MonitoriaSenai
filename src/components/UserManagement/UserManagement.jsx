import React from "react";
import Table from "@mui/material/Table";
import { useState, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ModalSchedule from "../Modal.jsx/ModalSchedule";
import Paper from "@mui/material/Paper";
import "./UserManagement.css";
import axios from "axios";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";
import ListaMenuMentor from "../Menu/ListaMenuMentor";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useParams } from "react-router-dom";
import LoginAutenticação from "../LoginBox/LoginAutenticação";

export default function UserManagement() {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  const [user, setUser] = useState([]);
  const [mentor, setMentor] = useState([]);

  const [showResponse, setShowResponse] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (event) => {
    setMentor(event.target.value);
    console.log(mentor);
  };

  const changeStudent = (id) => {
    if (mentor == 20) {
      axios
        .put(`http://localhost:8080/api/user/user-to-mentor/${id}`, { mentor })
        .then((response) => {
          alert("Usuário alterado para monitor com sucesso!");
          window.location.reload();
        });
    } else if (mentor == 10) {
      axios
        .put(`http://localhost:8080/api/user/user-to-admin/${id}`, { mentor })
        .then((response) => {
          alert("Usuário alterado para administrador com sucesso!");
          window.location.reload();
        });
    } else {
      axios
        .put(`http://localhost:8080/api/user/user-to-student/${id}`, { mentor })
        .then((response) => {
          alert("Usuário alterado para estudante com sucesso!");
          window.location.reload();
        });
    }
  };

  const getUsers = () => {
    axios.get("http://localhost:8080/api/user").then((response) => {
      setUser(response.data);
    });
  };

  console.log(user);
  return (
    <div className="containerUser">
      {isAuthenticated ? (
        <Menu
          lista={<ListaMenuMentor />}
          logo={
            <LogoSenai
              url="/src/assets/imgs/logo-unisenai.png"
              alt="Logo UniSenai"
            />
          }
          titulo="Gerenciamento de Contas"
          conteudo={
            <TableContainer
              component={Paper}
              style={{
                backgroundColor: "#E7EFF7",
              }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <h3>Nome Completo</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Email</h3>
                    </TableCell>
                    <TableCell align="left">
                      <h3>Permissão</h3>
                    </TableCell>
                    <TableCell align="center">
                      <h3>Perfil</h3>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user?.data &&
                    user?.data.map((data) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell align="left">{data.name}</TableCell>
                        <TableCell align="left">{data.email}</TableCell>
                        <TableCell align="left">
                          {data.securityLevel.charAt(0).toUpperCase() +
                            data.securityLevel.slice(1).toLowerCase()}
                        </TableCell>
                        <TableCell align="center" className="tablePerfil">
                          <ModalSchedule
                            titulo="Alterar Permissão"
                            height="350px"
                            input={
                              <>
                                <select
                                  name="mentorId"
                                  onChange={handleChange}
                                  className="selectUserMana">
                                  <option value={0}>Selecione uma opção</option>
                                  <option value={10}>Administrador</option>
                                  <option value={20}>Monitor</option>
                                  <option value={30}>Aluno</option>
                                </select>
                                <button
                                  className="buttonModalSchedule"
                                  onClick={() => changeStudent(data.id)}>
                                  Salvar
                                </button>
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
  );
}

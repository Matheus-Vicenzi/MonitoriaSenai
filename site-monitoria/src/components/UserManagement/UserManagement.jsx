import React from "react";
import Table from "@mui/material/Table";
import { useState, useEffect } from "react";
import TableBody from "@mui/material/TableBody";
import { chamados } from "../../chamados";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./UserManagement.css";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";
import ListaMenuMentor from "../Menu/ListaMenuMentor";
import SelectC from "../Select/SelectC";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function UserManagement() {
  const [dadosChamados, setDadosChamados] = useState([]);

  useEffect(() => {
    setDadosChamados(chamados);
  }, []);

  console.log(chamados);
  return (
    <div className="containerUser">
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
            <Table
              sx={{ minWidth: 100 }}
              aria-label="simple table"
              style={{ marginLeft: "3%", width: "95%" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <h3>Nome Completo</h3>
                  </TableCell>
                  <TableCell align="left">
                    <h3>Email</h3>
                  </TableCell>
                  <TableCell align="center">
                    <h3>Perfil</h3>
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
                      <TableCell align="left">{chama.nome}</TableCell>
                      <TableCell align="left">{chama.email}</TableCell>
                      <TableCell align="center" className="tablePerfil">
                        <SelectC icon={<ManageAccountsIcon />} name="Perfil" />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      />
    </div>
  );
}

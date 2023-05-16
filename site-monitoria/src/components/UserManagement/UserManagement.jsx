import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
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
        titulo="Gerenciamento de Contas"
        conteudo={
          <TableContainer
            component={Paper}
            style={{ backgroundColor: "#E7EFF7" }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <h3>Nome Completo</h3>
                  </TableCell>
                  <TableCell align="center">
                    <h3>Email</h3>
                  </TableCell>
                  <TableCell align="center">
                    <h3>Perfil</h3>
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
                    <SelectC icon={<ManageAccountsIcon />} name="Perfil" />
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

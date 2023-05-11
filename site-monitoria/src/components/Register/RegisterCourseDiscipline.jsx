import React from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import Modals from "../Modal.jsx/Modals";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import MinimizeIcon from "@mui/icons-material/Minimize";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TableHead from "@mui/material/TableHead";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TableRow from "@mui/material/TableRow";
import Inputs from "../Inputs/Inputs";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Select from "../Select/SelectC";
import Menu from "../Menu/Menu";
import ListaMenuMentor from "../Menu/ListaMenuMentor";

export default function RegisterCourseDiscipline() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="registerCourse">
        <Menu
          lista={<ListaMenuMentor />}
          logo={
            <LogoSenai
              url="/src/assets/imgs/logo-unisenai.png"
              alt="Logo UniSenai"
            />
          }
          conteudo={
            <>
              <h1 className="TituloCurso">Cadastro de Curso e Disciplina</h1>

              <div className="modals">
                <Modals
                  button="Adicionar Curso"
                  titulo="Cadastro de Curso"
                  input={
                    <Inputs name="Nome do Curso" icon={<MenuBookIcon />} />
                  }
                />
                <Modals
                  button="Adicionar Disciplina"
                  titulo="Cadastro de Disciplina"
                  select={<Select icon={<MenuBookIcon />} name="Curso" />}
                  input={
                    <Inputs
                      name="Nome da Disciplina"
                      icon={<BorderColorIcon />}
                    />
                  }
                />
              </div>

              <div className="courseDiscipline">
                <React.Fragment>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? (
                          <RemoveCircleOutlineIcon />
                        ) : (
                          <ControlPointIcon />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: "black" }}>
                      Curso
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow>
                                <IconButton style={{ marginTop: "-10px" }}>
                                  <MinimizeIcon />
                                </IconButton>
                                <TableCell>Disciplina</TableCell>
                              </TableRow>
                            </TableHead>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}

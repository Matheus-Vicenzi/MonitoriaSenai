import React, { useState, useEffect } from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import Modals from "../Modal.jsx/Modals";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import MinimizeIcon from "@mui/icons-material/Minimize";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TableHead from "@mui/material/TableHead";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Inputs from "../Inputs/Inputs";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InputLabel from "@mui/material/InputLabel";
import Menu from "../Menu/Menu";

import ListaMenuMentor from "../Menu/ListaMenuMentor";

export default function RegisterCourseDiscipline(props) {
  const handleClose = () => setOpen(false);
  const handleCloseTable = () => setOpenTable(false);
  const handleCloseCourse = () => setOpenCourse(false);
  const [open, setOpen] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenCourse = () => setOpenCourse(true);

  useEffect(() => {
    getCouser();
  }, []);

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const [courseValue, setCourseValue] = useState([]);

  const [course, setCourse] = useState([]);

  const [subject, setSubject] = useState([]);

  const [personName, setPersonName] = React.useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const getCouser = () => {
    axios.get("http://localhost:8080/api/course").then((response) => {
      setCourseValue(response.data);
    });
  };

  const handleChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleChangeSubject = (event) => {
    setSubject({ ...subject, [event.target.name]: event.target.value });
  };

  console.log(subject);

  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    handleChangeSubject(event);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("chegou");

    axios
      .post("http://localhost:8080/api/course", course)
      .then((response) => {
        setStatus({
          type: "success",
          mensagem: "Curso cadastrado com sucesso!",
        });
        window.location.reload();
      })
      .catch(function (err) {
        setStatus({
          type: "error",
          mensagem: "Erro! Curso não cadastrado!",
        });
      });
  };

  const handleSubmitSubject = async (e) => {
    e.preventDefault();
    console.log("chegou");

    axios
      .post("http://localhost:8080/api/subject", subject)
      .then((response) => {
        setStatus({
          type: "success",
          mensagem: "Disciplina cadastrada com sucesso!",
        });
        window.location.reload();
      })
      .catch(function (err) {
        setStatus({
          type: "error",
          mensagem: "Erro ao cadastrar disciplina!",
        });
      });
  };

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
                <button onClick={handleOpenCourse} className="botoesModal">
                  Adicionar Curso
                </button>
                <Modals
                  open={openCourse}
                  onClose={handleCloseCourse}
                  titulo="Cadastro de Curso"
                  conteudo={
                    <>
                      {status.type === "success" ? (
                        <p style={{ color: "green" }}>{status.mensagem}</p>
                      ) : (
                        ""
                      )}
                      {status.type === "error" ? (
                        <p style={{ color: "red" }}>{status.mensagem} </p>
                      ) : (
                        ""
                      )}
                      <form onSubmit={handleSubmit}>
                        <Inputs
                          name="name"
                          eventos={handleChange}
                          nameLabel="Nome do Curso"
                          width="80%"
                          icon={<BorderColorIcon />}
                        />

                        <button className="buttonModalSchedule">Salvar</button>
                      </form>
                    </>
                  }
                />

                <button onClick={handleOpen} className="botoesModal">
                  Adicionar Disciplina
                </button>

                <Modals
                  open={open}
                  onClose={handleClose}
                  titulo="Cadastro de Disciplina"
                  conteudo={
                    <>
                      {status.type === "success" ? (
                        <p style={{ color: "green" }}>{status.mensagem}</p>
                      ) : (
                        ""
                      )}
                      {status.type === "error" ? (
                        <p style={{ color: "red" }}>{status.mensagem} </p>
                      ) : (
                        ""
                      )}
                      <form onSubmit={handleSubmitSubject}>
                        <select
                          className="courses"
                          name="courseId"
                          onChange={handleChangeSubject}>
                          <option value={10}>Selecione um Curso</option>

                          {courseValue?.data &&
                            courseValue?.data.map((course) => (
                              <option value={course.id}>{course.name}</option>
                            ))}
                        </select>

                        <Inputs
                          name="name"
                          eventos={handleChangeSubject}
                          width="80%"
                          nameLabel="Nome da Disciplina"
                          icon={<BorderColorIcon />}
                        />
                        <button className="buttonModalSchedule">Salvar</button>
                      </form>
                    </>
                  }
                />
              </div>

              <div className="courseDiscipline">
                <>
                  {courseValue?.data &&
                    courseValue?.data.map((option) => (
                      <>
                        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => setOpenTable(!openTable)}>
                              {openTable ? (
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
                            {option.name}
                          </TableCell>
                        </TableRow>
                        <TableRow style={{ marginLeft: "25px" }}>
                          <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={6}>
                            <Collapse
                              in={openTable}
                              timeout="auto"
                              unmountOnExit>
                              <Box sx={{ margin: 1 }}>
                                <Table size="small">
                                  <TableHead>
                                    <TableRow>
                                      <IconButton
                                        style={{ marginTop: "-10px" }}>
                                        <MinimizeIcon />
                                      </IconButton>
                                      <TableCell></TableCell>
                                    </TableRow>
                                  </TableHead>
                                </Table>
                              </Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                </>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}

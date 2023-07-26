import React from "react";
import "./OpenTickets.css";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import { useState, useEffect } from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import PersonIcon from "@mui/icons-material/Person";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as yup from "yup";
import axios from "axios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Menu from "../Menu/Menu";
import TextAreaTicket from "../TextAreaTicket/TextAreaTicket";

export default function OpenTickets(props) {
  useEffect(() => {
    getUser();
  }, []);

  const [user, setUser] = useState();
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const dataDoFrontend = new Date();

  const dataISO = dataDoFrontend.toISOString();

  const [value, setValue] = useState();

  const [horarios, setHorarios] = useState([]);

  const criarHorarios = () => {
    const horariosArray = [];
    const horarioInicial = new Date();
    horarioInicial.setHours(0);
    horarioInicial.setMinutes(0);

    while (horarioInicial.getHours() < 24) {
      const hora = horarioInicial.getHours();
      const minuto = horarioInicial.getMinutes();
      const horario = `${hora.toString().padStart(2, "0")}:${minuto
        .toString()
        .padStart(2, "0")}`;
      horariosArray.push(horario);

      horarioInicial.setTime(horarioInicial.getTime() + 30 * 60 * 1000);
    }

    setHorarios(horariosArray);
  };

  const handleSelectChange = (event) => {
    const selectedHorario = event.target.value;
    console.log("Horário selecionado:", selectedHorario);
  };

  const handleChange = (event) => {
    if (event.target == undefined) {
      setValue({ ...value, scheduleDate: event?.toISOString() });
    } else {
      setValue({
        ...value,
        requestDate: dataISO,
        [event.target.name]: event.target.value,
      });
    }
  };
  console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/mentoring-event", value)
      .then((response) => {
        setStatus({
          type: "success",
          mensagem: "Agendamento de monitoria efetuado com sucesso!",
        });
        window.location.reload();
      })
      .catch(function (err) {
        setStatus({
          type: "error",
          mensagem: "Erro! Não foi agendada a monitoria!",
        });
      });
  };

  const getUser = () => {
    axios.get("http://localhost:8080/api/user").then((response) => {
      setUser(response.data);
    });
  };

  return (
    <div className="containerOpenTickets">
      <Menu
        lista={<ListaMenuStudent />}
        logo={
          <LogoSenai
            url="/src/assets/imgs/logo-unisenai.png"
            alt="Logo UniSenai"
          />
        }
        titulo="Abertura de Monitoria"
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
              <select
                className="selectOpenTickets"
                name="studentId"
                onChange={handleChange}>
                <option value={10}>Selecione um Monitor</option>
                {user?.data &&
                  user?.data.map((useru) => (
                    <option value={useru.id}>{useru.name}</option>
                  ))}
              </select>

              <input
                type="hidden"
                value={dataISO}
                name="requestDate"
                onChange={handleChange}
              />

              <select
                className="selectOpenTickets"
                name="mentorId"
                onChange={handleChange}>
                <option value={10}>Selecione um Monitor</option>
                {user?.data &&
                  user?.data.map((useru) => (
                    <option value={useru.id}>{useru.name}</option>
                  ))}
              </select>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                  <DemoItem label="">
                    <DateCalendar
                      value={value}
                      name="scheduleDate"
                      onChange={handleChange}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>

              <select onChange={handleSelectChange}>
                {horarios.map((horario, index) => (
                  <option key={index} value={horario}>
                    {horario}
                  </option>
                ))}
              </select>
              <TextAreaTicket
                name="studentDescription"
                eventos={handleChange}
                width="30rem"
              />
              <button className="buttonOpen">Agendar</button>
            </form>
          </>
        }
      />
    </div>
  );
}

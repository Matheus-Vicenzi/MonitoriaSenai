import React from "react";
import "./OpenTickets.css";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import { useState, useEffect } from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
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
  const [textoConcatenado, setTextoConcatenado] = useState("");

  const [hora, setHora] = useState("00:00");

  const horarios = [];
  for (let h = 13; h < 23; h++) {
    for (let m = 0; m < 60; m += 30) {
      horarios.push(
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
      );
    }
  }

  const handleChangeHour = (event) => {
    setHora(event.target.value);
  };
  const [hourValue, setHourValue] = useState();
  useEffect(() => {
    setHourValue(hora);
  });

  const handleChange = (event) => {
    if (event.target == undefined) {
      const horaFormatada = event?.toISOString().slice(0, -10) + "" + hourValue;
      setValue({
        ...value,
        scheduleDate: horaFormatada,
      });
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

              <input type="hidden" value={dataISO} onChange={handleChange} />

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
                    <DateCalendar value={value} onChange={handleChange} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>

              <select
                value={hora}
                name="hora"
                onChange={handleChangeHour}
                className="selectOpenTickets">
                {horarios.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
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

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
import { useParams } from "react-router-dom";
import Menu from "../Menu/Menu";
import LoginAutenticação from "../LoginBox/LoginAutenticação";
import TextAreaTicket from "../TextAreaTicket/TextAreaTicket";

export default function OpenTickets(props) {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  const { id } = useParams();

  const [user, setUser] = useState();
  const [course, setCourse] = useState();
  const [subject, setSubject] = useState();

  useEffect(() => {
    getUser();
    getCouser();
    getSubject();
  }, []);

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const dataAtual = new Date();
  const brasilTimeZone = "America/Sao_Paulo";

  const dataHoraBrasil = new Date(
    dataAtual.toLocaleString("en-US", { timeZone: brasilTimeZone })
  );

  const dataHoraFormatada = dataAtual.toISOString();

  const [value, setValue] = useState();
  const [hourSelected, setHourSelected] = useState();
  const [hora, setHora] = useState("00:00");

  const getCouser = () => {
    axios.get("http://localhost:8080/api/course").then((response) => {
      setCourse(response.data);
    });
  };

  const getSubject = () => {
    axios.get("http://localhost:8080/api/subject").then((response) => {
      setSubject(response.data);
    });
  };

  console.log(subject);

  const pegarIdCourse = (idCourse) => {
    console.log(idCourse);
  };
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

  const handleChange = (event) => {
    if (event.target == undefined) {
      const horaFormatada =
        event?.toISOString().slice(0, -10) + "" + hora + "" + ".000Z";
      setValue({
        ...value,
        scheduleDate: horaFormatada,
      });
      const hourSelected = horaFormatada.slice(0, -14);

      axios
        .get(
          `http://localhost:8080/api/mentoring-event/get-mentoring-by-date/` +
            hourSelected
        )
        .then((response) => {
          setHourSelected(response.data);
        });
    } else {
      setValue({
        ...value,
        studentId: id,
        requestDate: dataHoraFormatada,
        [event.target.name]: event.target.value,
      });
    }
  };

  let array = [];
  {
    hourSelected &&
      hourSelected.data?.map((hour) => {
        array.push(hour.scheduleDate.slice(14, -10));
        console.log(array);
      });
  }

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
      console.log(user);
    });
  };

  const mentores = user?.data.filter((usr) => usr.securityLevel == "MENTOR");

  return (
    <div className="containerOpenTickets">
      {isAuthenticated ? (
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
                <input type="hidden" value={id} onChange={handleChange} />

                <input
                  type="hidden"
                  value={dataHoraFormatada}
                  onChange={handleChange}
                />
                <select className="openTickets" name="mentorId">
                  {course?.data &&
                    course?.data.map((courses) => (
                      <option value={courses.id}>{courses.name}</option>
                    ))}
                </select>

                <select className="openTickets" name="mentorId">
                  <option value={0}>Selecione uma disciplina</option>
                </select>

                <select
                  className="openTickets"
                  name="mentorId"
                  onChange={handleChange}>
                  <option value={10}>Selecione um Monitor</option>

                  {mentores &&
                    mentores.map((mentor) => (
                      <option value={mentor.id}>{mentor.name}</option>
                    ))}
                </select>
                <select
                  value={hora}
                  name="hora"
                  onChange={handleChangeHour}
                  className="openTickets">
                  <option>Selecione um horário</option>

                  {horarios.map((horario, index) => {
                    const isHorarioOcupado = array.includes(horario);
                    return (
                      <option
                        key={index}
                        value={horario}
                        disabled={isHorarioOcupado}>
                        {horario} {isHorarioOcupado ? "(Ocupado)" : ""}
                      </option>
                    );
                  })}
                </select>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                    <DemoItem label="">
                      <DateCalendar value={value} onChange={handleChange} />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>

                <TextAreaTicket
                  name="studentDescription"
                  eventos={handleChange}
                  width="45rem"
                />
                <button className="buttonOpen">Agendar</button>
              </form>
            </>
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

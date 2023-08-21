import React from "react";
import LogoSenai from "../LogoSenai/LogoSenai";
import Menu from "../Menu/Menu";
import ListaMenuStudent from "../Menu/ListaMenuStudent";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Student.css";
import LoginAutenticação from "../LoginBox/LoginAutenticação";
import Inputs from "../Inputs/Inputs";
import InputSenha from "../Inputs/InputSenha";
import { useParams } from "react-router-dom";

export default function Student() {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const [dadosUserUpdt, setDadosUserUpdt] = useState({
    securityLevel: "2",
    active: true,
  });
  const [dadosUser, setDadosUser] = useState();

  const getUser = () => {
    axios.get("http://localhost:8080/api/user/" + id).then((response) => {
      setDadosUser(response.data);
    });
  };

  const handleChange = (event) => {
    setDadosUserUpdt({
      ...dadosUserUpdt,
      [event.target.name]: event.target.value,
    });
  };

  console.log(dadosUserUpdt);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios
        .put(`http://localhost:8080/api/user/${id}`, {
          dadosUserUpdt,
        })
        .then((response) => {
          alert("Usuário alterado para monitor com sucesso!");
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
      setStatus({
        type: "error",
        mensagem: "Erro ao efetuar o login!",
      });
    }
  };
  return (
    <div className="containerStudentPage">
      {isAuthenticated ? (
        <Menu
          lista={<ListaMenuStudent />}
          logo={
            <LogoSenai
              url="/src/assets/imgs/logo-unisenai.png"
              alt="Logo UniSenai"
            />
          }
          titulo="Dados Pessoais"
          conteudo={
            <form onSubmit={handleSubmit}>
              <Inputs name="name" eventos={handleChange} width="80%" />
              <Inputs name="phone" eventos={handleChange} width="80%" />
              <Inputs name="email" eventos={handleChange} width="80%" />
              <InputSenha name="password" eventos={handleChange} />
              <button className="button-fieldB">ENTRAR</button>
            </form>
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

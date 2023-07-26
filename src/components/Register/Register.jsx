import React from "react";
import "./Register.css";
import { useState, useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InputSenha from "../Inputs/InputSenha";
import LogoSenai from "../LogoSenai/LogoSenai";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Inputs from "../Inputs/Inputs";

export default function Register() {
  const [user, setUser] = useState({ securityLevel: "2" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await validate())) return;

    axios
      .post("http://localhost:8080/api/user", user)
      .then((response) => {
        setStatus({
          type: "success",
          mensagem: "Usuário cadastrado com sucesso!",
        });
      })
      .catch(function (err) {
        setStatus({
          type: "error",
          mensagem: "Erro! Usuário não cadastrado!",
        });
      });
  };

  async function validate() {
    let schema = yup.object().shape({
      confirmPassword: yup
        .string("Erro: Necessário preencher o campo senha!")
        .required("Erro: Necessário preencher o campo senha!")
        .min(6, "Erro: A senha deve ter no minimo 6 caracteres! "),
      password: yup
        .string("Erro: Necessário preencher o campo senha")
        .required("Erro: Necessário preencher o campo senha")
        .min(6, "Erro: A senha deve ter no minimo 6 caracteres "),
      coursePeriod: yup
        .string("Erro: Necessário preencher o período curso")
        .required("Erro: Necessário preencher o período curso"),
      course: yup
        .string("Erro: Necessário preencher o curso!")
        .required("Erro: Necessário preencher o curso!"),
      phone: yup
        .string("Erro: Necessário preencher o campo telefone")
        .required("Erro: Necessário preencher o campo telefone")
        .min(11),
      name: yup
        .string("Erro: Necessário preencher o campo nome!")
        .required("Erro: Necessário preencher o campo nome"),
      email: yup
        .string("Erro: Necessário preencher o campo email!")
        .required("Erro: Necessário preencher o campo email!")
        .email("Erro: Necessário preencher o campo email valido!"),
    });

    try {
      await schema.validate(user);
      return true;
    } catch (err) {
      setStatus({
        type: "error",
        mensagem: err.errors,
      });
      return false;
    }
  }

  return (
    <>
      <Link to="/">
        <ArrowBackIosIcon className="voltar" />
      </Link>

      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />

      <div className="login-box">
        <h1>Crie sua Conta</h1>

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

        <form className="formRegister" onSubmit={handleSubmit}>
          <Inputs
            name="email"
            eventos={handleChange}
            nameLabel="Seu E-mail"
            icon={<MailRoundedIcon />}
            width="80%"
          />

          <Inputs
            name="name"
            eventos={handleChange}
            nameLabel="Seu Nome"
            icon={<PersonIcon />}
            width="80%"
          />

          <Inputs
            name="phone"
            eventos={handleChange}
            nameLabel="Seu Telefone"
            icon={<CallIcon />}
            width="80%"
          />

          <Inputs
            name="course"
            eventos={handleChange}
            nameLabel="Seu Curso"
            icon={<MenuBookIcon />}
            width="80%"
          />

          <Inputs
            name="coursePeriod"
            eventos={handleChange}
            nameLabel="Período do Curso"
            icon={<QueryBuilderIcon />}
            width="80%"
          />

          <InputSenha
            name="password"
            eventos={handleChange}
            nameLabel="Sua Senha"
            icon={<LockIcon />}
          />

          <InputSenha
            name="confirmPassword"
            eventos={handleChange}
            nameLabel="Confirme sua Senha"
            icon={<LockIcon />}
          />

          <button className="button-fieldRegister">CADASTRAR</button>

          <p className="termos">
            Ao se cadastrar, você aceita os{" "}
            <span>
              Termos de <br /> Uso
            </span>{" "}
            e a <span>Politica de Privacidade.</span>
          </p>
        </form>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LockIcon from "@mui/icons-material/Lock";
import InputSenha from "../Inputs/InputSenha";
import Inputs from "../Inputs/Inputs";
import LogoSenai from "../LogoSenai/LogoSenai";
import "./LoginBox.css";

export default function LoginBox() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  const [permission, setPermission] = useState();
  const [dadosUser, setDadosUser] = useState();
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  useEffect(() => {
    getUser();
    if (permission) {
      verifyPermission();
    }
  }, [permission]);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const getUser = () => {
    axios.get("http://localhost:8080/api/user").then((response) => {
      setDadosUser(response.data);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await validate())) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/security/login",
        user
      );
      setPermission(response?.data.data.securityLevel);
    } catch (err) {
      setStatus({
        type: "error",
        mensagem: "Erro ao efetuar o login!",
      });
    }
  };

  function verifyPermission() {
    const usuarios = dadosUser?.data.filter((usr) => usr.email == user.email);
    const password = dadosUser?.data.filter(
      (usr) => usr.password == user.password
    );
    console.log(password);
    if (password.length === 0) {
      setStatus({
        type: "error",
        mensagem: "Senha incorreta!",
      });
    } else {
      usuarios.map((usu) => {
        const id = usu.id;
        if (permission === "STUDENT") {
          navigate(`MenuStudent/${usu.id}`);
        } else if (permission === "MENTOR") {
          navigate(`MenuMentor/${usu.id}`);
        } else if (permission === "ADMINISTRATOR") {
          navigate("UserManagement");
        }

        sessionStorage.setItem("authenticated", "true");
        setAuthenticated(true);
      });
    }
  }

  async function validate() {
    const schema = yup.object().shape({
      password: yup
        .string()
        .required("Erro: Necessário preencher o campo senha")
        .min(6, "Erro: A senha deve ter no mínimo 6 caracteres"),

      email: yup
        .string()
        .required("Erro: Necessário preencher o campo email!")
        .email("Erro: Necessário preencher um email válido!"),
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
    <div className="container">
      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />

      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="login-box">
          <h1>Faça Login</h1>

          <Inputs
            name="email"
            eventos={handleChange}
            nameLabel="Email"
            icon={<MailRoundedIcon />}
            width="80%"
          />

          <InputSenha
            name="password"
            eventos={handleChange}
            nameLabel="Senha"
            icon={<LockIcon />}
          />
          <p className="esqueciSenha">
            <Link to="/Recover">Esqueci minha senha</Link>
          </p>

          <button
            type="submit"
            className="button-fieldB"
            onClick={verifyPermission}>
            ENTRAR
          </button>

          {status.type === "success" && (
            <p style={{ color: "green" }}>{status.mensagem}</p>
          )}
          {status.type === "error" && (
            <p style={{ color: "red" }}>{status.mensagem}</p>
          )}

          <p className="registre">
            Não tem uma conta?
            <Link to="/Register"> Registre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

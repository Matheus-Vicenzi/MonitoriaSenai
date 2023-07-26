import InputSenha from "../Inputs/InputSenha";
import Inputs from "../Inputs/Inputs";
import "/src/index.css";
import "./LoginBox.css";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import * as yup from "yup";
import LogoSenai from "../LogoSenai/LogoSenai";

export default function LoginBox() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await validate())) return;

    axios
      .post("http://localhost:8080/user", user)
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
      password: yup
        .string("Erro: Necessário preencher o campo senha")
        .required("Erro: Necessário preencher o campo senha")
        .min(6, "Erro: A senha deve ter no minimo 6 caracteres "),

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
    <div className="container">
      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />

      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="login-box">
          <h1>Faça Login</h1>

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
          <Link to="/MenuMentor">
            <button className="button-fieldB">ENTRAR</button>
          </Link>

          <Link to="/MenuStudent">
            <button className="button-fieldB">ENTRAR</button>
          </Link>

          <p className="registre">
            Não tem uma conta?
            <Link to="/Register"> Registre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

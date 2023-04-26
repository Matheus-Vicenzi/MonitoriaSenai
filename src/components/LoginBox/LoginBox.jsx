import "/src/index.css";
import "./LoginBox.css";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { Link } from "react-router-dom";
import Inputs from "../Inputs/Inputs";
import InputSenha from "../Inputs/InputSenha";
import LogoSenai from "../LogoSenai/LogoSenai";

export default function LoginBox(props) {
  return (
    <>
      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />
      <div className="login-box">
        <h1>Faça seu Login</h1>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <Inputs name="Email" icon={<MailRoundedIcon />} />
        </div>

        <div
          className="field-box"
          style={{
            width: "100%",
          }}>
          <InputSenha name="Senha" />
          <a href="#" className="esqueciSenha">
            Esqueci minha senha
          </a>
        </div>

        <button className="button-field">ENTRAR</button>

        <p className="registre">
          Não tem uma conta?
          <Link to="/Register"> Registre-se</Link>
        </p>
      </div>
    </>
  );
}

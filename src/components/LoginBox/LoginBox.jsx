import InputSenha from "../Inputs/InputSenha";
import Inputs from "../Inputs/Inputs";
import "/src/index.css";
import "./LoginBox.css";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import LogoSenai from "../LogoSenai/LogoSenai";

export default function LoginBox(props) {
  return (
    <>
      <LogoSenai url="/src/assets/imgs/logo-unisenai.png" alt="Logo UniSenai" />
      <div className="login-box">
        <h1>Faça Login</h1>
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
          <InputSenha name="Senha" icon={<LockIcon />} />
          <Link to="/Recover" className="esqueciSenha">
            Esqueci minha senha
          </Link>
        </div>
        <Link to="/MenuStudent">
          <button className="button-field">ENTRAR</button>
        </Link>
        <Link to="/MenuMentor">
          <button className="button-field">ENTRAR</button>
        </Link>

        <p className="registre">
          Não tem uma conta?
          <Link to="/Register"> Registre-se</Link>
        </p>
      </div>
    </>
  );
}

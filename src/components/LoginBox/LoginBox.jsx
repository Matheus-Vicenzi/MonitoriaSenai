<<<<<<< HEAD:src/front/components/LoginBox/LoginBox.jsx
import "../../index.css";
import InputSenha from "../Inputs/InputSenha";
import Inputs from "../Inputs/Inputs";
=======
import "/src/index.css";
>>>>>>> d60dbaa0ce588a770ee9573ae87a4c2514d7bc58:src/components/LoginBox/LoginBox.jsx
import "./LoginBox.css";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import LogoSenai from "../LogoSenai/LogoSenai";

export default function LoginBox(props) {
<<<<<<< HEAD:src/front/components/LoginBox/LoginBox.jsx
  return (
    <>
      <LogoSenai
        url="/src/front/assets/imgs/logo-unisenai.png"
        alt="Logo UniSenai"
      />
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
        <Link to="/MenuStart">
          <button className="button-field">ENTRAR</button>
        </Link>
=======
	return (
		<>
			<LogoSenai
				url="/src/assets/imgs/logo-unisenai.png"
				alt="Logo UniSenai"
			/>
			<div className="login-box">
				<h1>Faça Login</h1>

				<div
					className="field-box"
					style={{
						width: "100%",
					}}
				>
					<Inputs name="Email" icon={<MailRoundedIcon />} />
				</div>

				<div
					className="field-box"
					style={{
						width: "100%",
					}}
				>
					<InputSenha name="Senha" icon={<LockIcon />} />
					<Link to="/Recover" className="esqueciSenha">
						Esqueci minha senha
					</Link>
				</div>

				<button className="button-field">ENTRAR</button>
>>>>>>> d60dbaa0ce588a770ee9573ae87a4c2514d7bc58:src/components/LoginBox/LoginBox.jsx

        <p className="registre">
          Não tem uma conta?
          <Link to="/Register"> Registre-se</Link>
        </p>
      </div>
    </>
  );
}

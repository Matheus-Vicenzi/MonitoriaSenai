import "/src/index.css";
import "./LoginBox.css";
import TextField from "@mui/material/TextField";

export default function LoginBox() {
	return (
		<div className="login-box">
			<h1>Faça seu login</h1>
			<div className="field-box">
				<TextField
					className="login-field"
					id="login-field-login"
					label="Login"
					required={true}
					type="text"
				/>
			</div>
			<div className="field-box">
				<TextField
					className="login-field"
					id="login-field-password"
					label="Senha"
					required={true}
					type="password"
				/>
			</div>
			<a href="#">Esqueci minha senha</a>
		</div>
	);
}

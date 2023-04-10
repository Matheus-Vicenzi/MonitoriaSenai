import "/src/index.css";
import "./FieldBox.css";
import TextField from "@mui/material/TextField";

export default function FieldBox() {
	return (
		<>
			<div className="field-box">
				<TextField
					className="login-field"
					id="login-field-name"
					label="Nome"
					variant="outlined"
				/>
				<TextField
					className="login-field"
					id="login-field-password"
					label="Senha"
					variant="outlined"
				/>
			</div>
		</>
	);
}

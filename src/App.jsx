import "./App.css";
import FieldBox from "./components/FieldBox/LoginBox";
import LogoSenai from "./components/LogoSenai/LogoSenai";
import * as React from "react";
import Button from "@mui/material/Button";
import LoginBox from "./components/FieldBox/LoginBox";

function App() {
	return (
		<>
			<LogoSenai
				url="/src/assets/imgs/logo-unisenai.png"
				alt="Logo UniSenai"
			/>
			<LoginBox />
			<Button variant="contained">Hello World</Button>
		</>
	);
}

export default App;

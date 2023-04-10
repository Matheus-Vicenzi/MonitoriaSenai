import "./App.css";
import FieldBox from "./components/FieldBox/FieldBox";
import LogoSenai from "./components/LogoSenai/LogoSenai";
import * as React from "react";
import Button from "@mui/material/Button";

function App() {
	return (
		<>
			<LogoSenai
				url="/src/assets/imgs/logo-unisenai.png"
				alt="Logo UniSenai"
			/>
			<FieldBox />
			<Button variant="contained">Hello World</Button>
		</>
	);
}

export default App;

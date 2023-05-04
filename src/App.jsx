import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginBox from "./components/LoginBox/LoginBox";
import Register from "./components/Register/Register";
import Recover from "./components/Recover/Recover";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<LoginBox />
							</>
						}
					/>

					<Route
						exact
						path="/Register"
						element={
							<>
								<Register />
							</>
						}
					/>
					<Route
						exact
						path="/Recover"
						element={
							<>
								<Recover />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

import "./App.css";
import FieldBox from "./components/LoginBox/LoginBox";
import * as React from "react";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginBox from "./components/LoginBox/LoginBox";
import Register from "./components/Register/Register";
import Recover from "./components/Recover/Recover";
import RecoverPassword from "./components/Recover/RecoverPassword";
import MenuStart from "./components/Menu/MenuStart";
import ViewTickets from "./components/ViewTickets/ViewTickets";

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
          <Route
            exact
            path="/RecoverPassword"
            element={
              <>
                <RecoverPassword />
              </>
            }
          />
          <Route
            exact
            path="/MenuStart"
            element={
              <>
                <MenuStart />
              </>
            }
          />
          <Route
            exact
            path="/ViewTickets"
            element={
              <>
                <ViewTickets />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

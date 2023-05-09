import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginBox from "./components/LoginBox/LoginBox";
import Register from "./components/Register/Register";
import Recover from "./components/Recover/Recover";
import RecoverPassword from "./components/Recover/RecoverPassword";
import MenuStart from "./components/Menu/MenuStart";
import MenuMentor from "./components/Menu/MenuMentor";
import ViewTickets from "./components/ViewTickets/ViewTickets";
import RegisterCourseDiscipline from "./components/Register/RegisterCourseDiscipline";

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
            path="/MenuStart"
            element={
              <>
                <MenuStart />
              </>
            }
          />
          <Route
            exact
            path="/MenuMentor"
            element={
              <>
                <MenuMentor />
              </>
            }
          />
          <Route
            exact
            path="/RegisterCourseDiscipline"
            element={
              <>
                <RegisterCourseDiscipline />
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

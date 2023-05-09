import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginBox from "./components/LoginBox/LoginBox";
import Register from "./components/Register/Register";
import Recover from "./components/Recover/Recover";
import RecoverPassword from "./components/Recover/RecoverPassword";
import MenuStudent from "./components/Menu/MenuStudent";
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
            path="/MenuStudent"
            element={
              <>
                <MenuStudent />
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
          <Route
            exact
            path="/RecoverPassword"
            element={
              <>
                <RecoverPassword />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

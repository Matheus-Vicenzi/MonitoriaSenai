import React from "react";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { Link } from "react-router-dom";

export default function InputSenha(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl
        className="login-field"
        variant="filled"
        style={{
          backgroundColor: "#e8e8eb",
          borderRadius: "7px",
          border: "2.5px solid #005caa",
          width: "80%",
        }}
        required={true}>
        <InputLabel
          style={{
            color: "#005caa",
            marginTop: "-0.7%",
            display: "flex",
          }}>
          {props.icon} &nbsp; {props.name}
        </InputLabel>
        <OutlinedInput
          className="outline"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </>
  );
}

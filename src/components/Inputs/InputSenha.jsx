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
        variant="outlined"
        style={{
          backgroundColor: "#0070CE",
          borderRadius: "5px",
          width: "80%",
        }}
        required={true}>
        <InputLabel
          style={{
            color: "#ffff",
            display: "flex",
          }}>
          {props.icon} &nbsp; {props.name}
        </InputLabel>
        <OutlinedInput
          className="outline"
          id="outlined-adornment-password"
          type={showPassword ? "password" : "text"}
          endAdornment={
            <InputAdornment>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </>
  );
}

import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LockIcon from "@mui/icons-material/Lock";
export default function Inputs(props) {
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
            marginLeft: "2.5rem",
          }}>
          {props.name}
        </InputLabel>
        <InputAdornment>
          <IconButton
            style={{
              color: "#ffff",
              marginLeft: "0.3rem",
              marginTop: "3.3rem",
            }}>
            <IconButton>{props.icon}</IconButton>
          </IconButton>
        </InputAdornment>
        <OutlinedInput
          className="outline"
          label="Login"
          style={{ marginLeft: "2.8rem" }}
        />
      </FormControl>
    </>
  );
}

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
        variant="filled"
        style={{
          backgroundColor: "#e8e8eb",
          border: "2.5px solid #005caa",
          borderRadius: "7px",
          width: "80%",
        }}
        required={true}>
        <InputLabel
          style={{
            color: "#005caa",
            display: "flex",
            alignItems: "center",
            marginTop: "-0.7%",
          }}>
          {props.icon} &nbsp; {props.name}
        </InputLabel>
        <OutlinedInput label="Login" />
      </FormControl>
    </>
  );
}

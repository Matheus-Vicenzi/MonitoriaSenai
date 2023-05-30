import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function Inputs({ name, icon, eventos }) {
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
          marginTop: "6px",
        }}
        required={true}>
        <InputLabel
          style={{
            color: "#005caa",
            display: "flex",
            alignItems: "center",
          }}>
          {icon}&nbsp; {name}
        </InputLabel>
        <OutlinedInput label="Login" />
      </FormControl>
    </>
  );
}

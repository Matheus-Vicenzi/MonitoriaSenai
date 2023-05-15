import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

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
          width: "30rem",
          margin: "10px",
        }}
        required={true}>
        <InputLabel
          style={{
            color: "#005caa",
            display: "flex",
            alignItems: "center",
            marginTop: "-0.7%",
          }}>
          {props.icon}&nbsp; {props.name}
        </InputLabel>
        <OutlinedInput label="Login" />
      </FormControl>
    </>
  );
}

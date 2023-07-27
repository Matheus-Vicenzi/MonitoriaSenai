import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function Inputs({
  nameLabel,
  name,
  icon,
  eventos,
  width,
  disabled,
  value,
}) {
  return (
    <>
      <FormControl
        className="login-field"
        variant="filled"
        style={{
          backgroundColor: "#e8e8eb",
          border: "2.5px solid #005caa",
          borderRadius: "7px",
          width: `${width}`,
          marginTop: "6px",
        }}
        onChange={eventos}
        disabled={disabled}>
        <InputLabel
          style={{
            color: "#005caa",
            display: "flex",
            alignItems: "center",
            marginTop: "-4px",
          }}>
          {icon}&nbsp; {nameLabel}
        </InputLabel>
        <OutlinedInput name={name} value={value} />
      </FormControl>
    </>
  );
}

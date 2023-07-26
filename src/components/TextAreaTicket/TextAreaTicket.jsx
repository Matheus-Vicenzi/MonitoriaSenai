import React from "react";
import Textarea from "@mui/joy/Textarea/Textarea";
import { FormControl } from "@mui/material";

export default function TextAreaTicket(props) {
  return (
    <div>
      <FormControl
        className="login-field"
        variant="filled"
        onChange={props.eventos}
        style={{
          backgroundColor: "#e8e8eb",
          border: "2.5px solid #005caa",
          borderRadius: "7px",
          marginTop: "6px",
          width: `${props.width}`,
        }}
        required={true}>
        <Textarea
          disabled={props.disabled}
          value={props.value}
          name={props.name}
          minRows={2}
          placeholder="Descrição da Monitoria"
          style={{
            color: "#005caa",
            fontWeigth: "bolder",
            backgroundColor: "#e8e8eb",
          }}
        />
      </FormControl>
    </div>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectBigger(props) {
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          className="login-field"
          variant="filled"
          style={{
            backgroundColor: "#e8e8eb",
            border: "2.5px solid #005caa",
            borderRadius: "7px",
            width: "30rem",
            marginBottom: "10px",
          }}
          required={true}>
          <InputLabel
            id="demo-simple-select-label"
            style={{
              color: "#005caa",
              display: "flex",
              alignItems: "center",
              marginTop: "-0.7%",
            }}>
            {props.icon}&nbsp; {props.name}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

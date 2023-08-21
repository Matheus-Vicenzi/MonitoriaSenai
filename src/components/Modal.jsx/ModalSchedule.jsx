import React from "react";
import "./Modals.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import FormControl from "@mui/material/FormControl";

export default function Modals(props) {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <VisibilityIcon onClick={handleOpen} />
      <Modal
        style={{
          backgroundColor: "white",
          color: "#005caa",
          height: `${props.height}`,
          textAlign: "center",
          position: "absolute",
          borderRadius: "10%",
          top: "43%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          width: 400,
          border: "3px solid #ffff",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          style={{
            marginTop: "10%",
          }}>
          <CancelIcon onClick={handleClose} className="buttonCancel" />

          <Typography
            id="modal-modal-title"
            variant="h5"
            color="#005caa"
            fontWeight="bolder"
            component="h2">
            {props.titulo} <br />
            {props.status}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.input}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

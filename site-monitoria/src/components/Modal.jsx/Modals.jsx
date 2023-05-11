import React from "react";
import "./Modals.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";

export default function Modals(props) {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <button onClick={handleOpen} className="botoesModal">
        {props.button}
      </button>
      <Modal
        style={{
          backgroundColor: "white",
          color: "#005caa",
          textAlign: "center",
          position: "absolute",
          borderRadius: "10%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          border: "3px solid #ffff",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          style={{
            marginTop: "20%",
          }}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            color="#005caa"
            fontWeight="bolder"
            component="h2">
            {props.titulo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.select}
            {props.input}
            <button className="button-field">Salvar</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

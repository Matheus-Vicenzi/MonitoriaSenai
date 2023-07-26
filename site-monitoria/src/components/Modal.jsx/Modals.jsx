import React from "react";
import "./Modals.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";

export default function Modals(props) {
  return (
    <>
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
        open={props.open}
        onClose={props.onClose}
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
            {props.conteudo}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

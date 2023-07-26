import React from "react";

export default function Message() {
  return (
    <div>
      {status.type === "success" ? (
        <p style={{ color: "green" }}>{status.mensagem}</p>
      ) : (
        ""
      )}
      {status.type === "error" ? (
        <p style={{ color: "red" }}>{status.mensagem} </p>
      ) : (
        ""
      )}
    </div>
  );
}

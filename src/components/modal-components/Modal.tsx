import React from "react";
import ButtonDefault from "../button-components/ButtonDefault";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  action: () => void;
  actionConfirm?: () => void;
}

function Modal({title, children, action}: ModalProps) {
  return (
    <ModalStyled>
      <div
        style={{
          width: "300px",
          backgroundColor: "#d7c3df",
          color: "#333",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>{title}</h2>
        </div>

        <div>{children}</div>
        <div>
          <ButtonDefault action={action} label="Fechar" />
        </div>
      </div>
    </ModalStyled>
  );
}

export default Modal;

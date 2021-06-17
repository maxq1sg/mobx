import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const appear = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(120, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s;
`;
const ModalWindow = styled.div`
  width: 400px;
  height: 1100px;
  border-radius: 13px;
  background: #ddd;
  transition: 1s;
  padding: 25px;
  animation: ${appear} 0.5s;
`;
const Modal = ({
  isActive,
  setIsActive,
  id,
  children,
}: {
  isActive: any;
  setIsActive: any;
  id: string;
  children: any;
}) => {
  return (
    <>
      {isActive && (
        <ModalWrapper onClick={(e) => setIsActive(false)}>
          <ModalWindow onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalWindow>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;

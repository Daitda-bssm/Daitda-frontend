import { useModal } from "@/hooks/common/useModal";
import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const ModalLayout = ({ children }: { children: ReactNode }) => {
  const { modalState } = useModal();

  return (
    <Container modalState={modalState.animationState}>{children}</Container>
  );
};

export default ModalLayout;

const ShowModalAnimation = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const CloseModalAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0
  }
  `;

const Container = styled.div<{ modalState: boolean }>`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  backdrop-filter: blur(0.25rem);
  z-index: 1;

  animation: ${({ modalState }) =>
      modalState ? ShowModalAnimation : CloseModalAnimation}
    0.5s cubic-bezier(0.23, 1, 0.12, 1.1) forwards;
`;

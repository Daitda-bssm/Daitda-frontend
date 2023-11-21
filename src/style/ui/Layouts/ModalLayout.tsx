import React, { ReactNode } from "react";
import styled from "styled-components";

const ModalLayout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ModalLayout;

const Container = styled.div`
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
`;

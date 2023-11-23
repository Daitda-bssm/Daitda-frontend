import React from "react";
import styled, { keyframes } from "styled-components";

import { ModalLayout } from "@/style/ui";
import StudentModalHeader from "./studentModalHeader";
import { C, fonts } from "@/style/theme";
import { useModal } from "@/hooks/common/useModal";

import { CrossIcon } from "@/style/icon";
import StudentModalBody from "./studentModalBody";

const StudentInfoModal = () => {
  const { closeModal, modalState } = useModal();

  return (
    <ModalLayout>
      <Container>
        <CloseModalBtn onClick={closeModal}>
          <CrossIcon width={2} height={2} />
        </CloseModalBtn>
        <StudentModalHeader />
        <StudentModalBody />
      </Container>
    </ModalLayout>
  );
};

export default StudentInfoModal;

const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;

  position: relative;

  padding: 8rem;
  border-radius: 1rem;
  background-color: ${C.white};

  gap: 4rem;

  overflow: hidden;
`;

const CloseModalBtn = styled.div`
  width: fit-content;

  position: absolute;
  top: 1rem;
  right: 1rem;

  border-radius: 999px;
  cursor: pointer;

  padding: 2rem;
  color: ${C.gray200};
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${C.gray50};
  }

  &:active {
    transition: 0.1s cubic-bezier(0.3, 0.49, 0.5, 1);
    background-color: ${C.gray75};
  }
`;

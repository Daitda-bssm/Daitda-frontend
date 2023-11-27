import React from "react";
import styled from "styled-components";

import { ModalLayout } from "@/style/ui";
import StudentModalHeader from "./studentModalHeader";
import { C } from "@/style/theme";
import { useModal } from "@/hooks/common/useModal";

import { CrossIcon, EditIcon } from "@/style/icon";
import StudentModalBody from "./studentModalBody";

const StudentInfoModal = () => {
  const { closeModal, modalState } = useModal();

  return (
    <ModalLayout>
      <Container>
        <EditModalBtn>
          <EditIcon width={2} height={2} />
        </EditModalBtn>
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

const EditModalBtn = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  border-radius: 0.5rem;
  cursor: pointer;

  padding: 1rem;
  color: ${C.black};
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${C.gray50};
  }

  &:active {
    transition: 0.1s cubic-bezier(0.3, 0.49, 0.5, 1);
    background-color: ${C.gray75};
  }
`;

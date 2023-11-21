import { Row, ModalLayout } from "@/style/ui";
import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

import { PositionTag } from "@/components";
import { FlexibleImgContainer } from "@/style/ui";
import { C, fonts } from "@/style/theme";

import CrossIcon from "@/style/icon/crossIcon.svg";
import { useModal } from "@/hooks/common/useModal";

import DummyData from "@/dummy.json";

const StudentInfoModal = () => {
  const { closeModal, modalState } = useModal();

  return (
    <ModalLayout>
      <Container modalState={modalState.animationState}>
        <CloseModalBtn onClick={closeModal}>
          <FlexibleImgContainer width={2} height={2}>
            <Image
              src={CrossIcon}
              alt="이미지를 불러오는데 실패했습니다."
              fill
            />
          </FlexibleImgContainer>
        </CloseModalBtn>
        <StudentInfoHeader>
          <임시이미지 />
          <Row gap={2}>
            <IntroduceWord>
              {DummyData.student[modalState.id].title}
              <br />
              {DummyData.student[modalState.id].name} 입니다.
            </IntroduceWord>
            <DirectSNSUrl>
              {DummyData.student[modalState.id].grade}
            </DirectSNSUrl>
          </Row>
        </StudentInfoHeader>
      </Container>
    </ModalLayout>
  );
};

export default StudentInfoModal;

const ShowModalAnimation = keyframes`
  from {
    transform: scale(0.3);
    opacity: 0.1;
  }
  to {
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
    transform: scale(0.3);
    opacity: 0
  }
  `;

const Container = styled.div<{ modalState: boolean }>`
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
  animation: ${({ modalState }) =>
      modalState ? ShowModalAnimation : CloseModalAnimation}
    0.5s cubic-bezier(0.23, 1, 0.12, 1.1) forwards;
`;

const CloseModalBtn = styled.div`
  width: fit-content;
  height: fit-content;

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

  ${fonts.Title1}
`;

const 임시이미지 = styled.div`
  width: 28rem;
  height: 20rem;

  background-color: black;
  border-radius: 1.2rem;
`;

const StudentInfoHeader = styled.div`
  display: flex;
  gap: 5rem;
`;

const IntroduceWord = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.9rem;
  ${fonts.Title1};
`;

const DirectSNSUrl = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.1rem;
`;

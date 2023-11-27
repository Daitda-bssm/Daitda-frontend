import React from "react";
import styled from "styled-components";

import { C, fonts } from "@/style/theme";
import { Column, Row } from "@/style/ui";

import { PositionTag } from "@/components";
import DirectSNSUrl from "../directSNSUrl";
import DummyData from "@/dummy.json";
import { useModal } from "@/hooks/common/useModal";

const StudentModalHeader = () => {
  const { modalState } = useModal();

  return (
    <StudentInfoHeader>
      <임시이미지 />
      <Column gap={1}>
        <PositionTag tagName={DummyData.student[modalState.id].position} />
        <IntroduceWord>
          {DummyData.student[modalState.id].title}
          <br />
          <Row>
            <StudentNameSpan>
              {DummyData.student[modalState.id].name}
            </StudentNameSpan>
            입니다.
          </Row>
        </IntroduceWord>
        <GradeAndMajor>
          {DummyData.student[modalState.id].major} /{" "}
          {DummyData.student[modalState.id].grade}학년
        </GradeAndMajor>
        <DirectSNSUrl
          githubLink="https://github.com/rlawnsrud0509"
          notionLink="https://github.com/rlawnsrud0509"
          velogLink="https://github.com/rlawnsrud0509"
        />
      </Column>
    </StudentInfoHeader>
  );
};

export default StudentModalHeader;

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

const StudentNameSpan = styled.span`
  color: ${C.green300};
`;

const GradeAndMajor = styled.div`
  width: fit-content;
  height: fit-content;

  color: ${C.gray500};
  background-color: ${C.gray100};

  padding: 0.3rem 0.7rem;
  border-radius: 0.6rem;

  ${fonts.SubHead}
`;

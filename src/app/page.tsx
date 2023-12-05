"use client";

import styled from "styled-components";
import {
  AppLayout,
  CheckBox,
  Row,
  Radio,
  Dropdown,
  Text,
  SearchBox,
} from "@/style/ui";

import { DescIcon } from "@/style/icon";
import { C } from "@/style/theme";

import DummyData from "../dummy.json";
import { StudentBox, StudentInfoModal } from "@/components";
import { useModal } from "@/hooks/common/useModal";
import { useEffect } from "react";

export default function Home() {
  const { openModal, modalState } = useModal();

  useEffect(() => {
    console.log(modalState);
  }, [modalState]);

  return (
    <AppLayout>
      {modalState.show && <StudentInfoModal />}
      <Container>
        <MainHeader>
          <Row>
            <DescIcon width={1.2} height={1.2} />
            <Text fontType="Footnote">
              &nbsp; 조건에 맞는 인재들을 발굴해보세요.
            </Text>
          </Row>
          <Row justifyContent="space-between" alignItems="center">
            <Row alignItems="center" gap={3.2}>
              <CheckBox checkboxList={["1학년", "2학년", "3학년"]} />
              <Dropdown
                name="fe"
                onChange={() => {}}
                defaultText="취업 분야"
                dropdownList={["IOS/Android", "디자인", "벡엔드", "프론트엔드"]}
              />
              <Dropdown
                name="fe"
                onChange={() => {}}
                defaultText="프레임워크"
                dropdownList={["React", "Next", "PHP", "JQuery"]}
              />
            </Row>
            <SearchBox />
          </Row>
          <Row justifyContent="right" alignItems="center">
            <Text fontType="Callout" color={C.gray200}>
              184/184
            </Text>
          </Row>
        </MainHeader>
        <MainBody>
          {DummyData.student.map((e, i) => {
            return (
              <StudentBox
                name={e.name}
                grade={e.grade}
                position={e.position}
                frameworks={e.Frameworks}
                imgUrl={e.imgUrl}
                key={`StudentBox ${i}`}
                onClick={() => openModal(i)}
              ></StudentBox>
            );
          })}
        </MainBody>
      </Container>
    </AppLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  align-items: center;
  gap: 2rem;
`;

const MainHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`;

const MainBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

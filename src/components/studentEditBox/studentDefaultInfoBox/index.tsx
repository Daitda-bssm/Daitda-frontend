import { Column, Dropdown, Row } from "@/style/ui";
import React from "react";
import styled from "styled-components";
import { useInput } from "../studentEditBox.hooks";
import Input from "@/style/ui/Input";
import TextArea from "@/style/ui/TextArea";
import { fonts } from "@/style/theme";
import { GithubIcon, NotionIcon, VelogIcon } from "@/style/icon";

const StudentDeafultInfoBox = () => {
  const { handleStudentDataChange } = useInput();

  return (
    <Container>
      <Column gap={2}>
        <Row gap={1}>
          <Dropdown
            name="part"
            onChange={handleStudentDataChange}
            defaultText="분야 선택"
            dropdownList={["IOS/Android", "디자인", "벡엔드", "프론트엔드"]}
          />
          <Dropdown
            name="grade"
            onChange={handleStudentDataChange}
            defaultText="학년 선택"
            dropdownList={["1학년", "2학년", "3학년"]}
          />
          <Dropdown
            name="major"
            onChange={handleStudentDataChange}
            defaultText="학과 선택"
            dropdownList={["소프트웨어개발과", "임베디드소프트웨어개발과"]}
          />
        </Row>
        <TextArea
          width={41}
          height={10}
          maxLength={27}
          name="oneSentence"
          fontType={fonts.LargeTitle}
          placeholder="한 문장으로 자신을 소개해봐요!"
          onChange={handleStudentDataChange}
        />
        <Column gap={0.5}>
          <Row alignItems="center">
            <GithubIcon width={1.5} height={1.5} />
            <Input
              width={25}
              fontType={fonts.Footnote}
              name="githubLink"
              onChange={handleStudentDataChange}
              placeholder="깃허브 주소를 입력해주세요."
            />
          </Row>
          <Row alignItems="center">
            <NotionIcon width={1.5} height={1.5} />
            <Input
              width={25}
              fontType={fonts.Footnote}
              name="notionLink"
              onChange={handleStudentDataChange}
              placeholder="노션 공유 링크를 입력해주세요."
            />
          </Row>
          <Row alignItems="center">
            <VelogIcon width={1.5} height={1.5} />
            <Input
              width={25}
              fontType={fonts.Footnote}
              name="velogLink"
              onChange={handleStudentDataChange}
              placeholder="벨로그 링크를 입력해주세요."
            />
          </Row>
        </Column>
      </Column>
    </Container>
  );
};

export default StudentDeafultInfoBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5rem;
`;

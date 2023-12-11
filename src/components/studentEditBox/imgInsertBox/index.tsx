import { C } from "@/style/theme";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

import { Text } from "@/style/ui";
import { useInput } from "../studentEditBox.hooks";
import { useAtomValue } from "jotai";
import { studentInfoAtom } from "@/store/component";

const ImgInsertBox = () => {
  const { handleStudentDataChange } = useInput();
  const studentInfo = useAtomValue(studentInfoAtom);

  return (
    <Container>
      {studentInfo.profileImg ? (
        <PreviewImgBox src={studentInfo.profileImg} />
      ) : (
        <>
          <StyledImgInput htmlFor="img">
            <Text fontType="Title1" color={C.white}>
              +
            </Text>
          </StyledImgInput>
          <InvisibleImgInput
            name="profileImg"
            id="img"
            type="file"
            accept="image/*"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleStudentDataChange(e)
            }
          />
        </>
      )}
    </Container>
  );
};

export default ImgInsertBox;

const Container = styled.div`
  width: 28rem;
  height: 20rem;

  position: relative;

  border-radius: 1.2rem;
`;

const InvisibleImgInput = styled.input`
  display: none;
`;

const StyledImgInput = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 1.2rem;
  background-color: ${C.gray100};
`;

const PreviewImgBox = styled.img`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 1.2rem;

  outline: none;
`;

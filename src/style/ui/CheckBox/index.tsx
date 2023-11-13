import { C, fonts } from "@/style/theme";
import React, { useState } from "react";
import { styled, css } from "styled-components";

import { CheckBoxAttribute } from "@/type/ui/CheckBoxAttribute.type";

const CheckBox = ({ checkboxList }: CheckBoxAttribute) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      {checkboxList.map((e, i) => {
        return (
          <CheckBoxElement
            isSelected={selectedIndex === i}
            key={`CheckBox ${i}`}
            onClick={() => setSelectedIndex(i)}
          >
            {e}
          </CheckBoxElement>
        );
      })}
    </Container>
  );
};

export default CheckBox;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  box-sizing: border-box;

  border-radius: 0.6rem;
  border: 0.5px solid ${C.gray200};
  background-color: ${C.white};

  overflow: hidden;
  cursor: pointer;
`;

const CheckBoxElement = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  ${fonts.Footnote}
  border-right: 0.5px solid ${C.gray200};

  &:hover {
    background-color: ${({ isSelected }) => !isSelected && C.gray50};
    transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${C.white};
      background-color: ${C.green};
    `}
`;

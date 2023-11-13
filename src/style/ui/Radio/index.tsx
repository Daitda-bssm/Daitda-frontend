import { C, fonts } from "@/style/theme";
import { RadiotypeAttribute } from "@/type/ui/RadioTypeAttribute.type";
import { useState } from "react";
import styled, { css } from "styled-components";

const Radio = ({ radioElementList }: RadiotypeAttribute) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container>
      {radioElementList.map((e, i) => {
        return (
          <RadioElement
            selected={selectedIndex === i}
            onClick={() => setSelectedIndex(i)}
            key={i}
          >
            {e}
          </RadioElement>
        );
      })}
    </Container>
  );
};

export default Radio;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 0.2rem;
  padding: 0.2rem;
  border-radius: 0.4rem;
  background-color: ${C.gray50};
`;

const RadioElement = styled.div<{ selected: boolean }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.2rem;
  ${fonts.SubHead}

  cursor: pointer;
  transition: 0.5s cubic-bezier(0.3, 0.49, 0.5, 1);

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: 0px 0px 5px ${C.gray75};
      background-color: ${C.white};
      border-radius: 0.4rem;
    `}
`;

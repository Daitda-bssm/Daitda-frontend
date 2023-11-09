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
  width: 11.1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.2rem;
  box-sizing: border-box;
  border-radius: 0.4rem;
  background-color: ${C.gray50};
`;

const RadioElement = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.6rem;
  ${fonts.SubHead}

  cursor: pointer;
  transition: 0.5s cubic-bezier(0.3, 0.49, 0.5, 1);

  ${({ selected }) =>
    selected
      ? css`
          box-shadow: 0px 0px 5px ${C.gray75};
          background-color: ${C.white};
          border-radius: 0.4rem;
        `
      : ""}
`;

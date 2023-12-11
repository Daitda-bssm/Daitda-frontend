import styled from "styled-components";

import { C } from "@/style/theme";
import { Text } from "@/style/ui";

import { ButtonAttribute } from "@/type/ui/ButtonAttribute.type";

const Button = ({
  width = "fit-content",
  color = C.black,
  hoverColor = C.black,
  backgroundColor = C.white,
  hoverBackgroundColor = C.gray200,
  label,
  onClick,
}: ButtonAttribute) => {
  return (
    <Container
      style={{ width }}
      color={color}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      <Text fontType="Body">{label}</Text>
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonAttribute>`
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;

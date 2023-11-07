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
      style={{ width, color, backgroundColor }}
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
  padding: 1rem 1.2rem;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;

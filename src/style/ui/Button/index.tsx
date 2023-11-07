import styled from "styled-components";

import { C } from "@/style/theme/color";

import { ButtonAttribute } from "@/type/ui/ButtonAttribute.type";
import { fonts } from "@/style/theme/font";

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
      {label}
    </Container>
  );
};

export default Button;

const Container = styled.button<ButtonAttribute>`
  ${fonts.Body}

  padding: 1rem 1.2rem;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;

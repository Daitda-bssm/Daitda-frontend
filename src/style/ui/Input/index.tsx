import React from "react";
import styled, { RuleSet } from "styled-components";
import { Text } from "@/style/ui";
import { InputAttribute } from "@/type/ui/InputAttribute.type";
import { C } from "@/style/theme";

const Input = ({
  name,
  width,
  height,
  fontType,
  label,
  placeholder,
  maxLength,
  onChange,
}: InputAttribute) => {
  return (
    <Container>
      {label && <Text fontType="SubHead">{label}</Text>}
      <StyledInput
        fontType={fontType}
        name={name}
        style={{ width: `${width}rem`, height: `${height}rem` }}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input<{ fontType: RuleSet<object> }>`
  outline: none;
  border: none;
  padding: 0.6rem;
  ${({ fontType }) => fontType};

  &::placeholder {
    color: ${C.gray400};
  }
`;

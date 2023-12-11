import { C, fonts } from "@/style/theme";
import { TextAreaAttribute } from "@/type/ui/TextAreaAttribute.type";
import styled, { RuleSet } from "styled-components";
import { useState } from "react";

const TextArea = ({
  width,
  height,
  name,
  maxLength,
  onChange,
  placeholder,
  fontType,
}: TextAreaAttribute) => {
  const [textLength, setTextLength] = useState(0);

  return (
    <Container>
      <StyledTextArea
        name={name}
        style={{ width: `${width}rem`, height: `${height}rem` }}
        fontType={fontType}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
          setTextLength(e.target.value.length);
        }}
        maxLength={maxLength}
      />
      <CurrentTextLength>
        {textLength} / {maxLength}
      </CurrentTextLength>
    </Container>
  );
};

export default TextArea;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  gap: 0.5rem;
`;

const StyledTextArea = styled.textarea<{ fontType: RuleSet<object> }>`
  outline: none;
  border: none;
  padding: 0.6rem;
  resize: none;

  ${({ fontType }) => fontType};

  &::placeholder {
    color: ${C.gray400};
  }
`;

const CurrentTextLength = styled.div`
  color: ${C.gray200};

  ${fonts.Callout};
`;

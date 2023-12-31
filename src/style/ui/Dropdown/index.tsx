import styled from "styled-components";

import { DropdownAttribute } from "@/type/ui/DropdownAttribute.type";
import { useRef, useState } from "react";

import { C, fonts } from "@/style/theme";
import { Text } from "@/style/ui";
import { Arrow } from "@/style/icon";
import { useOutsideClick } from "@/hooks/common/useOutsideClick";

const Dropdown = ({
  defaultText,
  name,
  dropdownList,
  onChange,
}: DropdownAttribute) => {
  const DropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useOutsideClick(DropdownRef, false);
  const [defaultValue, setDefaultValue] = useState(defaultText);

  return (
    <Container>
      <SelectedDropdown
        ref={DropdownRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <SelectedText>{defaultValue}</SelectedText>
        <Arrow width={1.2} height={1.2} deg={isOpen ? 0 : -180} />
      </SelectedDropdown>
      {isOpen && (
        <DropdownListContainer>
          {dropdownList.map((element, i) => {
            return (
              <DropdownListElement
                key={i}
                name={name}
                value={element}
                onClick={(e) => {
                  setDefaultValue(element);
                  setIsOpen(false);
                  onChange(e);
                }}
              >
                {element}
              </DropdownListElement>
            );
          })}
        </DropdownListContainer>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  width: 13rem;
  height: fit-content;

  position: relative;

  display: flex;
`;

const SelectedDropdown = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.8rem 1.6rem;

  display: grid;
  grid-template-columns: 5fr 1fr;
  justify-content: center;
  align-items: center;

  gap: 1.3rem;

  border: 0.25px solid ${C.gray200};
  border-radius: 6px;

  background-color: ${C.white};
  outline: none;

  cursor: pointer;

  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${C.gray50};
  }
`;

const SelectedText = styled.div`
  width: 8rem;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  ${fonts.SubHead}
`;

const DropdownListContainer = styled.div`
  width: 100%;

  position: absolute;
  top: 4rem;

  display: flex;
  flex-direction: column;

  border-radius: 6px;
  border: 0.25px solid ${C.gray200};

  overflow: hidden;
`;

const DropdownListElement = styled.button`
  width: 100%;
  height: fit-content;

  padding: 0.8rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.3rem;

  background-color: white;
  outline: none;

  border-bottom: 0.25px solid ${C.gray200};

  cursor: pointer;

  transition: 0.2s cubic-bezier(0.04, 0, 0, 0.89);
  background-color: ${C.white};

  ${fonts.Caption};

  &:hover {
    color: ${C.white};
    background-color: ${C.green300};
  }
`;

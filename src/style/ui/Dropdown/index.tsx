import styled from "styled-components";
import Image from "next/image";

import { DropdownAttribute } from "@/type/ui/DropdownAttribute.type";
import { useRef, useState } from "react";

import { C, fonts } from "@/style/theme";
import { Text, FlexibleImgContainer } from "@/style/ui";
import Arrow1 from "@/style/icon/arrow1.svg";
import { useOutsideClick } from "@/hooks/common/useOutsideClick";

const Dropdown = ({ defaultText, dropdownList }: DropdownAttribute) => {
  const DropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useOutsideClick(DropdownRef, false);
  const [defaultValue, setDefaultValue] = useState(defaultText);

  return (
    <Container>
      <SelectedDropdown
        ref={DropdownRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Text fontType="SubHead">{defaultValue}</Text>
        <FlexibleImgContainer width={1.6} height={1.6}>
          <Image src={Arrow1} alt="" fill />
        </FlexibleImgContainer>
      </SelectedDropdown>
      {isOpen && (
        <DropdownListContainer>
          {dropdownList.map((e, i) => {
            return (
              <DropdownListElement
                key={i}
                onClick={() => {
                  setDefaultValue(e);
                  setIsOpen(false);
                }}
              >
                {e}
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

  ${fonts.SubHead};
`;

const SelectedDropdown = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.8rem 1.6rem;

  display: grid;
  grid-template-columns: 5fr 1fr;

  gap: 1.3rem;

  border: 0.25px solid ${C.gray200};
  border-radius: 6px;

  cursor: pointer;

  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${C.gray50};
  }
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

const DropdownListElement = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.8rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.3rem;

  border-bottom: 0.25px solid ${C.gray200};

  cursor: pointer;

  transition: 0.2s cubic-bezier(0.04, 0, 0, 0.89);
  background-color: ${C.white};

  &:hover {
    color: ${C.white};
    background-color: ${C.green300};
  }
`;

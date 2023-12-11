import React from "react";
import styled from "styled-components";
import { C, fonts } from "@/style/theme";

import { SearchIcon } from "@/style/icon";

const SearchBox = () => {
  return (
    <Container>
      <SearchIcon width={1.6} height={1.8} />
      <SearchInput placeholder="추가로 원하시는 조건을 적어주세요." />
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchInput = styled.input`
  width: 18rem;
  height: 2.2rem;
  border: none;
  outline: none;

  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  ${fonts.SubHead}

  &:focus {
    box-shadow: 0px 1.25px 0px ${C.gray800};
  }
`;

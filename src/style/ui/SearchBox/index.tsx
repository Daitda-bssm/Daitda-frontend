import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FlexibleImgContainer } from "..";
import { C, fonts } from "@/style/theme";

import SearchIcon from "@/style/icon/searchIcon.svg";

const SearchBox = () => {
  return (
    <Container>
      <FlexibleImgContainer width={1.4} height={1.6}>
        <Image src={SearchIcon} alt="이미지를 불러오는데 실패했습니다." fill />
      </FlexibleImgContainer>
      <SearchInput placeholder="추가로 원하시는 조건을 적어주세요." />
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 1rem;

  border: 0.5px solid ${C.gray75};
  border-radius: 999px;
  padding: 0.8rem 1.6rem;
`;

const SearchInput = styled.input`
  width: 18rem;
  height: 1.6rem;
  border: none;
  outline: none;

  ${fonts.SubHead}
`;

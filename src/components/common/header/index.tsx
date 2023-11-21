import styled from "styled-components";
import Image from "next/image";

import { FlexibleImgContainer, Row } from "@/style/ui";

import Logo from "@/style/icon/Logo.svg";
import Button from "@/style/ui/Button";
import { C } from "@/style/theme";

const Header = () => {
  return (
    <Container>
      <FlexibleImgContainer width={7} height={2}>
        <Image src={Logo} alt="이미지를 불러오지 못했습니다." fill />
      </FlexibleImgContainer>
      <Row>
        <Button label="로그인" />
      </Row>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 6rem;

  justify-content: space-between;
  align-items: center;

  padding: 0 8rem;
  box-sizing: border-box;

  z-index: 1;
  background-color: ${C.white};
`;

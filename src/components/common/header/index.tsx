import styled from "styled-components";
import Image from "next/image";

import { FlexibleImgContainer, Row } from "@/style/ui";

import Logo from "@/style/icon/Logo.svg";
import Button from "@/style/ui/Button";

const Header = () => {
  return (
    <Container>
      <FlexibleImgContainer width={7} height={2}>
        <Image src={Logo} alt="" fill />
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

  padding: 0 12rem;
  box-sizing: border-box;
`;

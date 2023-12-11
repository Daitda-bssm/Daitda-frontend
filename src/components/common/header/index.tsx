import styled from "styled-components";

import { Row, Text } from "@/style/ui";

import { Logo } from "@/style/icon";
import Button from "@/style/ui/Button";
import { C } from "@/style/theme";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Row gap={4} alignItems="center">
        <Logo width={7} height={2} />
        <Link href="/edit">
          <Text fontType="Callout">정보 수정</Text>
        </Link>
      </Row>
      <Link href="/login">
        <Button hoverBackgroundColor={C.gray50} label="로그인" />
      </Link>
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

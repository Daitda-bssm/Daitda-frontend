"use client";

import { ReactNode } from "react";
import styled from "styled-components";

import Header from "@/components/common/header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
`;

export default AppLayout;
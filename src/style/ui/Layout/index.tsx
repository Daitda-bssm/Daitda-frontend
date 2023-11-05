import styled from "styled-components";

export const AppLayout = (children: React.ReactNode) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
`;

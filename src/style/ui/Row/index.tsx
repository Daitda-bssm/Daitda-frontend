import styled from "styled-components";
import { RowAttribute } from "@/type/ui/FlexBoxAttributes.type";

const Row = ({
  alignItems,
  justifyContent,
  gap = 0,
  children,
}: RowAttribute) => {
  return (
    <Container style={{ alignItems, justifyContent, gap: `${gap}rem` }}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Row;

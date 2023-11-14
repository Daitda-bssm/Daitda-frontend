import styled from "styled-components";
import { ColumnAttribute } from "@/type/ui/FlexBoxAttributes.type";

const Column = ({
  alignItems,
  justifyContent,
  gap = 0,
  children,
}: ColumnAttribute) => {
  return (
    <Container style={{ alignItems, justifyContent, gap: `${gap}rem` }}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Column;

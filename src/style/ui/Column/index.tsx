import styled from "styled-components";
import { ColumnAttribute } from "@/type/ui/FlexBoxAttributes.type";

const Column = ({
  alignItems = "stretch",
  justifyContent = "stretch",
  gap = 0,
  children,
}: ColumnAttribute) => {
  <Container style={{ alignItems, justifyContent, gap }}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Column;

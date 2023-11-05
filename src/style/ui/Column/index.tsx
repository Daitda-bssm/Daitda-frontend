import styled from "styled-components";
import { ColumnAttribute } from "@/type/ui/flexBoxAttributes.type";

export const Column = (
  {
    alignItems = "stretch",
    justifyContent = "stretch",
    gap = 0,
  }: ColumnAttribute,
  children: React.ReactNode
) => {
  <Container style={{ alignItems, justifyContent, gap }}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

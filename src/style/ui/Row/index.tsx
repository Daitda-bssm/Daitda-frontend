import styled from "styled-components";
import { RowAttribute } from "@/type/ui/flexBoxAttributes.type";

export const Row = (
  { alignItems = "stretch", justifyContent = "stretch", gap = 0 }: RowAttribute,
  children: React.ReactNode
) => {
  <Container style={{ alignItems, justifyContent, gap }}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
`;

import { C } from "@/style/theme";
import React from "react";
import styled from "styled-components";

import { Text } from "@/style/ui";
import { PositionTagAttribute } from "@/type/components/PositionTagAttribute.type";

const PositonTag = ({ tagName }: PositionTagAttribute) => {
  return (
    <Container>
      <Text fontType="Caption" color={C.green300}>
        {tagName}
      </Text>
    </Container>
  );
};

export default PositonTag;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 99px;

  padding: 0.3rem 0.8rem;
  background-color: ${C.green100};
`;

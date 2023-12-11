import React from "react";
import styled from "styled-components";

import { Text } from "@/style/ui";
import { CapabilityParagraphAttribute } from "@/type/components/CapabilityParagraphAttribute.type";

const CapabilityParagraph = ({ title, desc }: CapabilityParagraphAttribute) => {
  return (
    <Container>
      <Text fontType="HeadLine">{title}</Text>
      <Text fontType="Body">{desc}</Text>
    </Container>
  );
};

export default CapabilityParagraph;

const Container = styled.div`
  width: 28rem;
  height: 13rem;

  overflow-y: scroll;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 1.5rem;
`;

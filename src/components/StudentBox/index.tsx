import { StudentBoxAttribute } from "@/type/components/StudentBoxAttrubute.type";
import styled from "styled-components";

import { Row, Text } from "@/style/ui";
import { C } from "@/style/theme";
import { PositionTag } from "@/components";

const StudentBox = ({
  name,
  grade,
  position,
  frameworks,
  imgUrl,
  onClick,
}: StudentBoxAttribute) => {
  return (
    <Container onClick={onClick}>
      <임시이미지 />
      <Row gap={1.3} alignItems="center">
        <Text fontType="Title2">{name}</Text>
        <Text fontType="Callout" color={C.gray400}>
          {grade}학년
        </Text>
      </Row>
      <Row alignItems="center" gap={1}>
        <PositionTag tagName={position} />
        <FramworkContainer gap={1}>
          {frameworks.map((e, i) => {
            return (
              <>
                <Text
                  fontType="Footnote"
                  color={C.gray400}
                  key={`Frameworks ${i}`}
                >
                  # {e}
                </Text>
              </>
            );
          })}
        </FramworkContainer>
      </Row>
    </Container>
  );
};

export default StudentBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.4rem;

  padding: 0.5rem;
  box-sizing: border-box;

  border-radius: 1rem;
  cursor: pointer;

  transition: 0.25s cubic-bezier(0.3, 0.49, 0.5, 1);

  &:hover {
    background-color: ${C.gray50};
  }
`;

const 임시이미지 = styled.div`
  width: 28rem;
  height: 20rem;

  background-color: black;
  border-radius: 1.2rem;
`;

const FramworkContainer = styled(Row)``;

import styled from "styled-components";
import ImgInsertBox from "./imgInsertBox";
import StudentDeafultInfoBox from "./studentDefaultInfoBox";
import { Row } from "@/style/ui";

const StudentEditBox = () => {
  return (
    <Container>
      <Row gap={20} alignItems="center">
        <ImgInsertBox />
        <StudentDeafultInfoBox />
      </Row>
      <DetailGridContainer></DetailGridContainer>
    </Container>
  );
};

export default StudentEditBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailGridContainer = styled.div`
  display: grid;

  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

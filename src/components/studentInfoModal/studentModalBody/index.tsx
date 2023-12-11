import React from "react";
import styled from "styled-components";

import MyCapability from "../myCapability";

const StudentModalBody = () => {
  return (
    <Container>
      <MyCapability
        title="Skills 🛠"
        desc="Spring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\n"
      />
      <MyCapability
        title="Skills 🛠"
        desc="Spring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\n"
      />
      <MyCapability
        title="Skills 🛠"
        desc="Spring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\n"
      />
      <MyCapability
        title="Skills 🛠"
        desc="Spring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\nSpring을 사용할 수 있습니다\n"
      />
    </Container>
  );
};

export default StudentModalBody;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
`;

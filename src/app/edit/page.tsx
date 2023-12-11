"use client";

import styled from "styled-components";
import { AppLayout } from "@/style/ui";
import { StudentEditBox } from "@/components";

const Edit = () => {
  return (
    <AppLayout>
      <StudentEditBox />
    </AppLayout>
  );
};

export default Edit;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

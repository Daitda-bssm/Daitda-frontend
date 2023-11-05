import styled from "styled-components";
import { TextAttribute } from "@/type/ui/TextAttribute.type";
import { fonts } from "@/style/theme/font";

type Font = keyof typeof fonts;

export const Text = (
  {
    fontType,
    color = "black",
    textAlign = "center",
    ellipsis = false,
  }: TextAttribute,
  children: React.ReactNode
) => {
  <Container
    fontType={fontType}
    ellipsis={ellipsis}
    style={{ color, textAlign }}
  >
    {children}
  </Container>;
};

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => fontType};
  text-overflow: ${({ ellipsis }) => (ellipsis ? "ellipsis" : "clip")};
`;

import styled from "styled-components";
import { TextAttribute } from "@/type/ui/TextAttribute.type";
import { C, fonts } from "@/style/theme";

type Font = keyof typeof fonts;

const Text = ({
  fontType,
  color = "black",
  textAlign = "center",
  ellipsis = false,
  children,
}: TextAttribute) => {
  return (
    <Container
      fontType={fontType}
      ellipsis={ellipsis}
      style={{ color, textAlign }}
    >
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => fonts[fontType]};
  text-overflow: ${({ ellipsis }) => (ellipsis ? "ellipsis" : "clip")};
`;

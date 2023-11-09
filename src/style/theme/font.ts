import { css } from "styled-components";

const fontGenerator = (weight: string, size: number, lineHeight: number) => css`
  font-family: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}rem;
`;

const fonts = {
  LargeTitle: fontGenerator("AppleSDGothicNeoSB00", 3.2, 3.9),

  Title1: fontGenerator("AppleSDGothicNeoR00", 2.6, 3.2),
  Title2: fontGenerator("AppleSDGothicNeoR00", 2, 2.5),
  Title3: fontGenerator("AppleSDGothicNeoR00", 1.8, 2.3),

  HeadLine: fontGenerator("AppleSDGothicNeoSB00", 1.5, 2),
  Body: fontGenerator("AppleSDGothicNeoR00", 1.5, 2),
  Callout: fontGenerator("AppleSDGothicNeoR00", 1.4, 1.9),
  SubHead: fontGenerator("AppleSDGothicNeoR00", 1.3, 1.8),
  Footnote: fontGenerator("AppleSDGothicNeoR00", 1.2, 1.7),
  Caption: fontGenerator("AppleSDGothicNeoR00", 1.1, 1.6),
};

export default fonts;

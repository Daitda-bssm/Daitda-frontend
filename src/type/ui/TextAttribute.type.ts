import { fonts } from "@/style/theme/font";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

type Font = keyof typeof fonts;

export interface TextAttribute {
  fontType: Font;
  color: CSSProperties["color"];
  textAlign: CSSProperties["textAlign"];
  ellipsis: boolean;
  children: ReactNode;
}

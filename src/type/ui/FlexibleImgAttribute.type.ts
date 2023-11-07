import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface FlexibleImgProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];

  children: ReactNode;
}

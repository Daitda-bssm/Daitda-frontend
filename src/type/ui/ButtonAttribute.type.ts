import { ButtonHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

export interface ButtonAttribute
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: CSSProperties["width"];
  color?: CSSProperties["color"];
  hoverColor?: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
  hoverBackgroundColor?: CSSProperties["backgroundColor"];

  label?: string;
}

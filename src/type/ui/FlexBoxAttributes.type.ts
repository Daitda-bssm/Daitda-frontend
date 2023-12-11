import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface RowAttribute {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
}

export interface ColumnAttribute {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  children: ReactNode;
}

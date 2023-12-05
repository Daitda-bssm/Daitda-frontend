import { fonts } from "@/style/theme";
import { CSSProperties, ChangeEventHandler } from "react";
import { RuleSet } from "styled-components";

export interface InputAttribute {
  label?: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  maxLength?: number;
  name: string;
  fontType: RuleSet<object>;
}

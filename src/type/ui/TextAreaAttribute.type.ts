import { ChangeEventHandler } from "react";
import { CSSProperties, RuleSet } from "styled-components";

export interface TextAreaAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder: string;
  fontType: RuleSet<object>;
}

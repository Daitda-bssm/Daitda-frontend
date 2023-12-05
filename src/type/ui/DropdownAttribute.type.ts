import { MouseEventHandler } from "react";

export interface DropdownAttribute {
  defaultText: string;
  dropdownList: string[];
  name: string;
  onChange: MouseEventHandler<HTMLButtonElement>;
}

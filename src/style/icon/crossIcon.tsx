import { SvgAttribute } from "@/type/ui/SvgAttribute.type";
import React from "react";

const CrossIcon = ({ width, height }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20L4 4M20 4L4 20"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CrossIcon;

import { SvgAttribute } from "@/type/ui/SvgAttribute.type";
import React from "react";

const VelogIcon = ({ width, height }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox=" 0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.875 0H13.125C14.1605 0 15 0.839461 15 1.875V13.125C15 14.1605 14.1605 15 13.125 15H1.875C0.839461 15 0 14.1605 0 13.125V1.875C0 0.839461 0.839461 0 1.875 0ZM3.82812 4.52499V5.11563H5.23438L6.30312 11.1344L7.69531 11.0359C9.06406 9.30156 9.9875 8.00313 10.4656 7.14062C10.9531 6.26875 11.1969 5.54218 11.1969 4.96094C11.1969 4.61407 11.0938 4.35156 10.8875 4.17343C10.6906 3.9953 10.4422 3.90625 10.1422 3.90625C9.57969 3.90625 9.11094 4.14532 8.73594 4.62343C9.10156 4.86719 9.35 5.06874 9.48125 5.22812C9.62187 5.37813 9.69219 5.57968 9.69219 5.8328C9.69219 6.25469 9.56563 6.7328 9.3125 7.26719C9.06875 7.80157 8.80156 8.275 8.51094 8.6875C8.32344 8.95 8.08438 9.27344 7.79375 9.65781L6.87969 4.46875C6.8047 4.09374 6.57032 3.90625 6.17657 3.90625C5.99844 3.90625 5.65624 3.98125 5.14999 4.13124C4.64374 4.27187 4.20312 4.40313 3.82812 4.52499Z"
        fill="#454C53"
      />
    </svg>
  );
};

export default VelogIcon;
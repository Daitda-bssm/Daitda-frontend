import { SvgAttribute } from "@/type/ui/SvgAttribute.type";
import React from "react";

const GithubIcon = ({ width, height }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_445_582)">
        <path
          d="M7.5 0C11.6438 0 15 3.35625 15 7.5C14.9996 9.07144 14.5064 10.6032 13.5899 11.8796C12.6733 13.1561 11.3795 14.113 9.89063 14.6156C9.51563 14.6906 9.375 14.4563 9.375 14.2594C9.375 14.0063 9.38438 13.2 9.38438 12.1969C9.38438 11.4938 9.15 11.0437 8.87813 10.8094C10.5469 10.6219 12.3 9.98438 12.3 7.10625C12.3 6.28125 12.0094 5.61562 11.5313 5.09062C11.6063 4.90312 11.8688 4.13438 11.4563 3.10312C11.4563 3.10312 10.8281 2.89688 9.39375 3.87188C8.79375 3.70312 8.15625 3.61875 7.51875 3.61875C6.88125 3.61875 6.24375 3.70312 5.64375 3.87188C4.20938 2.90625 3.58125 3.10312 3.58125 3.10312C3.16875 4.13438 3.43125 4.90312 3.50625 5.09062C3.02813 5.61562 2.7375 6.29063 2.7375 7.10625C2.7375 9.975 4.48125 10.6219 6.15 10.8094C5.93438 10.9969 5.7375 11.325 5.67188 11.8125C5.24063 12.0094 4.1625 12.3281 3.4875 11.1937C3.34688 10.9688 2.925 10.4156 2.33438 10.425C1.70625 10.4344 2.08125 10.7812 2.34375 10.9219C2.6625 11.1 3.02813 11.7656 3.1125 11.9812C3.2625 12.4031 3.75 13.2094 5.63438 12.8625C5.63438 13.4906 5.64375 14.0813 5.64375 14.2594C5.64375 14.4563 5.50313 14.6813 5.12813 14.6156C3.63435 14.1184 2.33506 13.1635 1.41459 11.8862C0.494106 10.609 -0.000825449 9.07435 1.03342e-06 7.5C1.03342e-06 3.35625 3.35625 0 7.5 0Z"
          fill="#454C53"
        />
      </g>
      <defs>
        <clipPath id="clip0_445_582">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GithubIcon;
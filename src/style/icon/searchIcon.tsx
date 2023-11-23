import { SvgAttribute } from "@/type/ui/SvgAttribute.type";
import React from "react";

const SearchIcon = ({ width, height }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9998 15.9998L12.3807 12.3807M12.3807 12.3807C12.9997 11.7616 13.4908 11.0267 13.8258 10.2178C14.1609 9.40899 14.3333 8.54207 14.3333 7.66658C14.3333 6.79109 14.1609 5.92417 13.8258 5.11532C13.4908 4.30647 12.9997 3.57153 12.3807 2.95247C11.7616 2.3334 11.0267 1.84233 10.2178 1.50729C9.40896 1.17226 8.54204 0.999817 7.66655 0.999817C6.79106 0.999817 5.92414 1.17226 5.11529 1.50729C4.30644 1.84233 3.5715 2.3334 2.95244 2.95247C1.70218 4.20273 0.999786 5.89844 0.999786 7.66658C0.999786 9.43471 1.70218 11.1304 2.95244 12.3807C4.2027 13.631 5.89841 14.3333 7.66655 14.3333C9.43468 14.3333 11.1304 13.631 12.3807 12.3807Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;

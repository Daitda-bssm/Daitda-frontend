import React from "react";

const Arrow = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="16" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_197_16" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_197_16"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Arrow;
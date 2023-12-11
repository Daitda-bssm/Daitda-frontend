import { SvgAttribute } from "@/type/ui/SvgAttribute.type";
import React from "react";

const NotionIcon = ({ width, height }: SvgAttribute) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_445_592)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.81082 2.66946C3.27496 3.04655 3.44908 3.01778 4.32068 2.95963L12.5375 2.46624C12.7118 2.46624 12.5669 2.29239 12.5087 2.2635L11.1441 1.27697C10.8826 1.07396 10.5343 0.841476 9.86659 0.899633L1.91022 1.47995C1.62005 1.50872 1.56209 1.6538 1.67764 1.77009L2.81082 2.66946ZM3.30414 4.58439V13.2299C3.30414 13.6946 3.53633 13.8684 4.05893 13.8397L13.0892 13.3171C13.6121 13.2884 13.6703 12.9688 13.6703 12.5914V4.00382C13.6703 3.62698 13.5254 3.42377 13.2053 3.45278L3.76855 4.00382C3.42028 4.03309 3.30414 4.20729 3.30414 4.58439ZM12.2188 5.04816C12.2767 5.30953 12.2188 5.57066 11.957 5.60005L11.5219 5.68674V12.0694C11.1441 12.2725 10.7958 12.3886 10.5055 12.3886C10.0407 12.3886 9.92431 12.2434 9.57619 11.8084L6.73015 7.34051V11.6634L7.63075 11.8666C7.63075 11.8666 7.63075 12.3886 6.90415 12.3886L4.90108 12.5048C4.84289 12.3886 4.90108 12.0987 5.10426 12.0406L5.62698 11.8957V6.1801L4.90123 6.12194C4.84301 5.86057 4.98798 5.4837 5.39479 5.45446L7.54362 5.30961L10.5055 9.8357V5.8318L9.75031 5.74513C9.69236 5.42561 9.92431 5.19359 10.2147 5.16482L12.2188 5.04816ZM1.24218 0.696655L9.51809 0.0871913C10.5344 2.85655e-05 10.7959 0.0584208 11.4346 0.522418L14.0764 2.3792C14.5123 2.69849 14.6576 2.78542 14.6576 3.13348V13.3171C14.6576 13.9554 14.4251 14.3328 13.6122 14.3906L4.00142 14.9709C3.39122 15 3.10081 14.9131 2.78126 14.5066L0.835816 11.9825C0.487253 11.5179 0.342285 11.1703 0.342285 10.7636V1.71172C0.342285 1.1898 0.574856 0.754431 1.24218 0.696655Z"
          fill="#454C53"
        />
      </g>
      <defs>
        <clipPath id="clip0_445_592">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NotionIcon;

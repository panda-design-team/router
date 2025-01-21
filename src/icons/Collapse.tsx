import type { SVGProps } from "react";
const SvgCollapse = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            d="M14 12v1.333H2V12zM4.398 2.602l.942.943-2.12 2.121 2.12 2.122-.942.942-3.064-3.064zM14 7.333v1.333H8V7.333zm0-4.667V4H8V2.666z"
        />
    </svg>
);
export default SvgCollapse;

import * as React from "react";
import { SVGProps } from "react";
export default function InfoSvg(props: SVGProps<SVGSVGElement>) { 

return  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    enableBackground="new 0 0 32 32"
    xmlSpace="preserve"
    width={50}
    {...props}
  >
    <rect x={15} y={14} width={2} height={8} />
    <rect x={15} y={10} width={2} height={2} />
    <circle
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      cx={16}
      cy={16}
      r={12}
    />
  </svg>
}
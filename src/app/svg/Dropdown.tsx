import * as React from "react";
import { SVGProps } from "react";
const DropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#2e2e2e"
    viewBox="-6.5 0 32 32 "
    {...props}
  >
    <title>{"dropdown"}</title>
    <path d="m18.813 11.406-7.906 9.906c-.75.906-1.906.906-2.625 0L.376 11.406c-.75-.938-.375-1.656.781-1.656h16.875c1.188 0 1.531.719.781 1.656z" />
  </svg>
);
export default DropDown;

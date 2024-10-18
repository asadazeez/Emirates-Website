import * as React from "react";
import { SVGProps } from "react";
const SearchSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#2E2E2E"
      stroke="#2E2E2E"
      strokeWidth={0.047}
      d="m17.81 15.523-.011.016.014.014 5.145 5.146a1.343 1.343 0 0 1-1.897 1.897l-5.145-5.145-.015-.015-.016.013a9.482 9.482 0 0 1-5.705 1.9c-5.256 0-9.532-4.276-9.532-9.531C.648 4.562 4.924.286 10.18.286s9.532 4.276 9.532 9.532a9.482 9.482 0 0 1-1.901 5.705ZM3.333 9.818a6.857 6.857 0 0 0 6.848 6.848 6.848 6.848 0 1 0-6.848-6.848Z"
    />
  </svg>
);
export default SearchSvg;

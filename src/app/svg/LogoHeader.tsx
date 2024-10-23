import * as React from "react";
import { SVGProps } from "react";
const LogoSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={240}
    height={78}
    fill="none"
  className=""
    {...props}
  >
    <path fill="url(#a)" d="M0 0h240v77.275H0V0Z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.002 .00621)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={500}
        height={161}
      />
    </defs>
  </svg>
);
export default LogoSvg;

import type { SVGProps } from "react";

/** Function アイコン (f(x) の数学的表現) */
export function FunctionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <text x="3" y="17" fontFamily="serif" fontSize="16" fontStyle="italic" fill="currentColor">
        f(x)
      </text>
    </svg>
  );
}

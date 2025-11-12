import { memo } from "react";

export const SquareIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
));

SquareIcon.displayName = "SquareIcon";

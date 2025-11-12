import { memo } from "react";
import type { IconProps } from "../types";

export const WindowIcon = memo(({ size = 24, color = "currentColor" }: Omit<IconProps, "name">) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="2" />
    <path d="M3 8h18" stroke={color} strokeWidth="2" />
    <circle cx="6" cy="6" r="0.5" fill={color} />
    <circle cx="8" cy="6" r="0.5" fill={color} />
    <circle cx="10" cy="6" r="0.5" fill={color} />
  </svg>
));

WindowIcon.displayName = "WindowIcon";

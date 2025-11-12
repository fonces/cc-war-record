import { memo } from "react";
import type { IconProps } from "../types";

/**
 * OBS/配信用のビデオアイコン
 * モニター画面と録画インジケーターを組み合わせたデザイン
 */
export const VideoIcon = memo(({ size = 24, color = "currentColor" }: Omit<IconProps, "name">) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* モニター画面 */}
    <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* モニタースタンド */}
    <path d="M8 21H16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* 録画インジケーター（REC） */}
    <circle cx="6" cy="7" r="1.5" fill={color} />
    {/* プレイボタン/ストリーミングアイコン */}
    <path d="M10 8L15 11L10 14V8Z" fill={color} />
  </svg>
));

VideoIcon.displayName = "VideoIcon";

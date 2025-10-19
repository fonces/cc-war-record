import styled from "styled-components";
import type { Job } from "@/types";
import { getJobIconUrl, getJobInfo } from "@/types";

type JobIconProps = {
  /** ジョブコード */
  job: Job;
  /** サイズ */
  size?: number;
  /** 代替テキスト */
  alt?: string;
  /** クラス名 */
  className?: string;
};

const StyledJobIcon = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  object-fit: contain;
  display: inline-block;
  filter: brightness(1.25);
`;

const StyledFallbackIcon = styled.div<{ size: number; bgColor: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${({ size }) => Math.max(size * 0.3, 10)}px;
`;

/**
 * FF14ジョブアイコンコンポーネント
 * XIVAPIからジョブアイコンを表示
 */
export const JobIcon = ({ job, size = 32, alt, className }: JobIconProps) => {
  const iconUrl = getJobIconUrl(job);
  const fallbackText = job;

  // JOB_INFOからジョブ色を取得（フォールバック用）
  const getJobColor = (job: Job): string => {
    const jobInfo = getJobInfo(job);
    return jobInfo ? jobInfo.color : "#6B7280";
  };

  if (!iconUrl) {
    return (
      <StyledFallbackIcon size={size} bgColor={getJobColor(job)} className={className} title={alt || job}>
        {fallbackText}
      </StyledFallbackIcon>
    );
  }

  return (
    <StyledJobIcon
      src={iconUrl}
      alt={alt || job}
      size={size}
      className={className}
      onError={(e) => {
        // 画像の読み込みに失敗した場合はフォールバックを表示
        const target = e.target as HTMLImageElement;
        target.style.display = "none";

        const fallback = document.createElement("div");
        fallback.className = className || "";
        fallback.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          background-color: ${getJobColor(job)};
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: ${Math.max(size * 0.3, 10)}px;
        `;
        fallback.textContent = fallbackText;
        fallback.title = alt || job;

        if (target.parentNode) {
          target.parentNode.insertBefore(fallback, target);
        }
      }}
    />
  );
};

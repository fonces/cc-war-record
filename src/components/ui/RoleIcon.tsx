import { memo } from "react";
import styled from "styled-components";
import { getRoleIconUrl, ROLE_INFO } from "@/types";
import type { Role } from "@/types";

type RoleIconProps = {
  /** ロールコード */
  role: Role;
  /** サイズ */
  size?: number;
  /** 代替テキスト */
  alt?: string;
  /** クラス名 */
  className?: string;
};

const StyledRoleIcon = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  object-fit: contain;
  display: inline-block;
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
 * FF14ロールアイコンコンポーネント
 * ロールアイコンを表示
 */
export const RoleIcon = memo(({ role, size = 32, alt, className }: RoleIconProps) => {
  const iconUrl = getRoleIconUrl(role);
  const roleInfo = ROLE_INFO[role];
  const fallbackText = roleInfo?.name || role;

  // ROLE_INFOからロール色を取得（フォールバック用）
  const getRoleColor = (role: Role): string => {
    const roleInfo = ROLE_INFO[role];
    return roleInfo ? roleInfo.color : "#6B7280";
  };

  if (!iconUrl) {
    return (
      <StyledFallbackIcon size={size} bgColor={getRoleColor(role)} className={className} title={alt || fallbackText}>
        {fallbackText}
      </StyledFallbackIcon>
    );
  }

  return (
    <StyledRoleIcon
      src={iconUrl}
      alt={alt || fallbackText}
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
          background-color: ${getRoleColor(role)};
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: ${Math.max(size * 0.3, 10)}px;
        `;
        fallback.textContent = fallbackText;
        fallback.title = alt || fallbackText;

        if (target.parentNode) {
          target.parentNode.insertBefore(fallback, target);
        }
      }}
    />
  );
});

RoleIcon.displayName = "RoleIcon";

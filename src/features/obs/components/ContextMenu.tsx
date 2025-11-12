import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";

interface ContextMenuProps {
  x: number;
  y: number;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

const MenuContainer = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing[1]};
  z-index: 10000;
  min-width: 160px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  &.danger {
    color: ${({ theme }) => theme.colors.error};

    &:hover {
      background: ${({ theme }) => theme.colors.error}15;
    }
  }
`;

/**
 * コンテキストメニューコンポーネント
 */
export function ContextMenu({ x, y, onEdit, onDelete, onClose }: ContextMenuProps) {
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // 画面外に出ないように調整
  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let adjustedX = x;
      let adjustedY = y;

      if (rect.right > viewportWidth) {
        adjustedX = viewportWidth - rect.width - 8;
      }

      if (rect.bottom > viewportHeight) {
        adjustedY = viewportHeight - rect.height - 8;
      }

      if (adjustedX !== x || adjustedY !== y) {
        menuRef.current.style.left = `${adjustedX}px`;
        menuRef.current.style.top = `${adjustedY}px`;
      }
    }
  }, [x, y]);

  const handleEdit = () => {
    onEdit();
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <MenuContainer ref={menuRef} $x={x} $y={y}>
      <MenuItem onClick={handleEdit}>
        <Icon name="edit" size={16} />
        {t("common.edit")}
      </MenuItem>
      <MenuItem className="danger" onClick={handleDelete}>
        <Icon name="delete" size={16} />
        {t("common.delete")}
      </MenuItem>
    </MenuContainer>
  );
}

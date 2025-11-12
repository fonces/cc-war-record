import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button, ButtonGroup } from "@/components/ui";
import { useTranslation } from "@/hooks";

const ControlPanelContainer = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  opacity: ${({ $visible }) => ($visible ? 1 : 0.7)};
  transition: opacity ${({ theme }) => theme.transitions.base};
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
`;

const InfoText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

interface ControlPanelProps {
  editMode: boolean;
  onToggleEditMode: () => void;
  onResetLayout: () => void;
  onOpenTemplates: () => void;
}

/**
 * OBSレイアウト編集のコントロールパネル
 * 編集モード切り替えとレイアウトリセット機能を提供
 */
export function ControlPanel({ editMode, onToggleEditMode, onResetLayout, onOpenTemplates }: ControlPanelProps) {
  const { t } = useTranslation();

  return createPortal(
    <ControlPanelContainer $visible={editMode}>
      <ButtonGroup direction="horizontal">
        <Button variant={editMode ? "primary" : "secondary"} size="sm" onClick={onToggleEditMode}>
          {editMode ? t("obs.editMode.disable") : t("obs.editMode.enable")}
        </Button>
        <Button variant="outline" size="sm" onClick={onOpenTemplates}>
          {t("obs.templates.button")}
        </Button>
        <Button variant="outline" size="sm" onClick={onResetLayout}>
          {t("obs.resetLayout")}
        </Button>
      </ButtonGroup>
      {editMode && <InfoText>{t("obs.editMode.instruction")}</InfoText>}
    </ControlPanelContainer>,
    document.body,
  );
}

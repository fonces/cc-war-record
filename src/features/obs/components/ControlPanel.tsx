import { createPortal } from "react-dom";
import styled from "styled-components";
import { ButtonGroup, Icon, IconicButton } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { useObsLayoutStore } from "../store/obsLayoutStore";

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
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
  width: 100%;
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
  const { screenSize } = useObsLayoutStore();

  const handleOpenBrowserSource = () => {
    // 現在のURLからクエリパラメータを除いた基本URLを取得
    const baseUrl = window.location.origin + window.location.pathname;
    // OBS用の子ウィンドウを開く（編集UIを非表示にするパラメータを追加）
    const obsUrl = `${baseUrl}?obs=true`;

    // ウィンドウ機能: location=no でURLバー非表示を試みる（ブラウザによっては無効）
    // menubar, toolbar, status なども非表示に設定
    const windowFeatures = [
      `width=${screenSize.width}`,
      `height=${screenSize.height}`,
      "location=no",
      "menubar=no",
      "toolbar=no",
      "status=no",
      "scrollbars=no",
      "resizable=no",
    ].join(",");

    window.open(obsUrl, "OBS Browser Source", windowFeatures);
  };

  return createPortal(
    <ControlPanelContainer $visible={editMode}>
      <ButtonGroup direction="horizontal">
        <IconicButton
          icon={<Icon name={editMode ? "accept" : "edit"} />}
          $type={editMode ? "default" : "secondary"}
          size="sm"
          onClick={onToggleEditMode}
          aria-label={editMode ? t("obs.editMode.disable") : t("obs.editMode.enable")}
          title={editMode ? t("obs.editMode.disable") : t("obs.editMode.enable")}
        />
        <IconicButton icon={<Icon name="grid" />} size="sm" onClick={onOpenTemplates} aria-label={t("obs.templates.button")} title={t("obs.templates.button")} />
        <IconicButton
          icon={<Icon name="window" />}
          size="sm"
          onClick={handleOpenBrowserSource}
          aria-label={t("obs.browserSource.open")}
          title={t("obs.browserSource.open")}
          disabled={editMode}
        />
        <IconicButton icon={<Icon name="revert" />} size="sm" onClick={onResetLayout} aria-label={t("obs.resetLayout")} title={t("obs.resetLayout")} disabled={!editMode} />
      </ButtonGroup>
      {editMode && <InfoText>{t("obs.editMode.instruction")}</InfoText>}
    </ControlPanelContainer>,
    document.body,
  );
}

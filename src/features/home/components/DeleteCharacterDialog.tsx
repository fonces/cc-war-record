import { Dialog } from "@/components/ui";
import { useTranslation } from "@/hooks";

type DeleteCharacterDialogProps = {
  /** ダイアログの表示状態 */
  isOpen: boolean;
  /** 削除対象のキャラクター情報 */
  character: { uuid: string; name: string } | null;
  /** ダイアログを閉じる */
  onClose: () => void;
  /** 削除を確定 */
  onConfirm: () => void;
};

/**
 * キャラクター削除確認ダイアログコンポーネント
 */
export const DeleteCharacterDialog = ({ isOpen, character, onClose, onConfirm }: DeleteCharacterDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={t("character.delete")}
      confirmText={t("character.confirmDelete")}
      confirmType="danger"
      cancelText={t("common.cancel")}
    >
      <p dangerouslySetInnerHTML={{ __html: t("character.deleteDescription", { name: `<strong>${character?.name}</strong>` }) }} />
    </Dialog>
  );
};

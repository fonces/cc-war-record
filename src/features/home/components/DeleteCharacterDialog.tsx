import { Dialog } from '@/components/ui'

type DeleteCharacterDialogProps = {
  /** ダイアログの表示状態 */
  isOpen: boolean
  /** 削除対象のキャラクター情報 */
  character: { uuid: string; name: string } | null
  /** ダイアログを閉じる */
  onClose: () => void
  /** 削除を確定 */
  onConfirm: () => void
}

/**
 * キャラクター削除確認ダイアログコンポーネント
 */
export const DeleteCharacterDialog = ({
  isOpen,
  character,
  onClose,
  onConfirm,
}: DeleteCharacterDialogProps) => {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="キャラクターを削除"
      confirmText="削除する"
      confirmType="danger"
      cancelText="キャンセル"
    >
      <p>
        キャラクター「<strong>{character?.name}</strong>」を削除しますか？
      </p>
      <p style={{ color: '#dc2626', marginTop: '12px', fontSize: '0.875rem' }}>
        ⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。
      </p>
    </Dialog>
  )
}

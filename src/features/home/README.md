# Home Feature

現シーズンの戦績を管理・表示する機能モジュール。

## 構成

```
home/
├── components/
│   ├── HomePage.tsx                    # ホーム画面メインコンポーネント
│   ├── CharacterCard.tsx               # キャラクターカード（アコーディオン）
│   ├── CharacterForm.tsx               # キャラクター作成フォーム
│   ├── DeleteCharacterDialog.tsx       # キャラクター削除確認ダイアログ
│   ├── JobRegistrationDialog.tsx       # 戦績記録ダイアログ
│   └── MatchRecordTable/               # 戦績記録テーブル
│       └── index.tsx
├── utils/
│   └── calculate.ts                    # 統計計算ユーティリティ
├── index.ts                            # 公開API
└── README.md                           # このファイル
```

## 主な機能

### HomePage

- シーズン未作成時の空状態表示（EmptyStateコンポーネント）
- キャラクター一覧の表示（CharacterCard）
- 新規キャラクター作成フォーム
- 戦績記録ダイアログ（JobRegistrationDialog）
- i18next多言語化対応

### CharacterCard

- キャラクター情報の表示（名前、統計）
- アコーディオン形式の展開/折りたたみ
- 戦績記録ボタン
- キャラクター削除ボタン
- MatchRecordTableの表示

### JobRegistrationDialog

- ジョブ選択（JobIcon表示）
- マップ選択（自動ローテーション検出機能）
- 勝敗選択（Win/Defeat）
- メモ入力（任意）
- バリデーション機能

## 公開API

```typescript
export { HomePage } from "./components/HomePage";
```

## 使用例

```typescript
import { HomePage } from "@/features/home";

// ルートファイルで使用
export const Route = createFileRoute("/")({
  component: HomePage,
});
```

## 依存関係

- `@/stores`: characterStore（戦績管理）
- `@/components/layout`: EmptyState（空状態表示）
- `@/components/ui`: Button, Input, Dialog, Select等
- `@/hooks`: useMapRotation, usePageTitle, useTranslation

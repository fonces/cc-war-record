# Histories Feature

シーズンの履歴一覧と詳細を表示する機能モジュール。過去シーズンのアーカイブデータを閲覧できます。

## 構成

- `components/HistoriesPage.tsx` - シーズン履歴一覧画面のコンポーネント
- `components/HistoryDetailPage.tsx` - シーズン履歴詳細画面のコンポーネント（仮想スクロール対応）
- `components/HistoryTable/` - 履歴テーブルコンポーネント
- `components/NewSeasonPage.tsx` - 新規シーズン作成画面のコンポーネント
- `index.ts` - 公開API

## 主な機能

### HistoriesPage

- シーズン履歴の一覧表示（カード形式）
- 最新シーズンの詳細へのナビゲーション
- 過去シーズンの詳細へのナビゲーション
- シーズンの削除機能（アーカイブデータも削除）
- 新規シーズン作成ボタン
- i18next多言語化対応

### HistoryDetailPage

- シーズン名と作成日、戦績数の表示
- アーカイブされた全戦績の表示
- **TanStack Virtual v4.x**による仮想スクロール（大量データ対応）
- キャラクター名、使用ジョブ、作成日時、勝敗の表示
- JobIcon、RoleIconコンポーネント使用
- HistoryTableコンポーネントで実装

### NewSeasonPage

- 新規シーズンの作成フォーム
- シーズン名入力（必須バリデーション）
- 既存シーズンがある場合の警告ダイアログ
- 前シーズンデータの自動アーカイブ（historyStoreが実行）
- 作成後、ホーム画面（`/`）へ自動遷移

## 公開API

```typescript
export { HistoriesPage } from "./components/HistoriesPage";
export { HistoryDetailPage } from "./components/HistoryDetailPage";
export { NewSeasonPage } from "./components/NewSeasonPage";
```

## 使用例

```typescript
import { HistoriesPage, HistoryDetailPage, NewSeasonPage } from "@/features/histories";

// 一覧画面ルート
export const Route = createFileRoute("/histories/")({
  component: HistoriesPage,
});

// 詳細画面ルート
export const Route = createFileRoute("/histories/$id")({
  component: HistoryDetailPage,
});

// 新規シーズン作成ルート
export const Route = createFileRoute("/new")({
  component: NewSeasonPage,
});
```

## 依存関係

- `@/stores`: historyStore（履歴管理）、characterStore（統計データ）
- `@/components/ui`: Button, Input, Dialog, JobIcon, RoleIcon等
- `@/hooks`: usePageTitle, useTranslation
- `@tanstack/react-virtual`: 仮想スクロール実装

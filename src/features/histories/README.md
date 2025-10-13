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

- シーズン履歴の一覧表示
- 最新シーズンの詳細へのナビゲーション
- 過去シーズンの詳細へのナビゲーション
- シーズンの削除機能

### HistoryDetailPage

- シーズン名と作成日、戦績数の表示
- アーカイブされた全戦績の表示
- TanStack Virtualによる仮想スクロール（大量データ対応）
- キャラクター名、使用ジョブ、作成日時、勝敗の表示

### NewSeasonPage

- 新規シーズンの作成
- 既存シーズンがある場合の警告ダイアログ
- 前シーズンデータの自動アーカイブ

## 公開API

```typescript
export { HistoriesPage } from "./components/HistoriesPage";
export { HistoryDetailPage } from "./components/HistoryDetailPage";
export { NewSeasonPage } from "./components/NewSeasonPage";
```

## 使用例

```typescript
import { HistoriesPage, HistoryDetailPage } from "@/features/histories";

// 一覧画面ルート
export const Route = createFileRoute("/histories/")({
  component: HistoriesPage,
});

// 詳細画面ルート
export const Route = createFileRoute("/histories/$id")({
  component: HistoryDetailPage,
});
```

# Histories Feature

シーズンの履歴一覧と詳細を表示する機能モジュール。

## 構成

- `components/HistoriesPage.tsx` - シーズン履歴一覧画面のコンポーネント
- `components/HistoryDetailPage.tsx` - シーズン履歴詳細画面のコンポーネント
- `index.ts` - 公開API

## 公開API

```typescript
export { HistoriesPage } from "./components/HistoriesPage";
export { HistoryDetailPage } from "./components/HistoryDetailPage";
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

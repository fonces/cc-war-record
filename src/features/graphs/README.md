# Graphs Feature

現シーズンの戦績をグラフ表示する機能モジュール。

## 構成

- `components/GraphsPage.tsx` - グラフ画面のメインコンポーネント
- `index.ts` - 公開API

## 公開API

```typescript
export { GraphsPage } from "./components/GraphsPage";
```

## 使用例

```typescript
import { GraphsPage } from "@/features/graphs";

// ルートファイルで使用
export const Route = createFileRoute("/graphs")({
  component: GraphsPage,
});
```

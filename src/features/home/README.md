# Home Feature

現シーズンの戦績を表示する機能モジュール。

## 構成

- `components/HomePage.tsx` - ホーム画面のメインコンポーネント
- `index.ts` - 公開API

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

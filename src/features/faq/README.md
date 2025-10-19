# FAQ Feature

アプリケーションのよくある質問ページの機能を提供する機能モジュール。

## 構成

```
faq/
├── components/
│   └── FaqPage.tsx           # FAQページメインコンポーネント
├── index.ts                  # 公開API
└── README.md                 # このファイル
```

## 主な機能

### FaqPage

- プライバシーポリシー関連のFAQ表示
- データ安全性に関する説明
- Google Analyticsの利用について説明
- 多言語化対応（i18next使用）
- アコーディオン形式の質問展開

## 公開API

```typescript
export { FaqPage } from "./components/FaqPage";
```

## 使用例

```typescript
import { FaqPage } from "@/features/faq";

// ルートファイルで使用
export const Route = createFileRoute("/faq")({
  component: FaqPage,
});
```

## 依存関係

- `@/hooks`: usePageTitle, useTranslation
- `@/components/ui`: Button, Checkbox等（将来的に使用予定）

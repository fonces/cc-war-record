# CC War Record

クリスタルコンフリクト用戦績管理ツール

## 概要

FINAL FANTASY XIVのPvPコンテンツ「クリスタルコンフリクト」の戦績を記録・管理するWebアプリケーションです。
シーズンごとの勝敗記録を管理し、ジョブ別・全体の統計を可視化できます。

## 技術スタック

### コアライブラリ
- **React** v18.x - UIライブラリ
- **TypeScript** v5.x - 型安全性
- **Vite** v5.x - ビルドツール

### 状態管理・データフェッチング
- **TanStack Query** v5.x - サーバー状態管理
- **Zustand** v4.x - クライアント状態管理

### ルーティング
- **TanStack Router** v1.x - 型安全なルーティング

### スタイリング
- **styled-components** v6.x - CSS-in-JS

## プロジェクト構造

```
src/
├── app/              # アプリケーション設定
│   ├── App.tsx
│   └── provider.tsx
├── components/       # 共有コンポーネント
│   ├── ui/          # 基本UIコンポーネント
│   ├── form/        # フォームコンポーネント
│   └── layout/      # レイアウトコンポーネント
├── features/        # 機能別モジュール
│   └── auth/        # 認証機能（サンプル）
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── stores/
│       ├── types.ts
│       └── index.ts
├── hooks/           # 共有カスタムフック
├── lib/             # 外部ライブラリ設定
│   └── react-query.ts
├── stores/          # グローバルストア
├── styles/          # スタイル設定
│   ├── theme.ts
│   ├── GlobalStyle.tsx
│   └── styled.d.ts
├── types/           # 型定義
├── utils/           # ユーティリティ関数
└── test/            # テスト設定
    └── server/
```

このプロジェクトは **Bulletproof React** のアーキテクチャパターンに準拠しています。

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 環境変数の設定

`.env.example` をコピーして `.env` を作成：

```bash
cp .env.example .env
```

必要に応じて環境変数を編集してください。

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173/` を開きます。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## 開発ガイド

### コンポーネント作成

新しいコンポーネントは `src/components/ui/` に配置します：

```tsx
// src/components/ui/YourComponent.tsx
import styled from 'styled-components';

const Container = styled.div`
  // スタイル
`;

export const YourComponent = () => {
  return <Container>Content</Container>;
};
```

### Feature作成

新しい機能は `src/features/` 配下にディレクトリを作成します：

```
src/features/your-feature/
├── api/           # API呼び出し
├── components/    # Feature固有のコンポーネント
├── hooks/         # Feature固有のフック
├── stores/        # Feature固有の状態管理
├── types.ts       # 型定義
└── index.ts       # エクスポート
```

### パスエイリアス

`@/` でsrcディレクトリを参照できます：

```tsx
import { Button } from '@/components/ui';
import { useAuth } from '@/features/auth';
```

## GitHub Copilot設定

このプロジェクトにはGitHub Copilotの設定が含まれています：

- `.github/instructions/codeGeneration.instructions.md` - コード生成ガイドライン
- `.github/instructions/commitMessage.instructions.md` - コミットメッセージルール
- `.vscode/copilot.json` - Copilot設定

## ライセンス

MIT

## 主な機能

### 戦績記録
- **勝ち/負けボタン**による手動入力
- タイムスタンプ付きで記録を自動保存
- シーズンごとに記録を分類管理

### 統計・分析
- **ジョブ別統計**
  - 各ジョブごとの勝率、試合数を集計
  - ジョブ別の戦績推移を確認
- **全体統計**
  - シーズン全体の勝率、総試合数
  - 日別・時間別の戦績推移

### データ可視化
- **チャート表示**
  - 日毎の勝率推移グラフ
  - 時間帯別の戦績分析
  - ジョブ別パフォーマンス比較

## データ保存

- **localStorage**を使用してブラウザにデータを保存
- サーバー不要、完全にローカルで動作
- ⚠️ **重要**: ブラウザのlocalStorageをクリアするとデータが消失します

## 使用方法

1. シーズンを選択または新規作成
2. 使用ジョブを選択
3. 試合後に「勝ち」または「負け」ボタンをクリックして記録
4. チャートタブで戦績の推移を確認

## 技術スタック

- フロントエンド: (未定)
- データ保存: localStorage
- グラフ描画: (未定)

## 注意事項

- ブラウザのlocalStorageに依存しているため、以下の操作でデータが消失します
  - ブラウザのキャッシュ/Cookie削除
  - プライベートブラウジングモードの使用
  - localStorageのクリア
- データのバックアップ機能は今後実装予定

## ライセンス

このプロジェクトのライセンスについては、[LICENSE](LICENSE)ファイルを参照してください。

# app ディレクトリ

アプリケーションの設定とルーティング定義を管理するディレクトリです。

## ファイル構成

```
app/
├── App.tsx         # ルートコンポーネント（ルーター設定 + Devtools）
├── provider.tsx    # アプリケーションプロバイダー（Theme + Router）
└── README.md       # このファイル
```

## App.tsx

TanStack Router v1.132+を使用したルーティング設定を行います。

```tsx
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routeTree } from "@/routeTree.gen";

// ルーターインスタンスを作成
const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_BASEPATH || "/",
});

export const App = () => (
  <>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </>
);
```

### 環境変数対応

- `VITE_BASEPATH`: ルーターのベースパスを環境変数で設定
- GitHub Pagesなどのサブパス配置に対応

### TanStack Router Devtools

- 開発環境でルーターの状態をデバッグ可能
- ナビゲーション履歴、ルート情報、パラメータを可視化

## ルーティング構成

このアプリケーションでは、以下のルーティング構成を予定しています。

### 画面一覧

#### ホーム画面 (`/`)

- **機能**: キャラクター管理と戦績記録
- **ページタイトル**: "クリコン戦績記録 - ホーム"
- **主な表示内容**:
  - キャラクター一覧（アコーディオン形式）
  - 各キャラクターの統計情報
  - 戦績記録ボタン（JobRegistrationDialogを表示）
  - ジョブ別戦績サマリーテーブル

#### グラフ画面 (`/graphs`)

- **機能**: 戦績データを可視化
- **ページタイトル**: "クリコン戦績記録 - 戦績グラフ"
- **主な表示内容**:
  - 日別勝敗数チャート（ComposedChart）
  - 時間別勝率チャート（BarChart）
  - 曜日別勝率比較（AreaChart）
  - ジョブ使用率円グラフ（PieChart）
  - ジョブ別勝率レーダーチャート（RadarChart）

#### シーズン履歴一覧 (`/histories`)

- **機能**: シーズンの履歴一覧を表示/管理
- **ページタイトル**: "クリコン戦績記録 - シーズン履歴"
- **主な表示内容**:
  - 過去シーズン一覧（カード形式）
  - 各シーズンの基本統計（勝率、試合数）
  - シーズン作成/削除機能
  - シーズン詳細へのリンク

#### シーズン履歴詳細 (`/histories/:id`)

- **機能**: 特定シーズンの詳細戦績を表示
- **ページタイトル**: "クリコン戦績記録 - {シーズン名}"（動的）
- **主な表示内容**:
  - シーズン名・期間
  - キャラクター別統計
  - 試合履歴一覧（仮想スクロール対応）
  - アーカイブされた戦績データ

#### 新規シーズン作成画面 (`/new`)

- **機能**: 新しいシーズンを作成
- **ページタイトル**: "クリコン戦績記録 - 新シーズン作成"
- **主な表示内容**:
  - シーズン名入力フォーム
  - 保存ボタン（自動アーカイブ後、ホーム画面に遷移）
  - キャンセルボタン（履歴一覧に戻る）
- **バリデーション**:
  - シーズン名の必須入力チェック
  - 重複シーズン名のチェック

## ページタイトル管理

各ページでは`usePageTitle`フックを使用して動的にタイトルを設定：

```tsx
import { usePageTitle } from "@/hooks";

export const HomePage = () => {
  usePageTitle("ホーム");
  // タイトルは "クリコン戦績記録 - ホーム" になる
};
```

## プロバイダー構成

`src/app/provider.tsx` では以下のプロバイダーを統合します：

- **ThemeProvider** (styled-components v6.1.19): テーマ設定
- **App** (TanStack Router v1.132+): ルーティング + Devtools

## 使用方法

### 新しいルートの追加

TanStack Routerのファイルベースルーティングを使用してルートを追加する場合：

1. `src/routes/` 配下にルートファイルを作成（例: `new-feature.tsx`）
2. `src/features/` 配下に機能ディレクトリを作成
3. 機能固有のコンポーネントを作成（index.tsで公開）
4. ルートファイルでfeatureの公開APIをimport

```tsx
// 例: src/features/home/components/HomePage.tsx
export const HomePage = () => {
  return (
    <div>
      <h1>現シーズンの戦績</h1>
      {/* コンテンツ */}
    </div>
  );
};
```

### プロバイダーの拡張

新しいプロバイダーを追加する場合は `src/app/provider.tsx` を編集します：

```tsx
export const AppProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
```

## 関連ドキュメント

- [TanStack Router ドキュメント](https://tanstack.com/router)
- [TanStack Query ドキュメント](https://tanstack.com/query)
- [styled-components ドキュメント](https://styled-components.com/)

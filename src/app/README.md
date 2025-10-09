# app ディレクトリ

アプリケーションの設定とルーティング定義を管理するディレクトリです。

## ファイル構成

```
app/
├── App.tsx         # ルートコンポーネント
├── provider.tsx    # アプリケーションプロバイダー
├── routes.tsx      # ルーティング設定（予定）
└── README.md       # このファイル
```

## ルーティング構成（予定）

このアプリケーションでは、以下のルーティング構成を予定しています。

### 画面一覧

#### ホーム画面 (`/`)

- **機能**: 現シーズンの戦績を表示
- **主な表示内容**:
  - 現在のシーズン名
  - 勝敗記録ボタン（勝ち/負け）
  - ジョブ選択
  - 現シーズンの統計サマリー（勝率、総試合数等）
  - 最近の試合履歴

#### グラフ画面 (`/graphs`)

- **機能**: 現シーズンの戦績をチャート表示
- **主な表示内容**:
  - 日別勝率推移グラフ
  - 時間帯別戦績分析
  - ジョブ別パフォーマンス比較
  - 累積勝利数/敗北数推移

#### シーズン履歴一覧 (`/histories`)

- **機能**: シーズンの履歴一覧を表示/管理
- **主な表示内容**:
  - 過去シーズン一覧（カード形式）
  - 各シーズンの基本統計（勝率、試合数）
  - シーズン作成/削除機能
  - シーズン詳細へのリンク

#### シーズン履歴詳細 (`/histories/:id`)

- **機能**: 特定シーズンの詳細戦績を表示
- **主な表示内容**:
  - シーズン名・期間
  - 詳細統計（ジョブ別勝率等）
  - 試合履歴一覧（日時、ジョブ、結果）
  - そのシーズンのグラフ表示

#### 新規シーズン作成画面 (`/new`)

- **機能**: 新しいシーズンを作成
- **主な表示内容**:
  - シーズン名入力フォーム
  - 保存ボタン（履歴に保存してホーム画面に遷移）
  - キャンセルボタン（履歴一覧に戻る）
- **バリデーション**:
  - シーズン名の必須入力チェック
  - 重複シーズン名のチェック

## プロバイダー構成

`src/app/provider.tsx` では以下のプロバイダーを統合します：

- **ThemeProvider** (styled-components): テーマ設定
- **QueryClientProvider** (TanStack Query): サーバー状態管理
- **Router** (TanStack Router): ルーティング（予定）

## 使用方法

### 新しいルートの追加

TanStack Routerを使用してルートを追加する場合：

1. `src/features` 配下に機能ディレクトリを作成
2. 機能固有のコンポーネントを作成
3. `routes.tsx` にルート定義を追加（予定）

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
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
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

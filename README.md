# CC War Record

クリスタルコンフリクト用戦績管理ツール

## 概要

FINAL FANTASY XIVのPvPコンテンツ「クリスタルコンフリクト」の戦績を記録・管理するWebアプリケーションです。
シーズンごとの勝敗記録を管理し、ジョブ別・全体の統計を可視化できます。

## デモ

[https://fonces.github.io/cc-war-record/](https://fonces.github.io/cc-war-record/)

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

### UI/UX

- **TanStack Virtual** v4.x - 仮想スクロール（大量データの効率的な表示）

### スタイリング

- **styled-components** v6.x - CSS-in-JS

### データ可視化

- **Recharts** v2.x - グラフ・チャート描画ライブラリ
  - BarChart - 棒グラフ（日別・時間別勝敗数）
  - ComposedChart - 複合チャート（勝敗数+勝率ライン）
  - AreaChart - エリアチャート（曜日別勝率）
  - RadarChart - レーダーチャート（ジョブ別勝率比較）
  - PieChart - 円グラフ（ジョブ使用率）

### アイコン・画像

- **ローカル画像アセット** - FF14ジョブ・ロールアイコン
  - `/public/img/00_ROLE/` - ロールアイコン（Tank, Healer, DPS系）
  - `/public/img/01_TANK/Job/` - タンクジョブアイコン
  - `/public/img/02_HEALER/Job/` - ヒーラージョブアイコン
  - `/public/img/03_DPS/Job/` - DPSジョブアイコン

## 環境変数

プロジェクトでは以下の環境変数を使用します：

```bash
# ベースパス（GitHub Pagesなどでのサブパス配置用）
VITE_BASEPATH=/cc-war-record
```

`.env.example` をコピーして `.env` を作成してください：

```bash
cp .env.example .env
```

## データ管理アーキテクチャ

### Zustandストア構成

#### characterStore.ts - キャラクター・戦績管理

```typescript
type CharacterState = {
  characters: Character[]      // キャラクター一覧
  matchRecords: MatchRecord[]  // 戦績記録一覧
  isLoading: boolean          // ローディング状態
  error: string | null        // エラーメッセージ
}

// 主要なアクション
- loadData()                                    // localStorageからデータ読み込み
- createCharacter(input: CreateCharacterInput)  // 新規キャラクター作成
- updateCharacter(uuid: string, name: string)   // キャラクター名更新
- deleteCharacter(uuid: string)                 // キャラクター削除
- createMatchRecord(input: CreateMatchRecordInput) // 戦績記録作成
- deleteMatchRecord(uuid: string)               // 戦績記録削除
- clearMatchRecords()                           // 全戦績記録クリア
- getCharacterStatsForSeason(seasonUuid: string) // シーズン別統計取得
- getMatchRecordsForCharacter(characterUuid: string) // キャラクター別戦績取得
```

#### historyStore.ts - シーズン履歴管理

```typescript
type HistoryState = {
  histories: History[]      // シーズン履歴一覧
  isLoading: boolean       // ローディング状態
  error: string | null     // エラーメッセージ
}

// 主要なアクション
- loadHistories()                                        // 履歴一覧読み込み
- createHistory(input: CreateHistoryInput)               // 新規シーズン作成（既存データを自動アーカイブ）
- updateHistory(uuid: string, input: UpdateHistoryInput) // シーズン情報更新
- deleteHistory(uuid: string)                            // シーズン削除（アーカイブデータも削除）
- getHistoryByUuid(uuid: string)                         // UUID指定で履歴取得
- getSortedHistories()                                   // 日付順ソート済み履歴取得
- addCharacterStats(historyUuid: string, character: Character) // キャラクター統計追加
- addUsedJob(input: AddUsedJobInput)                     // 使用ジョブ追加
- getMatchRecordsForSeason(seasonUuid: string)           // シーズンのアーカイブ戦績取得
```

### データ型定義

#### Character - キャラクター情報

```typescript
type Character = {
  uuid: string; // 一意識別子
  name: string; // キャラクター名
  createdAt: string; // 作成日時（ISO文字列）
  updatedAt: string; // 更新日時（ISO文字列）
};
```

#### MatchRecord - 戦績記録

```typescript
type MatchRecord = {
  uuid: string; // 一意識別子
  characterUuid: string; // キャラクターUUID
  seasonUuid: string; // シーズンUUID
  job: Job; // 使用ジョブ
  map: CrystalConflictMap; // マップ
  isWin: boolean; // 勝敗（true: 勝利, false: 敗北）
  memo?: string; // メモ（任意）
  recordedAt: string; // 記録日時（ISO文字列）
  createdAt: string; // 作成日時（ISO文字列）
  updatedAt: string; // 更新日時（ISO文字列）
};
```

#### CharacterStats - キャラクター戦績統計

```typescript
type CharacterStats = {
  character: Character; // キャラクター情報
  totalMatches: number; // 総試合数
  wins: number; // 勝利数
  losses: number; // 敗北数
  winRate: number; // 勝率（0-100の数値）
  recentMatches: MatchRecord[]; // 最近の戦績記録
};
```

#### History - シーズン履歴

```typescript
type History = {
  uuid: string; // 一意識別子
  seasonName: string; // シーズン名
  characterStats: CharacterStats[]; // キャラクター戦績統計の配列
  createdAt: string; // 作成日時（ISO文字列）
  updatedAt: string; // 更新日時（ISO文字列）
};
```

### データ永続化

- **localStorage**を使用してブラウザにデータを永続化
- キー構成:
  - `cc-war-record-characters`: キャラクター一覧
  - `cc-war-record-match-records`: 現在のシーズンの戦績記録一覧
  - `cc-war-record-histories`: シーズン履歴一覧
  - `histories-{seasonUuid}`: 過去シーズンのアーカイブ戦績データ
  - `cc-war-record:radar-chart-job1`: レーダーチャートジョブ1選択
  - `cc-war-record:radar-chart-job2`: レーダーチャートジョブ2選択
- JSON形式でシリアライズして保存
- アプリケーション起動時に各ストアが自動的にデータを読み込み
- シーズン作成時に前シーズンのデータを自動的にアーカイブ

## プロジェクト構造

```
src/
├── app/              # アプリケーション設定
│   ├── App.tsx
│   └── provider.tsx
├── components/       # 共有コンポーネント
│   ├── ui/          # 基本UIコンポーネント
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── MultiSelect.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Icon/
│   │   ├── JobIcon/      # ジョブアイコンコンポーネント
│   │   ├── RoleIcon/     # ロールアイコンコンポーネント
│   │   ├── Dialog/
│   │   └── JobRegistrationDialog/
│   ├── form/        # フォームコンポーネント
│   └── layout/      # レイアウトコンポーネント
├── features/        # 機能別モジュール
│   ├── home/        # ホーム画面（キャラクター管理）
│   ├── graphs/      # グラフ・統計表示
│   └── histories/   # 履歴詳細表示
├── hooks/           # 共有カスタムフック
│   ├── usePageTitle.ts    # ページタイトル設定
│   ├── useScrollLock.ts   # スクロールロック
│   └── index.ts
├── lib/             # 外部ライブラリ設定
├── stores/          # グローバルストア（Zustand）
│   ├── characterStore.ts  # キャラクター・戦績管理
│   └── historyStore.ts    # シーズン履歴管理
├── styles/          # スタイル設定
│   ├── theme.ts
│   ├── GlobalStyle.tsx
│   └── styled.d.ts
├── types/           # 型定義
│   ├── jobs.ts      # ジョブ・ロール定義
│   ├── maps.ts      # マップ定義
│   ├── history.ts   # 履歴型定義
│   └── index.ts
├── utils/           # ユーティリティ関数
│   ├── localStorage.ts
│   └── uuid.ts
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

デフォルトの設定内容：

```bash
# ベースパス（GitHub Pagesなどでのサブパス配置用）
VITE_BASEPATH=/cc-war-record
```

ローカル開発時は以下のように変更することも可能：

```bash
VITE_BASEPATH=/
```

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

## デプロイ

### GitHub Pagesへの自動デプロイ

mainブランチへのプッシュで自動的にGitHub Pagesにデプロイされます。

#### 初回設定

1. GitHubリポジトリの Settings > Pages に移動
2. Source を **GitHub Actions** に設定
3. mainブランチにプッシュすると自動デプロイが開始されます

デプロイURL: `https://fonces.github.io/cc-war-record/`

#### 手動デプロイ（非推奨）

```bash
npm run deploy
```

※ GitHub Actionsによる自動デプロイを推奨します

## 開発ガイド

### コンポーネント作成

新しいコンポーネントは `src/components/ui/` に配置します：

```tsx
// src/components/ui/YourComponent.tsx
import styled from "styled-components";

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
import { Button } from "@/components/ui";
import { useAuth } from "@/features/auth";
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
  - 日別・時間別・曜日別の戦績推移

### データ可視化（Rechartsライブラリ使用）

- **日別勝敗数チャート**（ComposedChart）
  - 2ヶ月間の日毎勝敗推移を表示（Bar）
  - 勝率ラインを重ね合わせ（Line）
  - キャラクター・ジョブ・マップでフィルタリング可能
- **時間別勝率チャート**（BarChart）
  - 0-23時の時間帯別勝率分析
  - プレイ時間による勝率傾向を可視化
- **曜日別勝率比較**（AreaChart）
  - Sun-Satの曜日別勝率をエリアチャートで表示
  - connectNulls機能でデータ欠損日を補間
- **ジョブ別勝率レーダーチャート**（RadarChart）
  - マップ別の最大5ジョブ勝率比較
  - ジョブ選択状態をlocalStorageに永続化
- **ジョブ使用率円グラフ**（PieChart）
  - 各ジョブの使用頻度を可視化
  - キャラクター・マップでフィルタリング可能

## 主要機能

### キャラクター管理

- キャラクター作成・編集・削除
- キャラクター別戦績統計表示
- アコーディオン形式でのキャラクター一覧表示

### シーズン管理

- シーズン（履歴）の作成・管理
- 新シーズン作成時の自動データアーカイブ
- 過去シーズンの戦績閲覧（仮想スクロール対応）
- シーズン別キャラクター統計の管理
- 最新シーズンの自動選択

### 戦績記録

- ジョブ選択ダイアログでの戦績登録
- マップ・勝敗情報の記録
- リアルタイムでの統計更新

### ジョブ・マップ対応

- FF14の全ジョブに対応（ロール別分類）
  - Tank: Paladin, Warrior, Dark Knight, Gunbreaker
  - Healer: White Mage, Scholar, Astrologian, Sage
  - Melee DPS: Monk, Dragoon, Ninja, Samurai, Reaper, Viper
  - Physical Ranged DPS: Bard, Machinist, Dancer
  - Magical Ranged DPS: Black Mage, Summoner, Red Mage, Pictomancer
- クリスタルコンフリクト全マップに対応
- ローカル画像アセットでジョブ・ロールアイコンを表示
- 環境変数（VITE_BASEPATH）対応のパス管理

### UI/UXコンポーネント

- **JobIcon** - ジョブアイコン表示コンポーネント
- **RoleIcon** - ロールアイコン表示コンポーネント
- **MultiSelect** - 複数選択可能なセレクトボックス（最大5選択）
- **Dialog** - モーダルダイアログ
  - 背景スクロールロック機能（useScrollLock）
  - スクロールバー表示維持
- **ページタイトル** - usePageTitleフックによる動的タイトル設定

## 使用方法

### 基本的な流れ

1. **シーズン作成**: 新シーズンを作成または既存シーズンを選択
2. **キャラクター登録**: 使用キャラクターを作成・選択
3. **戦績記録**: ジョブ・マップを選択して勝敗を記録
4. **データ分析**: グラフページで各種チャートを確認

### 詳細手順

#### 1. ホーム画面での戦績記録

- キャラクター一覧から対象キャラクターを選択
- 「戦績を記録」ボタンでジョブ選択ダイアログを開く
- ジョブ・マップを選択して「勝ち」「負け」ボタンをクリック
- 戦績が自動的に記録され、統計が更新される

#### 2. グラフ画面での分析

- ナビゲーションから「戦績グラフ」を選択
- 4種類のチャートで多角的に戦績を分析:
  - **日別推移**: 長期トレンドの確認
  - **時間別分析**: 最適プレイ時間の発見
  - **曜日別比較**: 平日・休日パフォーマンスの差
  - **ジョブ・マップ相性**: 得意不得意の発見
- 各チャートでフィルタリング機能を活用

#### 3. 履歴管理

- 過去シーズンの戦績確認
- シーズン間の成長・変化の分析

## グラフ機能詳細

### 1. 日別勝敗数チャート（DailyWinLossChart）

- **表示期間**: シーズン作成日から2ヶ月間
- **チャートタイプ**: ComposedChart（Bar + Line）
- **データ**: 日毎の勝利数・敗北数（Bar）+ 勝率ライン（Line）
- **Y軸**: 左軸（試合数）、右軸（勝率0-100%）
- **フィルター**: キャラクター・ジョブ・マップ

### 2. 時間別勝率チャート（HourlyWinLossChart）

- **表示範囲**: 0時-23時（24時間）
- **チャートタイプ**: BarChart（棒グラフ）
- **データ**: 時間帯別勝率（パーセンテージ）
- **用途**: プレイ時間による勝率傾向分析
- **フィルター**: キャラクター・ジョブ・マップ

### 3. 曜日別勝率比較（WeeklyWinLossChart）

- **表示範囲**: 日曜日-土曜日（Sun-Sat）
- **チャートタイプ**: AreaChart（エリアチャート）
- **データ**: 曜日別勝率・敗率
- **特徴**: connectNulls機能でデータ欠損日を補間
- **用途**: 平日・休日による勝率差分析
- **フィルター**: キャラクター・ジョブ・マップ

### 4. ジョブ別勝率レーダーチャート（JobWinRateRadarChart）

- **表示形式**: レーダーチャート（多角形）
- **データ**: マップ別の最大5ジョブ勝率比較
- **軸**: 各クリスタルコンフリクトマップ
- **永続化**: ジョブ選択状態をlocalStorageに保存
- **用途**: ジョブ・マップ相性分析
- **フィルター**: キャラクター
- **選択方式**: MultiSelectによる複数ジョブ選択（最大5）

### 5. ジョブ使用率円グラフ（JobUsageRatePieChart）

- **表示形式**: PieChart（円グラフ）
- **データ**: 各ジョブの使用頻度（パーセンテージ）
- **ラベル**: 5%以上のジョブに使用率を表示
- **カラー**: JOB_INFOで定義されたジョブカラーを使用
- **ツールチップ**: ジョブ名・使用回数・使用率を表示
- **ソート**: 使用率降順
- **フィルター**: キャラクター・マップ

### 共通機能

- **レスポンシブ対応**: 画面サイズに自動調整
- **カスタムツールチップ**: 詳細データ表示
- **カラーテーマ**: ジョブ別・勝敗別の色分け
- **フィルタリング**: 複数条件での絞り込み分析

## 注意事項・制限事項

### データ永続化の制限

- ブラウザのlocalStorageに依存しているため、以下の操作でデータが消失します：
  - ブラウザのキャッシュ/Cookie削除
  - プライベートブラウジングモードの使用
  - localStorageのクリア
  - ブラウザの再インストール

### 推奨環境

- **ブラウザ**: Chrome, Firefox, Safari, Edge（最新版）
- **画面解像度**: 1024px以上（レスポンシブ対応済み）
- **JavaScript**: 有効である必要があります

### データ量制限

- localStorageの容量制限（通常5-10MB）
- 大量の戦績データ蓄積時は動作速度に影響する可能性

### 今後の改善予定

- データのエクスポート・インポート機能
- クラウド同期機能
- より詳細な統計分析機能
- モバイルアプリ版の検討

## ライセンス

このプロジェクトのライセンスについては、[LICENSE](LICENSE)ファイルを参照してください。

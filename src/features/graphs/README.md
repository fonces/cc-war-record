# Graphs Feature

現シーズンの戦績をグラフ表示する機能モジュール。

## 構成

```
graphs/
├── components/
│   ├── GraphsPage.tsx                # グラフ画面メインコンポーネント
│   ├── TodayWinDefeatTrendChart.tsx  # その日の勝敗推移チャート
│   ├── DailyWinDefeatChart.tsx       # 日別勝敗数チャート
│   ├── HourlyWinDefeatChart.tsx      # 時間別勝率チャート
│   ├── WeeklyWinDefeatChart.tsx      # 曜日別勝率チャート
│   ├── JobUsageRatePieChart.tsx      # ジョブ使用率円グラフ
│   └── JobWinRateRadarChart.tsx      # ジョブ別勝率レーダーチャート
├── index.ts                           # 公開API
└── README.md                          # このファイル
```

## チャートコンポーネント詳細

### TodayWinDefeatTrendChart - その日の勝敗推移チャート

- **チャートタイプ**: LineChart
- **表示期間**: 当日の全試合
- **データ**: 試合ごとの累積勝率推移
- **X軸**: 試合番号（1試合目、2試合目...）
- **Y軸**: 勝率（0-100%）
- **マーカー**: 勝利は青、敗北は赤で表示
- **フィルター**: キャラクター・ジョブ・マップ
- **特徴**: その日の勝敗の流れを時系列で可視化、50%基準線表示
- **用途**: 1日の調子や勝敗パターンの分析
- **型定義**: type Props（interface削除済み）

### DailyWinDefeatChart - 日別勝敗数チャート

- **チャートタイプ**: ComposedChart（Bar + Line）
- **表示期間**: シーズン作成日から2ヶ月間
- **データ**: 日毎の勝利数・敗北数（Bar）+ 勝率ライン（Line）
- **Y軸**: 左軸（試合数）、右軸（勝率0-100%）
- **フィルター**: キャラクター・ジョブ・マップ
- **特徴**: 勝敗数と勝率を同時に可視化
- **型定義**: type Props（interface削除済み）

### HourlyWinDefeatChart - 時間別勝率チャート

- **チャートタイプ**: BarChart
- **表示範囲**: 0時-23時（24時間）
- **データ**: 時間帯別勝率（パーセンテージ）
- **フィルター**: キャラクター・ジョブ・マップ
- **用途**: プレイ時間による勝率傾向分析

### WeeklyWinDefeatChart - 曜日別勝率比較

- **チャートタイプ**: AreaChart
- **表示範囲**: 日曜日-土曜日（Sun-Sat）
- **データ**: 曜日別勝率・敗率
- **フィルター**: キャラクター・ジョブ・マップ
- **特徴**: connectNulls機能でデータ欠損日を補間
- **用途**: 平日・休日による勝率差分析
- **型定義**: type Props（interface削除済み）

### JobUsageRatePieChart - ジョブ使用率円グラフ

- **チャートタイプ**: PieChart
- **データ**: 各ジョブの使用頻度（パーセンテージ）
- **フィルター**: キャラクター・マップ
- **ラベル**: 5%以上のジョブに使用率を表示
- **カラー**: JOB_INFOで定義されたジョブカラー
- **ツールチップ**: ジョブ名・使用回数・使用率
- **ソート**: 使用率降順
- **型定義**: type Props（interface削除済み）

### JobWinRateRadarChart - ジョブ別勝率レーダーチャート

- **チャートタイプ**: RadarChart
- **データ**: マップ別の最大5ジョブ勝率比較
- **軸**: 各クリスタルコンフリクトマップ
- **フィルター**: キャラクター
- **選択方式**: MultiSelectによる複数ジョブ選択（最大5）
- **永続化**: ジョブ選択状態をlocalStorageに保存
- **用途**: ジョブ・マップ相性分析
- **型定義**: type Props（interface削除済み）

## データ集計ユーティリティ

### aggregate.ts

- `aggregateTodayWinDefeatTrend`: その日の勝敗推移集計
- `aggregateDailyWinLoss`: 日別勝敗数集計
- `aggregateHourlyWinRate`: 時間別勝率集計
- `aggregateWeeklyWinRate`: 曜日別勝率集計
- `aggregateJobUsage`: ジョブ使用率集計
- `aggregateJobWinRateByMap`: マップ別ジョブ勝率集計
- 各関数で勝敗データのフィルタリングと集計を実行

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

## フィルタリング機能

全チャートで共通のフィルタリング機能を提供：

- **キャラクターフィルター**: 特定キャラクターのデータのみ表示
- **ジョブフィルター**: 特定ジョブのデータのみ表示
- **マップフィルター**: 特定マップのデータのみ表示

フィルター選択はSelectコンポーネント（width: 200px統一、memo化済み）で実現。

## チャートスケルトン

### ChartSkeleton

- ローディング中の表示用スケルトンコンポーネント
- 各チャートで共通使用
- styled-componentsでアニメーション実装

## コードスタイル

- **type優先**: 全チャートでinterface → type統一済み
- **React.memo化**: 将来的にパフォーマンス最適化で適用予定
- **import順序**: ESLintルールに準拠（external → internal → type）

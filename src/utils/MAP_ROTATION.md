# マップローテーション機能

## 概要

クリスタルコンフリクトのマップローテーションを管理する機能です。
1時間ごとにマップが切り替わり、7つのマップが順番に表示されます。

## マップローテーション順序

1. パライストラ (THE_PALAISTRA)
2. ヴォルカニックハート (VOLCANIC_HEART)
3. ベイサイドバトルグラウンド (BAYSIDE_BATTLEGROUND)
4. クラウドナイン (CLOUD_NINE)
5. 東方絡繰御殿 (TOUHOU_KARAKURI_GOTEN)
6. ハルモニア戦争図書館（THE_HARMONIA_WAR_LIBRARY）
7. レッド・サンズ (RED_SANDS)

## 使用方法

### 現在のマップを取得

```typescript
import { getCurrentMap } from "@/utils/maps";

const currentMap = getCurrentMap();
console.log(currentMap); // "THE_PALAISTRA" など
```

### 次の切り替え時刻を取得

```typescript
import { getNextMapChangeTime } from "@/utils/maps";

const nextChange = getNextMapChangeTime();
console.log(nextChange); // 次の切り替え時刻（Date オブジェクト）
```

### 特定の日時のマップを取得

```typescript
import { getMapAtTime } from "@/utils/maps";

const specificDate = new Date("2025-10-19T15:00:00Z");
const map = getMapAtTime(specificDate);
console.log(map); // その時刻のマップ
```

## 実装詳細

### 基準日時

- 基準日時: 2022年1月1日 03:00:00 JST（2021年12月31日 18:00:00 UTC）
- この日時から最初のマップ（パライストラ）が開始されると仮定

### ローテーション周期

- 1マップあたりの表示時間: 1時間（60分）
- 全7マップの1周期: 7時間（420分）

### 計算ロジック

```typescript
// 基準日時からの経過時間（ミリ秒）
const elapsedMs = currentDate.getTime() - BASE_DATE.getTime();

// 現在のローテーション位置（0-6）
const rotationIndex = Math.floor(elapsedMs / MAP_DURATION_MS) % MAP_ROTATION.length;

// マップを返す
return MAP_ROTATION[rotationIndex];
```

## テストケース例

```typescript
// 2022年1月1日 03:00:00 JST → パライストラ
getCurrentMap(new Date("2022-01-01T03:00:00+09:00")); // THE_PALAISTRA

// 2022年1月1日 04:00:00 JST → ヴォルカニックハート
getCurrentMap(new Date("2022-01-01T04:00:00+09:00")); // VOLCANIC_HEART

// 2022年1月1日 05:00:00 JST → ベイサイドバトルグラウンド
getCurrentMap(new Date("2022-01-01T05:00:00+09:00")); // BAYSIDE_BATTLEGROUND

// 2022年1月1日 06:00:00 JST → クラウドナイン
getCurrentMap(new Date("2022-01-01T06:00:00+09:00")); // CLOUD_NINE

// 2022年1月1日 07:00:00 JST → 東方絡繰御殿
getCurrentMap(new Date("2022-01-01T07:00:00+09:00")); // TOUHOU_KARAKURI_GOTEN

// 2022年1月1日 08:00:00 JST → ハルモニア戦争図書館
getCurrentMap(new Date("2022-01-01T08:00:00+09:00")); // THE_HARMONIA_WAR_LIBRARY

// 2022年1月1日 09:00:00 JST → レッド・サンズ
getCurrentMap(new Date("2022-01-01T09:00:00+09:00")); // RED_SANDS

// 2022年1月1日 10:00:00 JST → パライストラ（2周目）
getCurrentMap(new Date("2022-01-01T10:00:00+09:00")); // THE_PALAISTRA
```

## 注意事項

- タイムゾーンは UTC を基準としています
- 実際のゲーム内のローテーションと異なる場合は、`BASE_DATE` を調整してください
- ローテーション順序を変更する場合は、`MAP_ROTATION` 配列を編集してください

# マップローテーション機能

## 概要

クリスタルコンフリクトのマップローテーションを管理する機能です。
1時間30分ごとにマップが切り替わり、6つのマップが順番に表示されます。

## マップローテーション順序

1. パライストラ (THE_PALAISTRA)
2. ヴォルカニックハート (VOLCANIC_HEART)
3. 東方絡繰御殿 (TOUHOU_KARAKURI_GOTEN)
4. ベイサイドバトルグラウンド (BAYSIDE_BATTLEGROUND)
5. クラウドナイン (CLOUD_NINE)
6. レッド・サンズ (RED_SANDS)

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

- 基準日時: 2025年1月1日 00:00:00 UTC
- この日時から最初のマップ（パライストラ）が開始されると仮定

### ローテーション周期

- 1マップあたりの表示時間: 1時間30分（90分）
- 全6マップの1周期: 9時間（540分）

### 計算ロジック

```typescript
// 基準日時からの経過時間（ミリ秒）
const elapsedMs = currentDate.getTime() - BASE_DATE.getTime();

// 現在のローテーション位置（0-5）
const rotationIndex = Math.floor(elapsedMs / MAP_DURATION_MS) % MAP_ROTATION.length;

// マップを返す
return MAP_ROTATION[rotationIndex];
```

## テストケース例

```typescript
// 2025年1月1日 00:00:00 UTC → パライストラ
getCurrentMap(new Date("2025-01-01T00:00:00Z")); // THE_PALAISTRA

// 2025年1月1日 01:30:00 UTC → ヴォルカニックハート
getCurrentMap(new Date("2025-01-01T01:30:00Z")); // VOLCANIC_HEART

// 2025年1月1日 03:00:00 UTC → 東方絡繰御殿
getCurrentMap(new Date("2025-01-01T03:00:00Z")); // TOUHOU_KARAKURI_GOTEN

// 2025年1月1日 04:30:00 UTC → ベイサイドバトルグラウンド
getCurrentMap(new Date("2025-01-01T04:30:00Z")); // BAYSIDE_BATTLEGROUND

// 2025年1月1日 06:00:00 UTC → クラウドナイン
getCurrentMap(new Date("2025-01-01T06:00:00Z")); // CLOUD_NINE

// 2025年1月1日 07:30:00 UTC → レッド・サンズ
getCurrentMap(new Date("2025-01-01T07:30:00Z")); // RED_SANDS

// 2025年1月1日 09:00:00 UTC → パライストラ（2周目）
getCurrentMap(new Date("2025-01-01T09:00:00Z")); // THE_PALAISTRA
```

## 注意事項

- タイムゾーンは UTC を基準としています
- 実際のゲーム内のローテーションと異なる場合は、`BASE_DATE` を調整してください
- ローテーション順序を変更する場合は、`MAP_ROTATION` 配列を編集してください

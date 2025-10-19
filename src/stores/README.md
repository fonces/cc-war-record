# Stores

このディレクトリには、アプリケーション全体で共有されるグローバル状態管理のストアが含まれています。

## 技術スタック

- **Zustand v4.x**: 軽量でシンプルなReact状態管理ライブラリ
- **LocalStorage**: データの永続化

## ストア一覧

### `historyStore.ts`

シーズン履歴の管理を担当するストアです。

#### 主な機能

- シーズン履歴の作成・更新・削除
- キャラクター統計の管理
- LocalStorageへの自動保存
- エラーハンドリング

#### 状態

```typescript
type HistoryState = {
  histories: History[]; // シーズン履歴一覧
  isLoading: boolean; // ローディング状態
  error: string | null; // エラーメッセージ
};
```

#### アクション

| アクション                                  | 説明                                       | パラメータ                                    | 戻り値                   |
| ------------------------------------------- | ------------------------------------------ | --------------------------------------------- | ------------------------ |
| `loadHistories()`                           | LocalStorageから履歴を読み込み             | なし                                          | `void`                   |
| `createHistory(input)`                      | 新しいシーズン履歴を作成（自動アーカイブ） | `CreateHistoryInput`                          | `History`                |
| `updateHistory(uuid, input)`                | 履歴を更新                                 | `uuid: string`, `UpdateHistoryInput`          | `boolean`                |
| `deleteHistory(uuid)`                       | 履歴を削除（アーカイブデータも削除）       | `uuid: string`                                | `boolean`                |
| `getHistoryByUuid(uuid)`                    | UUIDで履歴を取得                           | `uuid: string`                                | `History \| undefined`   |
| `getSortedHistories()`                      | 履歴を新しい順でソート                     | なし                                          | `History[]`              |
| `addCharacterStats(historyUuid, character)` | キャラクター統計を追加                     | `historyUuid: string`, `character: Character` | `CharacterStats \| null` |
| `addUsedJob(input)`                         | 使用ジョブを追加                           | `AddUsedJobInput`                             | `boolean`                |
| `getMatchRecordsForSeason(seasonUuid)`      | シーズンのアーカイブ戦績を取得             | `seasonUuid: string`                          | `MatchRecord[]`          |
| `clearError()`                              | エラーをクリア                             | なし                                          | `void`                   |

#### 使用例

```tsx
import { useHistoryStore } from "@/stores";

const MyComponent = () => {
  const histories = useHistoryStore((state) => state.histories);
  const createHistory = useHistoryStore((state) => state.createHistory);
  const error = useHistoryStore((state) => state.error);

  const handleCreate = () => {
    try {
      const newHistory = createHistory({ seasonName: "Season 1" });
      console.log("Created:", newHistory);
    } catch (err) {
      console.error("Failed to create:", error);
    }
  };

  return (
    <div>
      <button onClick={handleCreate}>新しいシーズンを作成</button>
      {histories.map((history) => (
        <div key={history.uuid}>{history.seasonName}</div>
      ))}
    </div>
  );
};
```

### `characterStore.ts`

キャラクターと戦績記録の管理を担当するストアです。

#### 主な機能

- キャラクターの作成・更新・削除
- 戦績記録の作成・削除
- シーズンごとのキャラクター統計計算
- LocalStorageへの自動保存
- エラーハンドリング

#### 状態

```typescript
type CharacterState = {
  characters: Character[]; // キャラクター一覧
  matchRecords: MatchRecord[]; // 戦績記録一覧
  isLoading: boolean; // ローディング状態
  error: string | null; // エラーメッセージ
};
```

#### アクション

| アクション                                                | 説明                                 | パラメータ                                     | 戻り値             |
| --------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- | ------------------ |
| `loadData()`                                              | LocalStorageからデータを読み込み     | なし                                           | `void`             |
| `createCharacter(input)`                                  | 新しいキャラクターを作成             | `CreateCharacterInput`                         | `Character`        |
| `updateCharacter(uuid, name)`                             | キャラクターを更新                   | `uuid: string`, `name: string`                 | `boolean`          |
| `deleteCharacter(uuid)`                                   | キャラクターを削除（関連戦績も削除） | `uuid: string`                                 | `boolean`          |
| `createMatchRecord(input)`                                | 新しい戦績記録を作成                 | `CreateMatchRecordInput`                       | `MatchRecord`      |
| `deleteMatchRecord(uuid)`                                 | 戦績記録を削除                       | `uuid: string`                                 | `boolean`          |
| `clearMatchRecords()`                                     | 全戦績記録をクリア                   | なし                                           | `void`             |
| `getCharacterStatsForSeason(seasonUuid)`                  | 特定シーズンの統計を取得             | `seasonUuid: string`                           | `CharacterStats[]` |
| `getMatchRecordsForCharacter(characterUuid, seasonUuid?)` | キャラクターの戦績記録を取得         | `characterUuid: string`, `seasonUuid?: string` | `MatchRecord[]`    |
| `clearError()`                                            | エラーをクリア                       | なし                                           | `void`             |

#### 使用例

```tsx
import { useCharacterStore } from "@/stores";

const MyComponent = () => {
  const characters = useCharacterStore((state) => state.characters);
  const createCharacter = useCharacterStore((state) => state.createCharacter);
  const createMatchRecord = useCharacterStore((state) => state.createMatchRecord);
  const getCharacterStatsForSeason = useCharacterStore((state) => state.getCharacterStatsForSeason);

  const handleCreateCharacter = () => {
    const newCharacter = createCharacter({ name: "Player1" });
    console.log("Created:", newCharacter);
  };

  const handleAddMatchRecord = (characterUuid: string, seasonUuid: string) => {
    const newRecord = createMatchRecord({
      characterUuid,
      seasonUuid,
      job: "WARRIOR",
      map: "BELLA",
      isWin: true,
    });
    console.log("Record added:", newRecord);
  };

  const stats = getCharacterStatsForSeason("season-uuid-123");

  return (
    <div>
      {stats.map((stat) => (
        <div key={stat.character.uuid}>
          {stat.character.name}: {stat.wins}勝 {stat.defeat}敗
        </div>
      ))}
    </div>
  );
};
```

## データ永続化

すべてのストアは、状態変更時に自動的にLocalStorageにデータを保存します。

### LocalStorageキー

- `cc-war-record-histories`: シーズン履歴データ
- `cc-war-record-characters`: キャラクターデータ
- `cc-war-record-match-records`: 現在のシーズンの戦績記録データ
- `histories-{seasonUuid}`: 過去シーズンのアーカイブ戦績データ
- `cc-war-record:radar-chart-job1`: レーダーチャートジョブ1選択
- `cc-war-record:radar-chart-job2`: レーダーチャートジョブ2選択

### 初期化

各ストアは、ブラウザ環境でモジュールがロードされた際に自動的に初期化され、LocalStorageからデータを読み込みます。

```typescript
// 自動初期化（ストアファイル内）
if (typeof window !== "undefined") {
  useHistoryStore.getState().loadHistories();
  useCharacterStore.getState().loadData();
}
```

## エラーハンドリング

すべてのストアは、エラーが発生した場合に`error`状態にエラーメッセージを設定します。

### エラーの種類

1. **重複エラー**: 同じ名前のシーズンやキャラクターを作成しようとした場合
2. **存在エラー**: 存在しないUUIDのデータを更新・削除しようとした場合
3. **読み込みエラー**: LocalStorageからのデータ読み込みに失敗した場合

### エラーの確認とクリア

```tsx
const error = useHistoryStore((state) => state.error);
const clearError = useHistoryStore((state) => state.clearError);

if (error) {
  console.error("Error:", error);
  // エラーを表示後、クリア
  clearError();
}
```

## ベストプラクティス

### 1. セレクターの使用

必要な状態のみを購読することで、不要な再レンダリングを防ぎます。

```tsx
// ❌ 悪い例: すべての状態を購読
const { histories, isLoading, error } = useHistoryStore();

// ✅ 良い例: 必要な状態のみを購読
const histories = useHistoryStore((state) => state.histories);
const isLoading = useHistoryStore((state) => state.isLoading);
```

### 2. アクションの分離

アクションは状態と分けて取得することで、パフォーマンスを向上できます。

```tsx
// アクションは再レンダリングを引き起こさない
const createHistory = useHistoryStore((state) => state.createHistory);
const deleteHistory = useHistoryStore((state) => state.deleteHistory);
```

### 3. エラーハンドリング

アクション実行時は、エラーを適切にハンドリングします。

```tsx
const createHistory = useHistoryStore((state) => state.createHistory);
const error = useHistoryStore((state) => state.error);
const clearError = useHistoryStore((state) => state.clearError);

const handleSubmit = () => {
  try {
    createHistory({ seasonName: "Season 1" });
    // 成功時の処理
  } catch (err) {
    // エラーメッセージを表示
    alert(error);
    clearError();
  }
};
```

### 4. カスタムフックの作成

複雑なロジックはカスタムフックにまとめます。

```tsx
// hooks/useSeasonStats.ts
import { useCharacterStore } from "@/stores";

export const useSeasonStats = (seasonUuid: string) => {
  const stats = useCharacterStore((state) => state.getCharacterStatsForSeason(seasonUuid));

  const totalMatches = stats.reduce((sum, s) => sum + s.totalMatches, 0);
  const totalWins = stats.reduce((sum, s) => sum + s.wins, 0);
  const overallWinRate = totalMatches > 0 ? Math.round((totalWins / totalMatches) * 100) : 0;

  return { stats, totalMatches, totalWins, overallWinRate };
};
```

## テスト

ストアのテストは、Zustandの`create`関数を直接使用してモックを作成できます。

```tsx
import { renderHook, act } from "@testing-library/react";
import { useHistoryStore } from "@/stores";

describe("useHistoryStore", () => {
  beforeEach(() => {
    // ストアをリセット
    useHistoryStore.setState({ histories: [], error: null });
  });

  it("should create a new history", () => {
    const { result } = renderHook(() => useHistoryStore());

    act(() => {
      result.current.createHistory({ seasonName: "Test Season" });
    });

    expect(result.current.histories).toHaveLength(1);
    expect(result.current.histories[0].seasonName).toBe("Test Season");
  });
});
```

## 関連ドキュメント

- [Zustand公式ドキュメント](https://zustand-demo.pmnd.rs/)
- [Bulletproof React - State Management](https://github.com/alan2207/bulletproof-react/blob/master/docs/state-management.md)
- `/src/types/` - 型定義
- `/src/utils/localStorage.ts` - LocalStorageユーティリティ
- `/src/utils/uuid.ts` - UUID生成ユーティリティ

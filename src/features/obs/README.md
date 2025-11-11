# OBS Feature

## 概要

OBS（Open Broadcaster Software）などの配信ソフトウェアで使用するためのオーバーレイ表示機能を提供します。

## 機能

- **ドラッグ&ドロップによるレイアウトカスタマイズ**
  - @dnd-kit/coreを使用した直感的なUI配置
  - 編集モードでHUD要素を自由に配置可能

- **リアルタイム戦績表示**
  - 勝利数、敗北数、勝率、総試合数を表示
  - 現在のシーズンの統計情報を自動更新

- **レイアウト永続化**
  - Zustandのpersistミドルウェアで配置を保存
  - ブラウザを閉じても配置が保持される

## ルート

- `/obs` - OBS表示用ページ

## コンポーネント

- `ObsPage` - OBS表示のメインページコンポーネント
- `DraggableHudElement` - ドラッグ可能なHUD要素コンポーネント

## ストア

- `useObsLayoutStore` - HUD要素の配置を管理するZustandストア
  - `elements`: HUD要素の配列
  - `editMode`: 編集モードの状態
  - `updateElementPosition`: 要素の位置を更新
  - `toggleEditMode`: 編集モードの切り替え
  - `resetLayout`: レイアウトをデフォルトに戻す

## 使用技術

- @dnd-kit/core: ドラッグ&ドロップ機能
- Zustand: 状態管理とレイアウト永続化
- styled-components: スタイリング

## 使い方

1. `/obs` にアクセス
2. 編集モードで各要素をドラッグして配置を調整
3. OBSでブラウザソースとして追加し、ウィンドウキャプチャで表示

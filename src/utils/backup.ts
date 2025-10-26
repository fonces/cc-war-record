/**
 * バックアップ/リストアユーティリティ
 */

import JSZip from "jszip";
import { STORAGE_KEYS } from "./localStorage";

/**
 * バックアップ対象のストレージキー
 */
const BACKUP_KEYS = [STORAGE_KEYS.CHARACTERS, STORAGE_KEYS.MATCH_RECORDS, STORAGE_KEYS.HISTORIES, STORAGE_KEYS.RADAR_CHART_JOBS] as const;

/**
 * ローカルストレージからバックアップZIPファイルを作成してダウンロード
 */
export const createBackup = async (): Promise<void> => {
  const zip = new JSZip();

  // 各ストレージキーのデータをJSONファイルとしてZIPに追加
  BACKUP_KEYS.forEach((key) => {
    const data = localStorage.getItem(key);
    if (data) {
      // キー名から適切なファイル名を生成
      const fileName = `${key.replace(/^cc-war-record[-:]?/, "")}.json`;
      zip.file(fileName, data);
    }
  });

  // histories-${uuid}形式の個別履歴データも収集
  const historyKeys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("histories-")) {
      historyKeys.push(key);
    }
  }

  // 個別履歴データをZIPに追加
  historyKeys.forEach((key) => {
    const data = localStorage.getItem(key);
    if (data) {
      zip.file(`${key}.json`, data);
    }
  });

  // ZIPファイルを生成
  const blob = await zip.generateAsync({ type: "blob" });

  // タイムスタンプ付きファイル名を生成
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "")
    .replace("T", "-");
  const fileName = `cc-war-record-backup-${timestamp}.zip`;

  // ダウンロードリンクを作成して実行
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * ZIPファイルからバックアップをリストア
 * @param file - アップロードされたZIPファイル
 * @throws {Error} バックアップファイルが破損している場合
 */
export const restoreBackup = async (file: File): Promise<void> => {
  const zip = new JSZip();
  const loadedZip = await zip.loadAsync(file);

  // バックアップファイルの妥当性チェック用
  const validFileNames = new Set<string>();
  const expectedPrefixes = ["characters", "match-records", "histories", "radar-chart-jobs"];

  // ロールバック用に既存のデータを保存
  const backupData = new Map<string, string | null>();

  // ZIPファイル内の各ファイルを処理
  const promises: Promise<void>[] = [];

  loadedZip.forEach((relativePath, zipEntry) => {
    if (zipEntry.dir) return; // ディレクトリはスキップ

    const fileName = relativePath.replace(/\.json$/, "");

    // ファイル名の妥当性チェック
    const isValidFile =
      fileName.startsWith("histories-") || // 個別履歴データ
      expectedPrefixes.some((prefix) => fileName === prefix); // 標準キー

    if (!isValidFile) {
      // 無効なファイルが含まれている場合はエラー
      throw new Error("BACKUP_FILE_CORRUPTED");
    }

    validFileNames.add(fileName);

    promises.push(
      (async () => {
        const content = await zipEntry.async("text");

        // JSONの妥当性チェック
        try {
          JSON.parse(content);
        } catch {
          throw new Error("BACKUP_FILE_CORRUPTED");
        }

        // ファイル名からストレージキーを復元
        let storageKey: string;

        if (fileName.startsWith("histories-")) {
          // 個別履歴データ
          storageKey = fileName;
        } else {
          // 通常のキー（プレフィックスを復元）
          storageKey = fileName.includes(":") ? `cc-war-record:${fileName}` : `cc-war-record-${fileName}`;
        }

        // ロールバック用に既存データを保存
        backupData.set(storageKey, localStorage.getItem(storageKey));

        // データをlocalStorageに保存
        localStorage.setItem(storageKey, content);
      })(),
    );
  });

  try {
    // すべての非同期処理を待機
    await Promise.all(promises);
  } catch (error) {
    // エラーが発生した場合、ロールバックを実行
    backupData.forEach((value, key) => {
      if (value === null) {
        // 元々存在しなかったキーは削除
        localStorage.removeItem(key);
      } else {
        // 元の値に戻す
        localStorage.setItem(key, value);
      }
    });

    // エラーを再スロー
    throw error;
  }
};

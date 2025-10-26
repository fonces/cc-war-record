#!/usr/bin/env tsx

/**
 * Crystal Conflict War Record - Match Records Generator
 *
 * テスト用のMatchRecordデータを生成するスクリプト
 *
 * Usage:
 *   tsx scripts/cc-war-record-match-records.ts
 *   tsx scripts/cc-war-record-match-records.ts --count 1000 --days 180
 */

import { randomUUID } from "crypto";
import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

// 型定義
type Job = "PLD" | "WAR" | "DRK" | "GNB" | "WHM" | "SCH" | "AST" | "SGE" | "MNK" | "DRG" | "NIN" | "SAM" | "RPR" | "VPR" | "BRD" | "MCH" | "DNC" | "BLM" | "SMN" | "RDM" | "PCT";

type CrystalConflictMap = "THE_PALAISTRA" | "VOLCANIC_HEART" | "CLOUD_NINE" | "TOUHOU_KARAKURI_GOTEN" | "RED_SANDS" | "BAYSIDE_BATTLEGROUND";

type MatchRecord = {
  uuid: string;
  characterUuid: string;
  seasonUuid: string;
  job: Job;
  map: CrystalConflictMap;
  isWin: boolean;
  recordedAt: string;
  createdAt: string;
  updatedAt: string;
};

type Config = {
  characterUuid: string;
  seasonUuid: string;
  totalMatches: number;
  totalDays: number;
  startDate: string;
  outputFile: string;
};

// コマンドライン引数の解析
const args = process.argv.slice(2);
const getArgValue = (argName: string, defaultValue: string): string => {
  const index = args.indexOf(argName);
  return index !== -1 && args[index + 1] ? args[index + 1] : defaultValue;
};

// 設定
const CONFIG: Config = {
  characterUuid: getArgValue("--character-uuid", "166371a4-0c2f-4635-b33c-8f1632b85364"),
  seasonUuid: getArgValue("--season-uuid", "f4ee4e02-af25-4724-a050-64c49824f306"),
  totalMatches: parseInt(getArgValue("--count", "500"), 10),
  totalDays: parseInt(getArgValue("--days", "90"), 10),
  startDate: getArgValue("--start-date", "2024-01-01"),
  outputFile: getArgValue("--output", `./.out/records.json`),
};

// ジョブとマップの定義
const JOBS: Job[] = [
  "PLD",
  "WAR",
  "DRK",
  "GNB", // タンク
  "WHM",
  "SCH",
  "AST",
  "SGE", // ヒーラー
  "MNK",
  "DRG",
  "NIN",
  "SAM",
  "RPR",
  "VPR", // 近接DPS
  "BRD",
  "MCH",
  "DNC", // 物理遠隔DPS
  "BLM",
  "SMN",
  "RDM",
  "PCT", // 魔法遠隔DPS
];

const MAPS: CrystalConflictMap[] = ["THE_PALAISTRA", "VOLCANIC_HEART", "CLOUD_NINE", "TOUHOU_KARAKURI_GOTEN", "RED_SANDS", "BAYSIDE_BATTLEGROUND"];

/**
 * UUIDv4を生成
 */
function generateUUID(): string {
  return randomUUID();
}

/**
 * 配列からランダムに要素を選択
 */
function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * ランダムな日時を生成
 */
function randomDateTime(baseDate: Date, dayOffset: number): Date {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + dayOffset);
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  date.setSeconds(Math.floor(Math.random() * 60));
  date.setMilliseconds(0);
  return date;
}

/**
 * ISO形式の日時文字列を生成
 */
function formatISOString(date: Date): string {
  return date.toISOString().replace(/\.\d{3}Z$/, ".000Z");
}

/**
 * MatchRecordデータを生成
 */
function generateMatchRecords(): MatchRecord[] {
  const matchRecords: MatchRecord[] = [];
  const startDate = new Date(CONFIG.startDate);

  console.log("🎮 Generating match records...\n");

  for (let i = 0; i < CONFIG.totalMatches; i++) {
    // 指定日数間に均等に分散
    const dayOffset = (i * CONFIG.totalDays) / CONFIG.totalMatches;
    const recordedAt = randomDateTime(startDate, dayOffset);

    const matchRecord: MatchRecord = {
      uuid: generateUUID(),
      characterUuid: CONFIG.characterUuid,
      seasonUuid: CONFIG.seasonUuid,
      job: randomChoice(JOBS),
      map: randomChoice(MAPS),
      isWin: Math.random() > 0.5,
      recordedAt: formatISOString(recordedAt),
      createdAt: formatISOString(recordedAt),
      updatedAt: formatISOString(recordedAt),
    };

    matchRecords.push(matchRecord);
  }

  // 時系列順にソート
  matchRecords.sort((a, b) => new Date(a.recordedAt).getTime() - new Date(b.recordedAt).getTime());

  return matchRecords;
}

/**
 * 統計情報を計算して表示
 */
function displayStatistics(matchRecords: MatchRecord[]): void {
  const wins = matchRecords.filter((m) => m.isWin).length;
  const losses = matchRecords.length - wins;
  const winRate = ((wins / matchRecords.length) * 100).toFixed(1);

  const startDate = new Date(CONFIG.startDate);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + CONFIG.totalDays);

  console.log("✅ Generation completed!\n");
  console.log("📊 Statistics:");
  console.log(`  - Period: ${startDate.toISOString().split("T")[0]} to ${endDate.toISOString().split("T")[0]}`);
  console.log(`  - Total matches: ${matchRecords.length}`);
  console.log(`  - Wins: ${wins}`);
  console.log(`  - Losses: ${losses}`);
  console.log(`  - Win rate: ${winRate}%`);

  // ジョブごとの使用回数
  const jobCounts: Record<string, number> = {};
  matchRecords.forEach((m) => {
    jobCounts[m.job] = (jobCounts[m.job] || 0) + 1;
  });

  console.log("\n📋 Job usage:");
  Object.entries(jobCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([job, count]) => {
      const percentage = ((count / matchRecords.length) * 100).toFixed(1);
      console.log(`  - ${job}: ${count} matches (${percentage}%)`);
    });

  // マップごとの使用回数
  const mapCounts: Record<string, number> = {};
  matchRecords.forEach((m) => {
    mapCounts[m.map] = (mapCounts[m.map] || 0) + 1;
  });

  console.log("\n🗺️  Map distribution:");
  Object.entries(mapCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([map, count]) => {
      const percentage = ((count / matchRecords.length) * 100).toFixed(1);
      console.log(`  - ${map}: ${count} matches (${percentage}%)`);
    });
}

/**
 * ファイルに書き込み
 */
function writeToFile(matchRecords: MatchRecord[], outputPath: string): void {
  // ディレクトリが存在しない場合は作成
  const dir = dirname(outputPath);
  mkdirSync(dir, { recursive: true });

  const jsonContent = JSON.stringify(matchRecords, null, 2);
  writeFileSync(outputPath, jsonContent, "utf8");
  console.log(`\n💾 Saved to: ${outputPath}`);
}

/**
 * ヘルプメッセージを表示
 */
function showHelp(): void {
  console.log(`
Crystal Conflict War Record - Match Records Generator

Usage:
  tsx scripts/cc-war-record-match-records.ts [options]

Options:
  --count <number>              Number of matches to generate (default: 500)
  --days <number>               Number of days to spread matches over (default: 90)
  --start-date <YYYY-MM-DD>     Start date for match records (default: 2024-10-19)
  --character-uuid <uuid>       Character UUID (default: 166371a4-0c2f-4635-b33c-8f1632b85364)
  --season-uuid <uuid>          Season UUID (default: f4ee4e02-af25-4724-a050-64c49824f306)
  --output <filename>           Output file name (default: ./.out/<timestamp>.json)
  --help                        Show this help message

Examples:
  # Generate 500 matches over 90 days
  tsx scripts/cc-war-record-match-records.ts

  # Generate 1000 matches over 180 days
  tsx scripts/cc-war-record-match-records.ts --count 1000 --days 180

  # Generate with custom UUIDs
  tsx scripts/cc-war-record-match-records.ts --character-uuid <uuid> --season-uuid <uuid>

  # Save to custom file
  tsx scripts/cc-war-record-match-records.ts --output custom-data.json
`);
}

/**
 * メイン処理
 */
function main(): void {
  if (args.includes("--help") || args.includes("-h")) {
    showHelp();
    process.exit(0);
  }

  console.log("🎯 Crystal Conflict War Record - Match Records Generator\n");
  console.log("Configuration:");
  console.log(`  - Character UUID: ${CONFIG.characterUuid}`);
  console.log(`  - Season UUID: ${CONFIG.seasonUuid}`);
  console.log(`  - Total matches: ${CONFIG.totalMatches}`);
  console.log(`  - Period: ${CONFIG.totalDays} days`);
  console.log(`  - Start date: ${CONFIG.startDate}`);
  console.log(`  - Output file: ${CONFIG.outputFile}\n`);

  const matchRecords = generateMatchRecords();
  displayStatistics(matchRecords);
  writeToFile(matchRecords, CONFIG.outputFile);

  console.log("\n✨ Done!");
}

// スクリプト実行
main();

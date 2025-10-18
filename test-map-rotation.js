const MAPS = {
  THE_PALAISTRA: 'THE_PALAISTRA',
  VOLCANIC_HEART: 'VOLCANIC_HEART',
  TOUHOU_KARAKURI_GOTEN: 'TOUHOU_KARAKURI_GOTEN',
  BAYSIDE_BATTLEGROUND: 'BAYSIDE_BATTLEGROUND',
  CLOUD_NINE: 'CLOUD_NINE',
  RED_SANDS: 'RED_SANDS',
};

const MAP_ROTATION = [
  MAPS.THE_PALAISTRA,
  MAPS.VOLCANIC_HEART,
  MAPS.TOUHOU_KARAKURI_GOTEN,
  MAPS.BAYSIDE_BATTLEGROUND,
  MAPS.CLOUD_NINE,
  MAPS.RED_SANDS,
];

const BASE_DATE = new Date('2025-10-18T19:00:00Z');
const MAP_DURATION_MS = 90 * 60 * 1000;

const getCurrentMap = (currentDate = new Date()) => {
  const elapsedMs = currentDate.getTime() - BASE_DATE.getTime();
  const rotationIndex = Math.floor(elapsedMs / MAP_DURATION_MS) % MAP_ROTATION.length;
  return MAP_ROTATION[rotationIndex];
};

// 日本時間 2025/10/19 8:22 = UTC 2025/10/18 23:22
const testDate = new Date('2025-10-18T23:22:00Z');
const result = getCurrentMap(testDate);
console.log('現在時刻（UTC）:', testDate.toISOString());
console.log('現在時刻（JST）: 2025/10/19 8:22');
console.log('現在のマップ:', result);
console.log('期待値: BAYSIDE_BATTLEGROUND');
console.log('一致:', result === MAPS.BAYSIDE_BATTLEGROUND ? '✓ 成功' : '✗ 失敗');

// ローテーションも確認
console.log('\n=== ローテーション確認 ===');
for (let i = 0; i < 6; i++) {
  const time = new Date(BASE_DATE.getTime() + i * MAP_DURATION_MS);
  const map = getCurrentMap(time);
  const jstTime = new Date(time.getTime() + 9 * 60 * 60 * 1000);
  console.log((i + 1) + '. UTC: ' + time.toISOString() + ' (JST: ' + jstTime.toLocaleString('ja-JP') + ') → ' + map);
}

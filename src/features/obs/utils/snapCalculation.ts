import type { HudElement } from "../types";

/**
 * スナップガイド情報
 */
export type SnapGuides = {
  x?: number;
  y?: number;
  xDistance?: { from: number; to: number; y: number };
  yDistance?: { from: number; to: number; x: number };
};

/**
 * スナップ計算結果
 */
export type SnapResult = {
  position: { x: number; y: number };
  guides: SnapGuides;
};

/**
 * 要素のサイズをDOMから取得
 */
const getElementSize = (elementId: string): { width: number; height: number } => {
  const dom = document.querySelector(`[data-element-id="${elementId}"]`);
  const rect = dom?.getBoundingClientRect();
  return {
    width: rect?.width || 200,
    height: rect?.height || 50,
  };
};

/**
 * 2つの範囲が重なっているかチェック
 */
const hasOverlap = (start1: number, end1: number, start2: number, end2: number): boolean => {
  const overlapStart = Math.max(start1, start2);
  const overlapEnd = Math.min(end1, end2);
  return overlapEnd > overlapStart;
};

/**
 * 他の要素との位置を比較してスナップ補正を計算
 *
 * @param currentId - 現在ドラッグ中の要素ID
 * @param targetX - 目標X座標
 * @param targetY - 目標Y座標
 * @param elements - 全要素リスト
 * @param snapThreshold - スナップ閾値（px）
 * @returns スナップ補正された位置とガイド情報
 */
export function calculateSnap(
  currentId: string,
  targetX: number,
  targetY: number,
  elements: HudElement[],
  snapThreshold: number = 10,
): SnapResult {
  const currentElement = elements.find((el) => el.id === currentId);
  if (!currentElement) {
    return { position: { x: targetX, y: targetY }, guides: {} };
  }

  const otherElements = elements.filter((el) => el.id !== currentId);
  let snappedX = targetX;
  let snappedY = targetY;
  const guides: SnapGuides = {};

  // 現在の要素のサイズを取得
  const { width: currentWidth, height: currentHeight } = getElementSize(currentId);

  let closestXElement: HudElement | null = null;
  let closestYElement: HudElement | null = null;
  let closestXElementWidth = 0;
  let closestYElementHeight = 0;
  let minXGap = Infinity;
  let minYGap = Infinity;

  // 他の要素との距離を計算してスナップと最近接要素を探す
  for (const other of otherElements) {
    const { width: otherWidth, height: otherHeight } = getElementSize(other.id);

    const xDist = Math.abs(targetX - other.position.x);
    const yDist = Math.abs(targetY - other.position.y);

    // X軸のスナップ（左端揃え）
    if (xDist < snapThreshold) {
      snappedX = other.position.x;
      guides.x = other.position.x;
    }

    // Y軸のスナップ（上端揃え）
    if (yDist < snapThreshold) {
      snappedY = other.position.y;
      guides.y = other.position.y;
    }

    // Y軸が重なっている範囲をチェック（横方向のgap計算用）
    const hasYOverlap = hasOverlap(targetY, targetY + currentHeight, other.position.y, other.position.y + otherHeight);

    // X軸が重なっている範囲をチェック（縦方向のgap計算用）
    const hasXOverlap = hasOverlap(targetX, targetX + currentWidth, other.position.x, other.position.x + otherWidth);

    // 横方向のgap（X方向）: Y軸が重なっている要素間の距離
    if (hasYOverlap) {
      let gap: number;
      if (targetX < other.position.x) {
        // 現在の要素が左側
        gap = other.position.x - (targetX + currentWidth);
      } else {
        // 現在の要素が右側
        gap = targetX - (other.position.x + otherWidth);
      }

      if (gap >= 0 && gap < minXGap) {
        minXGap = gap;
        closestXElement = other;
        closestXElementWidth = otherWidth;
      }
    }

    // 縦方向のgap（Y方向）: X軸が重なっている要素間の距離
    if (hasXOverlap) {
      let gap: number;
      if (targetY < other.position.y) {
        // 現在の要素が上側
        gap = other.position.y - (targetY + currentHeight);
      } else {
        // 現在の要素が下側
        gap = targetY - (other.position.y + otherHeight);
      }

      if (gap >= 0 && gap < minYGap) {
        minYGap = gap;
        closestYElement = other;
        closestYElementHeight = otherHeight;
      }
    }
  }

  // X方向の距離表示（横方向のgap）- コンテナの外側の端から端まで
  if (closestXElement && minXGap < 200) {
    let lineFrom: number, lineTo: number;
    const yPos = Math.max(targetY, closestXElement.position.y) + 10;

    if (targetX < closestXElement.position.x) {
      // 現在の要素が左側: 現在の右端 から 相手の左端
      lineFrom = targetX + currentWidth;
      lineTo = closestXElement.position.x;
    } else {
      // 現在の要素が右側: 相手の右端 から 現在の左端
      lineFrom = closestXElement.position.x + closestXElementWidth;
      lineTo = targetX;
    }

    guides.xDistance = {
      from: lineFrom,
      to: lineTo,
      y: yPos,
    };
  }

  // Y方向の距離表示（縦方向のgap）- コンテナの外側の端から端まで
  if (closestYElement && minYGap < 200) {
    let lineFrom: number, lineTo: number;
    const xPos = Math.max(targetX, closestYElement.position.x) + 10;

    if (targetY < closestYElement.position.y) {
      // 現在の要素が上側: 現在の下端 から 相手の上端
      lineFrom = targetY + currentHeight;
      lineTo = closestYElement.position.y;
    } else {
      // 現在の要素が下側: 相手の下端 から 現在の上端
      lineFrom = closestYElement.position.y + closestYElementHeight;
      lineTo = targetY;
    }

    guides.yDistance = {
      from: lineFrom,
      to: lineTo,
      x: xPos,
    };
  }

  return { position: { x: snappedX, y: snappedY }, guides };
}

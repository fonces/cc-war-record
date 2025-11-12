import type { HudTemplate } from "./types";
/**
 * デフォルト画面サイズ（フルHD）
 */
const DEFAULT_SCREEN_SIZE = {
  width: 1920,
  height: 1080,
  preset: "1920x1080" as const,
};


/**
 * ミニマルテンプレート集
 * シンプルで洗練されたデザイン
 */
export const minimalTemplates: HudTemplate[] = [
  {
    metadata: {
      id: "minimal-corner",
      name: "Corner Stats",
      nameKey: "obs.templates.minimalCorner.name",
      description: "Clean corner display with essential stats",
      descriptionKey: "obs.templates.minimalCorner.description",
      category: "minimal",
      tags: ["simple", "clean", "corner"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "variableText",
        position: { x: 1650, y: 20 },
        visible: true,
        fontSize: 20,
        text: "{winCount}勝 {loseCount}敗\n勝率 {winRate}%",
        textColor: "#ffffff",
        textAlign: "right",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: 20,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
      },
    ],
  },
  {
    metadata: {
      id: "minimal-top-bar",
      name: "Top Bar",
      nameKey: "obs.templates.minimalTopBar.name",
      description: "Centered top bar with key metrics",
      descriptionKey: "obs.templates.minimalTopBar.description",
      category: "minimal",
      tags: ["simple", "top", "centered"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 710, y: 20 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 2,
        lineColor: "#667eea",
        size: { width: 500, height: 2 },
      },
      {
        type: "variableText",
        position: { x: 810, y: 40 },
        visible: true,
        fontSize: 22,
        text: "{winCount}W - {loseCount}L  |  {winRate}%  |  {totalMatches}試合",
        textColor: "#ffffff",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 16,
        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
      },
    ],
  },
  {
    metadata: {
      id: "minimal-side-panel",
      name: "Side Panel",
      nameKey: "obs.templates.minimalSidePanel.name",
      description: "Vertical side panel layout",
      descriptionKey: "obs.templates.minimalSidePanel.description",
      category: "minimal",
      tags: ["vertical", "side", "compact"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 20, y: 300 },
        visible: true,
        lineOrientation: "vertical",
        lineThickness: 3,
        lineColor: "#8b5cf6",
        size: { width: 3, height: 180 },
      },
      {
        type: "variableText",
        position: { x: 35, y: 320 },
        visible: true,
        fontSize: 18,
        text: "勝: {winCount}\n敗: {loseCount}\n勝率: {winRate}%",
        textColor: "#ffffff",
        textAlign: "left",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 16,
        boxShadow: "0 4px 12px rgba(139, 92, 246, 0.4)",
      },
    ],
  },
];

/**
 * 詳細テンプレート集
 * 豊富な情報を表示
 */
export const detailedTemplates: HudTemplate[] = [
  {
    metadata: {
      id: "detailed-dashboard",
      name: "Full Dashboard",
      nameKey: "obs.templates.detailedDashboard.name",
      description: "Comprehensive stats dashboard",
      descriptionKey: "obs.templates.detailedDashboard.description",
      category: "detailed",
      tags: ["complete", "dashboard", "analytics"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 50, y: 50 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 2,
        lineColor: "#667eea",
        size: { width: 600, height: 2 },
      },
      {
        type: "variableText",
        position: { x: 50, y: 70 },
        visible: true,
        fontSize: 28,
        text: "戦績 {winCount}-{loseCount}",
        textColor: "#667eea",
        backgroundColor: "rgba(0, 0, 0, 0)",
        padding: 0,
        boxShadow: "none",
      },
      {
        type: "statsCombo",
        position: { x: 50, y: 130 },
        visible: true,
        fontSize: 20,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: 24,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
        comboItems: ["winCount", "loseCount", "winRate", "totalMatches"],
      },
      {
        type: "todayTrendChart",
        position: { x: 50, y: 360 },
        visible: true,
        fontSize: 14,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: 20,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
        size: { width: 600, height: 400 },
      },
    ],
  },
  {
    metadata: {
      id: "detailed-split-view",
      name: "Split View",
      nameKey: "obs.templates.detailedSplitView.name",
      description: "Stats and chart side by side",
      descriptionKey: "obs.templates.detailedSplitView.description",
      category: "detailed",
      tags: ["split", "chart", "balanced"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "variableText",
        position: { x: 50, y: 50 },
        visible: true,
        fontSize: 24,
        text: "今日の成績",
        textColor: "#60a5fa",
        backgroundColor: "rgba(0, 0, 0, 0)",
        padding: 0,
        boxShadow: "none",
      },
      {
        type: "statsCombo",
        position: { x: 50, y: 100 },
        visible: true,
        fontSize: 22,
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        padding: 28,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
        comboItems: ["winCount", "loseCount", "winRate", "totalMatches"],
      },
      {
        type: "line",
        position: { x: 410, y: 50 },
        visible: true,
        lineOrientation: "vertical",
        lineThickness: 2,
        lineColor: "#475569",
        size: { width: 2, height: 450 },
      },
      {
        type: "todayTrendChart",
        position: { x: 450, y: 50 },
        visible: true,
        fontSize: 14,
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        padding: 20,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
        size: { width: 700, height: 450 },
      },
    ],
  },
];

/**
 * ストリーミング配信向けテンプレート集
 * 視聴者に見やすいデザイン
 */
export const streamingTemplates: HudTemplate[] = [
  {
    metadata: {
      id: "streaming-bottom-ticker",
      name: "Bottom Ticker",
      nameKey: "obs.templates.streamingBottomTicker.name",
      description: "Bottom screen ticker with stats",
      descriptionKey: "obs.templates.streamingBottomTicker.description",
      category: "streaming",
      tags: ["bottom", "ticker", "viewer-friendly"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 0, y: 1030 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 3,
        lineColor: "#667eea",
        size: { width: 1920, height: 3 },
      },
      {
        type: "variableText",
        position: { x: 710, y: 1045 },
        visible: true,
        fontSize: 24,
        text: "{winCount}勝 {loseCount}敗  |  勝率 {winRate}%  |  総試合数 {totalMatches}",
        textColor: "#ffffff",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        padding: 16,
        boxShadow: "0 -4px 16px rgba(0, 0, 0, 0.6)",
      },
    ],
  },
  {
    metadata: {
      id: "streaming-corner-overlay",
      name: "Corner Overlay",
      nameKey: "obs.templates.streamingCornerOverlay.name",
      description: "Non-intrusive corner overlay",
      descriptionKey: "obs.templates.streamingCornerOverlay.description",
      category: "streaming",
      tags: ["corner", "overlay", "minimal"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 1630, y: 20 },
        visible: true,
        lineOrientation: "vertical",
        lineThickness: 4,
        lineColor: "#8b5cf6",
        size: { width: 4, height: 140 },
      },
      {
        type: "variableText",
        position: { x: 1650, y: 30 },
        visible: true,
        fontSize: 20,
        text: "W {winCount}\nL {loseCount}\n{winRate}%",
        textColor: "#ffffff",
        textAlign: "right",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        padding: 16,
        boxShadow: "0 4px 16px rgba(139, 92, 246, 0.5)",
      },
    ],
  },
  {
    metadata: {
      id: "streaming-title-safe",
      name: "Title Safe Area",
      nameKey: "obs.templates.streamingTitleSafe.name",
      description: "Safe for YouTube/Twitch thumbnails",
      descriptionKey: "obs.templates.streamingTitleSafe.description",
      category: "streaming",
      tags: ["safe-area", "thumbnail", "centered"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "variableText",
        position: { x: 140, y: 240 },
        visible: true,
        fontSize: 36,
        text: "{winCount}勝\n{loseCount}敗\n勝率{winRate}%",
        textColor: "#ffffff",
        textAlign: "left",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: 32,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6)",
        scale: 1.2,
      },
      {
        type: "line",
        position: { x: 120, y: 220 },
        visible: true,
        lineOrientation: "vertical",
        lineThickness: 5,
        lineColor: "#3b82f6",
        size: { width: 5, height: 250 },
      },
    ],
  },
];

/**
 * 競技向けテンプレート集
 * プロフェッショナルで見やすいデザイン
 */
export const competitiveTemplates: HudTemplate[] = [
  {
    metadata: {
      id: "competitive-esports",
      name: "E-Sports HUD",
      nameKey: "obs.templates.competitiveEsports.name",
      description: "Professional tournament style",
      descriptionKey: "obs.templates.competitiveEsports.description",
      category: "competitive",
      tags: ["esports", "tournament", "professional"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 0, y: 0 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 4,
        lineColor: "#ef4444",
        size: { width: 600, height: 4 },
      },
      {
        type: "variableText",
        position: { x: 20, y: 15 },
        visible: true,
        fontSize: 28,
        text: "RECORD: {winCount}W-{loseCount}L ({winRate}%)",
        textColor: "#ffffff",
        textAlign: "left",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        padding: 20,
        boxShadow: "0 8px 32px rgba(239, 68, 68, 0.6)",
        scale: 1.1,
      },
      {
        type: "variableText",
        position: { x: 620, y: 20 },
        visible: true,
        fontSize: 18,
        text: "MATCHES: {totalMatches}",
        textColor: "#94a3b8",
        textAlign: "left",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        padding: 14,
      },
    ],
  },
  {
    metadata: {
      id: "competitive-scoreboard",
      name: "Scoreboard",
      nameKey: "obs.templates.competitiveScoreboard.name",
      description: "Clear scoreboard layout",
      descriptionKey: "obs.templates.competitiveScoreboard.description",
      category: "competitive",
      tags: ["scoreboard", "clear", "readable"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 760, y: 20 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 5,
        lineColor: "#fbbf24",
        size: { width: 400, height: 5 },
      },
      {
        type: "variableText",
        position: { x: 810, y: 40 },
        visible: true,
        fontSize: 48,
        text: "{winCount} - {loseCount}",
        textColor: "#fbbf24",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        padding: 32,
        boxShadow: "0 8px 32px rgba(251, 191, 36, 0.5)",
        scale: 1.3,
      },
      {
        type: "line",
        position: { x: 760, y: 180 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 2,
        lineColor: "#475569",
        size: { width: 400, height: 2 },
      },
      {
        type: "variableText",
        position: { x: 820, y: 200 },
        visible: true,
        fontSize: 24,
        text: "勝率 {winRate}%  |  総試合数 {totalMatches}",
        textColor: "#cbd5e1",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        padding: 16,
      },
    ],
  },
  {
    metadata: {
      id: "competitive-analyst",
      name: "Analyst View",
      nameKey: "obs.templates.competitiveAnalyst.name",
      description: "Detailed analytics for commentary",
      descriptionKey: "obs.templates.competitiveAnalyst.description",
      category: "competitive",
      tags: ["analyst", "detailed", "commentary"],
    },
    screenSize: DEFAULT_SCREEN_SIZE,
    elements: [
      {
        type: "line",
        position: { x: 20, y: 920 },
        visible: true,
        lineOrientation: "horizontal",
        lineThickness: 3,
        lineColor: "#06b6d4",
        size: { width: 500, height: 3 },
      },
      {
        type: "variableText",
        position: { x: 30, y: 935 },
        visible: true,
        fontSize: 22,
        text: "戦績: {winCount}勝 {loseCount}敗\n勝率: {winRate}% ({totalMatches}戦)",
        textColor: "#ffffff",
        textAlign: "left",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        padding: 20,
        boxShadow: "0 -8px 24px rgba(6, 182, 212, 0.4)",
      },
      {
        type: "line",
        position: { x: 540, y: 935 },
        visible: true,
        lineOrientation: "vertical",
        lineThickness: 2,
        lineColor: "#475569",
        size: { width: 2, height: 125 },
      },
    ],
  },
];

/**
 * 全テンプレート
 */
export const allTemplates: HudTemplate[] = [...minimalTemplates, ...detailedTemplates, ...streamingTemplates, ...competitiveTemplates];

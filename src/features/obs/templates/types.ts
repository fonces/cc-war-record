import type { ScreenSize } from "../store/obsLayoutStore";
import type { HudElement } from "../types";

/**
 * テンプレートカテゴリ
 */
export type TemplateCategory = "minimal" | "detailed" | "streaming" | "competitive" | "premium";

/**
 * テンプレートメタデータ
 */
export type TemplateMetadata = {
  id: string;
  name: string;
  nameKey: string;
  description: string;
  descriptionKey: string;
  category: TemplateCategory;
  thumbnail?: string;
  tags: string[];
};

/**
 * HUDレイアウトテンプレート
 */
export type HudTemplate = {
  metadata: TemplateMetadata;
  elements: Omit<HudElement, "id">[];
  screenSize?: ScreenSize;
};

/**
 * UUID v4形式の型定義
 * フォーマット: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * - x: 16進数 (0-9a-f)
 * - 4: バージョン4を示す固定値
 * - y: バリアント (8, 9, a, b のいずれか)
 *
 * 注: TypeScriptの型システムの制限により、完全に厳密な型定義は困難なため、
 * ブランド型を使用して文字列との区別を可能にしています。
 */
export type UUIDv4 = string & { readonly __brand: "UUID" };

---
applyTo: 'src/**'
---

# GitHub Copilot コード生成指示

## プロジェクト基本情報

### 技術スタック

- React v18.x
- TypeScript v5.x
- Vite v5.x（ビルドツール）
- TanStack Router v1.x（ルーティング）
- Zustand v4.x（クライアント状態管理）
- styled-components v6.x（スタイリング）
- recharts v2.x（チャート描画）

### アーキテクチャ原則（Bulletproof React）

#### Feature-based構造
- 機能ごとに独立したモジュールとして管理
- 各featureは`features/[feature-name]/`ディレクトリに配置
- featureは`index.ts`で公開APIを定義し、内部実装を隠蔽
- feature間の依存は最小限に抑え、疎結合を保つ

#### ディレクトリの役割
- `app/`: アプリケーションのエントリーポイント、プロバイダー、ルーティング
- `components/`: 複数のfeatureで共有される汎用コンポーネント
- `features/`: 機能単位のモジュール（独立性が高い）
- `lib/`: 外部ライブラリの設定・ラッパー
- `hooks/`: 共有カスタムフック
- `stores/`: グローバル状態管理
- `types/`: 共有型定義
- `utils/`: 共有ユーティリティ関数
- `test/`: テストユーティリティ・モック設定

#### インポートルール
- 絶対パスインポートを使用（`@/`プレフィックス）
- feature外部からfeature内部の詳細にアクセスしない
- featureの公開APIは`index.ts`経由でのみアクセス
- 循環参照を避ける

### ディレクトリ構造（Bulletproof React準拠）

- `public/` - 公開ディレクトリ
- `src/`
  - `app/` - アプリケーション層
    - `provider.tsx` - アプリケーションプロバイダー
    - `routes.tsx` - ルーティング設定
  - `components/` - 共有コンポーネント
    - `ui/` - UIコンポーネント（Button, Input等）
    - `form/` - フォームコンポーネント
    - `layout/` - レイアウトコンポーネント
  - `features/` - 機能モジュール（Feature-based構造）
    - `[feature-name]/` - 各機能ディレクトリ
      - `api/` - API呼び出し
      - `components/` - 機能固有のコンポーネント
      - `hooks/` - 機能固有のカスタムフック
      - `stores/` - 機能固有の状態管理
      - `types/` - 機能固有の型定義
      - `utils/` - 機能固有のユーティリティ
      - `index.ts` - 公開API（エクスポート）
  - `hooks/` - 共有カスタムフック
  - `lib/` - 外部ライブラリの設定・再エクスポート
    - `router.ts` - TanStack Router設定
  - `stores/` - グローバル状態管理（Zustand）
  - `types/` - 共有型定義
  - `utils/` - 共有ユーティリティ関数
  - `test/` - テストユーティリティ
    - `server/` - MSWサーバー設定
    - `test-utils.tsx` - テストヘルパー

## TypeScript/Reactコード生成ルール

### 基本原則

- 単純で明確、かつidiomatic（慣用的）なTypeScriptコードを記述
- 賢さよりも明確さとシンプルさを優先
- least surpriseの原則に従う
- happy pathを左寄せ（インデントを最小限に）
- 早期リターンでネストを減らす
- ゼロ値を有効活用
- typeのimportは必ず`import type { ... } from '...'`を使用

#### 変数と関数

- アンダースコアではなくmixedCapsまたはMixedCaps（camelCase）を使用
- Component内で意味が伝わる程度の短い説明的な変数名を使用
- 非常に短いスコープ（ループインデックスなど）でのみ1文字変数を使用

### TypeScript型定義ルール

#### 型定義の基本

- すべての変数、関数、コンポーネントpropsに明示的な型を定義
- `any`型は使用禁止（どうしても必要な場合は`unknown`を使用し、型ガードで安全に扱う）
- 型推論が明確な場合は型注釈を省略可能
- インターフェースよりも型エイリアス（`type`）を優先
- コンポーネントのprops型は`interface`ではなく`type`で定義
- 共通の型定義は`types/`ディレクトリに配置

#### 型定義のベストプラクティス

- Union型を活用して型安全性を向上
- 必須プロパティと任意プロパティを明確に区別
- `Record`、`Pick`、`Omit`、`Partial`などのユーティリティ型を活用
- ジェネリクスは必要な場合のみ使用し、複雑化を避ける
- 型ガード関数を作成して型の絞り込みを行う

### コードスタイルとフォーマット

#### コードスタイル

- `var`は使用しない
- `const`を優先的に使用し、`let`は必要な場合のみ使用
- `prototype`は使用しない
- `===`と`!==`を使用し、型変換を避ける
- `null`と`undefined`を区別し、適切に使用
- `for`ループは避け、`map`や`reduce`などの高階関数を使用
- 非同期処理の記述は`then/catch`ではなく`async/await`を使用して記述
- `try/catch`を使用してエラーハンドリングを行う
- コメントは必要な場合のみ使用し、コードの意図を明確にする
- `console.log`はデバッグ用にのみ使用し、最終コードには残さない
- `import`はファイルの先頭にまとめて記述
- `import`と`export`の順序は、外部ライブラリ、内部モジュール、ローカルモジュールの順にする
- `async`関数は、非同期処理を行う場合にのみ使用
- `await`は、Promiseが解決されるまで待機する必要がある場合にのみ使用
- アロー関数を使用する

#### Reactコードスタイル

- React関数コンポーネントとHooksを使用
- **TypeScriptを必ず使用し、すべてのコンポーネントに型定義を行う**
- コンポーネントファイルの拡張子は`.tsx`を使用
- **スタイリングはstyled-componentsを使用**
- コンポーネントは機能ごとに分割し、再利用可能な形で設計
- コンポーネント名はPascalCaseを使用
- **Feature-based構造**: 機能ごとに`features/`ディレクトリ配下に配置
- 各featureディレクトリは独立したモジュールとして設計し、`index.ts`で公開APIを定義
- `/src/components/*`は共有コンポーネントのみ配置（`ui/`, `form/`, `layout/`等）
- 機能固有のコンポーネントは`features/[feature-name]/components/`に配置
- コンポーネントフォルダには`index.tsx`と必要に応じて`[ComponentName].tsx`を配置
- テストファイルは同じディレクトリに`[ComponentName].test.tsx`として配置

#### styled-components スタイルルール

- スタイルコンポーネントは同じファイル内で定義、またはコンポーネントと同じディレクトリに`styles.ts`を作成
- スタイルコンポーネント名は`Styled`プレフィックスを付ける（例: `StyledButton`, `StyledContainer`）
- テーマは`theme`オブジェクトで管理し、`ThemeProvider`で提供
- メディアクエリはテーマの`breakpoints`を使用
- CSS-in-JSの利点を活かし、propsベースの動的スタイリングを活用
- グローバルスタイルは`GlobalStyle`コンポーネントで定義

#### React TypeScript コードスタイル

- 関数コンポーネントの型は`React.FC`を使用せず、通常の関数型で定義
- props型は`type Props = { ... }`の形式で定義
- 関数コンポーネントの先頭でHooksを呼び出す（条件分岐やループ内では使用しない）
- `props`の分割代入は関数の引数で行い、型注釈を付ける
- `useState`や`useReducer`で状態を管理し、ジェネリクスで型を明示
- 副作用は`useEffect`で管理
- パフォーマンス最適化には`useMemo`、`useCallback`を使用（必要な場合のみ）
- カスタムフックは`use`で始まる名前にし、戻り値の型を明示してロジックの再利用を促進
- イベントハンドラーの型は`React.MouseEvent`、`React.ChangeEvent`などを使用

## 良い例・悪い例

### ✅ 良い例（Bulletproof React準拠）

#### 共有UIコンポーネント (`src/components/ui/Button/index.tsx`)

```tsx
import styled from 'styled-components'

type ButtonProps = {
  /** ボタンバリエーション */
  variant?: 'primary' | 'secondary' | 'outline'
  /** サイズ */
  size?: 'sm' | 'md' | 'lg'
  /** 非活性 */
  disabled?: boolean
  /** アイコン要素 */
  icon?: React.ReactNode
  /** ボタン内容 */
  children?: React.ReactNode
  /** クリックイベント */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'size'>>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: inherit;
  border-radius: 0.375rem;
  transition: all 0.2s;
  cursor: pointer;

  /* サイズ */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return 'padding: 0.5rem 1rem; font-size: 0.875rem;'
      case 'lg':
        return 'padding: 0.75rem 1.5rem; font-size: 1.125rem;'
      default:
        return 'padding: 0.625rem 1.25rem; font-size: 1rem;'
    }
  }}

  /* バリエーション */
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          border: none;
        `
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
        `
      default:
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: none;
        `
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

/**
 * 共有ボタンコンポーネント
 */
export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  disabled = false, 
  icon, 
  children, 
  onClick 
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    onClick?.(e)
  }

  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      disabled={disabled} 
      onClick={handleClick}
    >
      {icon && <span>{icon}</span>}
      {children && <span>{children}</span>}
    </StyledButton>
  )
}
```

#### TanStack Queryを使用したカスタムフック (`src/features/auth/hooks/useLogin.ts`)

```tsx
import { useMutation } from '@tanstack/react-query'
import { authApi } from '../api/auth'
import type { AuthCredentials } from '../types'

type UseLoginOptions = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const useLogin = ({ onSuccess, onError }: UseLoginOptions = {}) => {
  return useMutation({
    mutationFn: (credentials: AuthCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      // トークンを保存
      localStorage.setItem('token', data.token)
      onSuccess?.()
    },
    onError: (error: Error) => {
      console.error('Login failed:', error)
      onError?.(error)
    },
  })
}
```

#### Zustandストア (`src/stores/authStore.ts`)

```tsx
import { create } from 'zustand'
import type { User } from '@/types'

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, isAuthenticated: false })
  },
}))
```

#### Featureの公開API (`src/features/auth/index.ts`)

```tsx
// 公開するコンポーネント
export { LoginForm } from './components/LoginForm'
export { RegisterForm } from './components/RegisterForm'

// 公開するフック
export { useAuth } from './hooks/useAuth'
export { useLogin } from './hooks/useLogin'

// 公開する型
export type { User, AuthCredentials } from './types'

// 公開するAPI
export { authApi } from './api/auth'
```

#### Feature内のコンポーネント (`src/features/auth/components/LoginForm/index.tsx`)

```tsx
import { useLogin } from '@/features/auth'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { mutate: login, isPending } = useLogin({ onSuccess })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    login({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="email" type="email" label="メールアドレス" required />
      <Input name="password" type="password" label="パスワード" required />
      <Button type="submit" disabled={isPending}>
        {isPending ? 'ログイン中...' : 'ログイン'}
      </Button>
    </form>
  )
}
```

### ❌ 悪い例

#### React.FCの使用（非推奨）

```tsx
import styled from 'styled-components'

// React.FCは使用しない
const Button: React.FC<{
  primary?: boolean
  disabled?: boolean
  icon?: any // any型は使用禁止
  children?: any
  onClick?: Function // Function型は使用しない
}> = ({ primary, disabled, icon, children, onClick }) => {
  // styled-componentsを使わずインラインスタイル（非推奨）
  const buttonStyle = {
    backgroundColor: primary ? 'blue' : 'gray',
    opacity: disabled ? 0.5 : 1,
  }

  return (
    <button style={buttonStyle} disabled={disabled} onClick={onClick as any}>
      {icon}
      {children}
    </button>
  )
}

export default Button
```

#### CSS Modulesの使用（推奨されない）

```tsx
// ❌ 悪い例: styled-componentsを使用せずCSS Modulesを使用
import styles from './Button.module.css'

const Button = ({ variant, children }) => {
  return <button className={styles.button}>{children}</button>
}
```

#### Feature構造の違反

```tsx
// ❌ 悪い例: feature外部からfeature内部の詳細にアクセス
import { LoginForm } from '@/features/auth/components/LoginForm'
import { loginUser } from '@/features/auth/api/login' // 内部実装に直接アクセス

// ✅ 良い例: featureの公開APIを使用
import { LoginForm, useLogin } from '@/features/auth'
```

#### Zustandストアの悪い使い方

```tsx
// ❌ 悪い例: 型定義がない、mutationが複雑すぎる
import { create } from 'zustand'

export const useStore = create((set: any) => ({
  data: null,
  setData: (newData: any) => set({ data: newData }), // any型は使用禁止
  complexUpdate: (id: string, updates: any) => 
    set((state: any) => ({
      data: state.data.map((item: any) => 
        item.id === id ? { ...item, ...updates } : item
      ),
    })),
}))
```

#### styled-componentsの悪い使い方

```tsx
// ❌ 悪い例: スタイルコンポーネント名にプレフィックスがない、テーマを使わない
const Container = styled.div`
  background-color: #ffffff; // ハードコードされた色
  padding: 16px; // テーマを使わない
`

const Button = styled.button`
  color: ${(props: any) => props.color}; // any型は使用禁止
  font-size: ${(props) => props.size || '16px'}; // デフォルト値が不明確
`
```
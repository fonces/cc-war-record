import { create } from 'zustand'
import type { History, CreateHistoryInput, UpdateHistoryInput } from '@/types'
import { generateUUID, getCurrentISOString } from '@/utils/uuid'
import { getFromLocalStorage, saveToLocalStorage } from '@/utils/localStorage'

// localStorageのキー
const STORAGE_KEY = 'cc-war-record-histories'

/**
 * 履歴ストアの状態型
 */
type HistoryState = {
  /** 履歴一覧 */
  histories: History[]
  /** ローディング状態 */
  isLoading: boolean
  /** エラーメッセージ */
  error: string | null
}

/**
 * 履歴ストアのアクション型
 */
type HistoryActions = {
  /** 履歴一覧をlocalStorageから読み込み */
  loadHistories: () => void
  /** 新しい履歴を作成 */
  createHistory: (input: CreateHistoryInput) => History
  /** 履歴を更新 */
  updateHistory: (uuid: string, input: UpdateHistoryInput) => boolean
  /** 履歴を削除 */
  deleteHistory: (uuid: string) => boolean
  /** UUIDで履歴を取得 */
  getHistoryByUuid: (uuid: string) => History | undefined
  /** 履歴一覧を日付順（新しい順）でソート */
  getSortedHistories: () => History[]
  /** エラーをクリア */
  clearError: () => void
}

/**
 * 履歴管理用のZustandストア
 */
export const useHistoryStore = create<HistoryState & HistoryActions>((set, get) => ({
  // 初期状態
  histories: [],
  isLoading: false,
  error: null,

  // 履歴一覧をlocalStorageから読み込み
  loadHistories: () => {
    set({ isLoading: true, error: null })
    
    try {
      const histories = getFromLocalStorage<History[]>(STORAGE_KEY, [])
      set({ histories, isLoading: false })
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : '履歴の読み込みに失敗しました' 
      })
    }
  },

  // 新しい履歴を作成
  createHistory: (input: CreateHistoryInput) => {
    const { histories } = get()
    
    // 重複チェック（シーズン名）
    const existingHistory = histories.find(h => h.seasonName === input.seasonName)
    if (existingHistory) {
      set({ error: `シーズン「${input.seasonName}」は既に存在します` })
      throw new Error(`シーズン「${input.seasonName}」は既に存在します`)
    }

    const now = getCurrentISOString()
    const newHistory: History = {
      uuid: generateUUID(),
      seasonName: input.seasonName,
      createdAt: now,
      updatedAt: now,
    }

    const updatedHistories = [...histories, newHistory]
    
    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories)
    
    set({ 
      histories: updatedHistories,
      error: null 
    })

    return newHistory
  },

  // 履歴を更新
  updateHistory: (uuid: string, input: UpdateHistoryInput) => {
    const { histories } = get()
    
    const historyIndex = histories.findIndex(h => h.uuid === uuid)
    if (historyIndex === -1) {
      set({ error: '指定された履歴が見つかりません' })
      return false
    }

    // シーズン名の重複チェック（更新対象以外）
    if (input.seasonName) {
      const existingHistory = histories.find(h => 
        h.uuid !== uuid && h.seasonName === input.seasonName
      )
      if (existingHistory) {
        set({ error: `シーズン「${input.seasonName}」は既に存在します` })
        return false
      }
    }

    const updatedHistory: History = {
      ...histories[historyIndex],
      ...input,
      updatedAt: getCurrentISOString(),
    }

    const updatedHistories = [...histories]
    updatedHistories[historyIndex] = updatedHistory

    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories)
    
    set({ 
      histories: updatedHistories,
      error: null 
    })

    return true
  },

  // 履歴を削除
  deleteHistory: (uuid: string) => {
    const { histories } = get()
    
    const historyIndex = histories.findIndex(h => h.uuid === uuid)
    if (historyIndex === -1) {
      set({ error: '指定された履歴が見つかりません' })
      return false
    }

    const updatedHistories = histories.filter(h => h.uuid !== uuid)
    
    // localStorageに保存
    saveToLocalStorage(STORAGE_KEY, updatedHistories)
    
    set({ 
      histories: updatedHistories,
      error: null 
    })

    return true
  },

  // UUIDで履歴を取得
  getHistoryByUuid: (uuid: string) => {
    const { histories } = get()
    return histories.find(h => h.uuid === uuid)
  },

  // 履歴一覧を日付順（新しい順）でソート
  getSortedHistories: () => {
    const { histories } = get()
    return [...histories].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  },

  // エラーをクリア
  clearError: () => {
    set({ error: null })
  },
}))

// 初期化：コンポーネントマウント時に履歴を読み込む
if (typeof window !== 'undefined') {
  useHistoryStore.getState().loadHistories()
}
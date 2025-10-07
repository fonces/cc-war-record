import { create } from 'zustand'
import type { 
  Character, 
  MatchRecord, 
  CharacterStats, 
  CreateCharacterInput, 
  CreateMatchRecordInput 
} from '@/types'
import { generateUUID, getCurrentISOString } from '@/utils/uuid'
import { getFromLocalStorage, saveToLocalStorage } from '@/utils/localStorage'

// localStorageのキー
const CHARACTERS_STORAGE_KEY = 'cc-war-record-characters'
const MATCH_RECORDS_STORAGE_KEY = 'cc-war-record-match-records'

/**
 * キャラクター・戦績ストアの状態型
 */
type CharacterState = {
  /** キャラクター一覧 */
  characters: Character[]
  /** 戦績記録一覧 */
  matchRecords: MatchRecord[]
  /** ローディング状態 */
  isLoading: boolean
  /** エラーメッセージ */
  error: string | null
}

/**
 * キャラクター・戦績ストアのアクション型
 */
type CharacterActions = {
  /** データをlocalStorageから読み込み */
  loadData: () => void
  /** 新しいキャラクターを作成 */
  createCharacter: (input: CreateCharacterInput) => Character
  /** キャラクターを更新 */
  updateCharacter: (uuid: string, name: string) => boolean
  /** キャラクターを削除 */
  deleteCharacter: (uuid: string) => boolean
  /** 新しい戦績記録を作成 */
  createMatchRecord: (input: CreateMatchRecordInput) => MatchRecord
  /** 戦績記録を削除 */
  deleteMatchRecord: (uuid: string) => boolean
  /** 特定のシーズンのキャラクター戦績サマリーを取得 */
  getCharacterStatsForSeason: (seasonUuid: string) => CharacterStats[]
  /** 特定のキャラクターの戦績記録を取得 */
  getMatchRecordsForCharacter: (characterUuid: string, seasonUuid?: string) => MatchRecord[]
  /** エラーをクリア */
  clearError: () => void
}

/**
 * キャラクター・戦績管理用のZustandストア
 */
export const useCharacterStore = create<CharacterState & CharacterActions>((set, get) => ({
  // 初期状態
  characters: [],
  matchRecords: [],
  isLoading: false,
  error: null,

  // データをlocalStorageから読み込み
  loadData: () => {
    set({ isLoading: true, error: null })
    
    try {
      const characters = getFromLocalStorage<Character[]>(CHARACTERS_STORAGE_KEY, [])
      const matchRecords = getFromLocalStorage<MatchRecord[]>(MATCH_RECORDS_STORAGE_KEY, [])
      set({ characters, matchRecords, isLoading: false })
    } catch (error) {
      set({ 
        isLoading: false, 
        error: error instanceof Error ? error.message : 'データの読み込みに失敗しました' 
      })
    }
  },

  // 新しいキャラクターを作成
  createCharacter: (input: CreateCharacterInput) => {
    const { characters } = get()
    
    // 重複チェック（キャラクター名）
    const existingCharacter = characters.find(c => c.name === input.name)
    if (existingCharacter) {
      set({ error: `キャラクター「${input.name}」は既に存在します` })
      throw new Error(`キャラクター「${input.name}」は既に存在します`)
    }

    const now = getCurrentISOString()
    const newCharacter: Character = {
      uuid: generateUUID(),
      name: input.name,
      createdAt: now,
      updatedAt: now,
    }

    const updatedCharacters = [...characters, newCharacter]
    
    // localStorageに保存
    saveToLocalStorage(CHARACTERS_STORAGE_KEY, updatedCharacters)
    
    set({ 
      characters: updatedCharacters,
      error: null 
    })

    return newCharacter
  },

  // キャラクターを更新
  updateCharacter: (uuid: string, name: string) => {
    const { characters } = get()
    
    const targetCharacter = characters.find(c => c.uuid === uuid)
    if (!targetCharacter) {
      set({ error: 'キャラクターが見つかりません' })
      return false
    }

    // 重複チェック（同じ名前の他のキャラクターが存在するか）
    const existingCharacter = characters.find(c => c.name === name.trim() && c.uuid !== uuid)
    if (existingCharacter) {
      set({ error: `キャラクター「${name.trim()}」は既に存在します` })
      return false
    }

    const now = getCurrentISOString()
    const updatedCharacters = characters.map(character =>
      character.uuid === uuid
        ? { ...character, name: name.trim(), updatedAt: now }
        : character
    )
    
    // localStorageに保存
    saveToLocalStorage(CHARACTERS_STORAGE_KEY, updatedCharacters)
    
    set({ 
      characters: updatedCharacters,
      error: null 
    })

    return true
  },

  // キャラクターを削除
  deleteCharacter: (uuid: string) => {
    const { characters, matchRecords } = get()
    
    const targetCharacter = characters.find(c => c.uuid === uuid)
    if (!targetCharacter) {
      set({ error: 'キャラクターが見つかりません' })
      return false
    }

    // 関連する戦績記録も削除
    const updatedCharacters = characters.filter(c => c.uuid !== uuid)
    const updatedMatchRecords = matchRecords.filter(m => m.characterUuid !== uuid)
    
    // localStorageに保存
    saveToLocalStorage(CHARACTERS_STORAGE_KEY, updatedCharacters)
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, updatedMatchRecords)
    
    set({ 
      characters: updatedCharacters,
      matchRecords: updatedMatchRecords,
      error: null 
    })

    return true
  },

  // 新しい戦績記録を作成
  createMatchRecord: (input: CreateMatchRecordInput) => {
    const { matchRecords } = get()
    
    const now = getCurrentISOString()
    const newMatchRecord: MatchRecord = {
      uuid: generateUUID(),
      characterUuid: input.characterUuid,
      seasonUuid: input.seasonUuid,
      job: input.job,
      map: input.map,
      isWin: input.isWin,
      memo: input.memo,
      recordedAt: now,
      createdAt: now,
      updatedAt: now,
    }

    const updatedMatchRecords = [...matchRecords, newMatchRecord]
    
    // localStorageに保存
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, updatedMatchRecords)
    
    set({ 
      matchRecords: updatedMatchRecords,
      error: null 
    })

    return newMatchRecord
  },

  // 戦績記録を削除
  deleteMatchRecord: (uuid: string) => {
    const { matchRecords } = get()
    
    const targetRecord = matchRecords.find(m => m.uuid === uuid)
    if (!targetRecord) {
      set({ error: '戦績記録が見つかりません' })
      return false
    }

    const updatedMatchRecords = matchRecords.filter(m => m.uuid !== uuid)
    
    // localStorageに保存
    saveToLocalStorage(MATCH_RECORDS_STORAGE_KEY, updatedMatchRecords)
    
    set({ 
      matchRecords: updatedMatchRecords,
      error: null 
    })

    return true
  },

  // 特定のシーズンのキャラクター戦績サマリーを取得
  getCharacterStatsForSeason: (seasonUuid: string): CharacterStats[] => {
    const { characters, matchRecords } = get()
    
    return characters.map(character => {
      const characterMatches = matchRecords.filter(
        record => record.characterUuid === character.uuid && record.seasonUuid === seasonUuid
      )
      
      const wins = characterMatches.filter(match => match.isWin).length
      const losses = characterMatches.filter(match => !match.isWin).length
      const totalMatches = characterMatches.length
      const winRate = totalMatches > 0 ? Math.round((wins / totalMatches) * 100) : 0
      
      // 最近の戦績（最新5件）
      const recentMatches = [...characterMatches]
        .sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime())
        .slice(0, 5)

      return {
        character,
        totalMatches,
        wins,
        losses,
        winRate,
        recentMatches,
      }
    }).sort((a, b) => new Date(b.character.createdAt).getTime() - new Date(a.character.createdAt).getTime())
  },

  // 特定のキャラクターの戦績記録を取得
  getMatchRecordsForCharacter: (characterUuid: string, seasonUuid?: string): MatchRecord[] => {
    const { matchRecords } = get()
    
    return matchRecords
      .filter(record => {
        if (record.characterUuid !== characterUuid) return false
        if (seasonUuid && record.seasonUuid !== seasonUuid) return false
        return true
      })
      .sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime())
  },

  // エラーをクリア
  clearError: () => {
    set({ error: null })
  },
}))

// 初期化：コンポーネントマウント時にデータを読み込む
if (typeof window !== 'undefined') {
  useCharacterStore.getState().loadData()
}
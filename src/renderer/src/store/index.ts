import { create } from 'zustand'

const defaultUrl = 'https://github.com/jysa65'

export interface Store {
  // state
  inputURLValue: string

  // actions
  setInputURLValue: (value: string) => void
}

export default create<Store>((set) => ({
  // state
  inputURLValue: defaultUrl,

  // actions
  setInputURLValue(value: string): void {
    return set({ inputURLValue: value })
  }
}))

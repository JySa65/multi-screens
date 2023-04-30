import { create } from 'zustand'

const defaultURL = 'https://www.google.com'

type Func<T> = (value: T) => void

export interface Store {
  // state
  inputURLValue: string
  addressUrl: string
  defaultURL: string
  idWebviews: Set<string>

  // actions
  setInputURLValue: Func<string>
  setAddressURL: Func<string>
  addIdWebviews: Func<string>
}

export default create<Store>((set, get) => ({
  // state
  defaultURL,
  inputURLValue: defaultURL,
  addressUrl: defaultURL,
  idWebviews: new Set(),

  // actions
  setInputURLValue(value: string): void {
    return set({ inputURLValue: value })
  },
  setAddressURL(value: string): void {
    return set({ addressUrl: value })
  },
  addIdWebviews(id: string): void {
    const idWebviews = get().idWebviews
    idWebviews.add(id)
    return set({ idWebviews })
  }
}))

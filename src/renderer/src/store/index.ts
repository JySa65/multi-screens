import { create } from 'zustand'

const defaultURL = 'https://www.bing.com/'

type Func<T> = (value: T) => void

export interface Store {
  // state
  inputURLValue: string
  addressUrl: string
  defaultURL: string
  zoomFactorValues: number[]
  zoomFactor: number
  isRotated: boolean

  // actions
  setInputURLValue: Func<string>
  setAddressURL: Func<string>
  setChangeZoomFactor: Func<number>
  setRotate: () => void
}

export default create<Store>((set) => ({
  // state
  defaultURL,
  inputURLValue: defaultURL,
  addressUrl: defaultURL,
  zoomFactorValues: [0.25, 0.5, 0.65, 0.75, 0.8, 0.9, 1],
  zoomFactor: 0.8,
  isRotated: false,

  // actions
  setInputURLValue(value: string): void {
    return set({ inputURLValue: value })
  },
  setAddressURL: (value: string): void => set({ addressUrl: value }),
  setChangeZoomFactor: (value: number): void => set({ zoomFactor: value }),
  setRotate: (): void => set((state) => ({ isRotated: !state.isRotated }))
}))

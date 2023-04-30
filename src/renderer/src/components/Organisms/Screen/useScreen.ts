import { RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import PubSub from 'pubsub-js'

import useBoundStore from '@Store/index'
import { GO_BACK, GO_FORWARD, HOME, INPUT_SEARCH_VALUE } from '@Utils/pubsub'

interface IUseScreen {
  webviewRef: RefObject<Electron.WebviewTag>
  addressUrl: string
  defaultURL: string
}

export default function useScreen(isMain: boolean): IUseScreen {
  const webviewRef = useRef<Electron.WebviewTag>(null)
  const defaultURL = useBoundStore((state) => state.defaultURL)
  const addressUrl = useBoundStore((state) => state.addressUrl)
  const setAddressURL = useBoundStore((state) => state.setAddressURL)
  const setInputURLValue = useBoundStore((state) => state.setInputURLValue)
  const addIdWebviews = useBoundStore((state) => state.addIdWebviews)
  const idWebviews = useBoundStore((state) => state.idWebviews)

  useLayoutEffect(() => {
    console.log(idWebviews)

    if (webviewRef.current) {
      addIdWebviews(webviewRef.current?.id)
      webviewRef.current?.addEventListener('did-navigate', (e: Electron.DidNavigateEvent) => {
        if (isMain) {
          setInputURLValue(e.url)
        }
        setAddressURL(e.url)
      })
      webviewRef.current?.addEventListener('did-fail-load', (e: Electron.DidFailLoadEvent) => {
        console.log(e)
      })
    }
  }, [webviewRef])

  useEffect(() => {
    if (webviewRef.current) {
      PubSub.subscribe(INPUT_SEARCH_VALUE, (_, url: string) => {
        webviewRef.current?.loadURL(url)
      })
      PubSub.subscribe(HOME, () => {
        setAddressURL(defaultURL)
        webviewRef.current?.loadURL(defaultURL)
      })
      PubSub.subscribe(GO_BACK, () => {
        webviewRef.current?.goBack()
      })
      PubSub.subscribe(GO_FORWARD, () => {
        webviewRef.current?.goForward()
      })
    }
  }, [webviewRef])

  return {
    webviewRef: webviewRef,
    addressUrl,
    defaultURL
  }
}

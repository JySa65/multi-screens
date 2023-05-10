import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'
import PubSub from 'pubsub-js'

import useBoundStore from '@Store/index'
import { NavigationOptions } from '@Utils/pubsub'

interface IUseScreen {
  webviewRef: RefObject<Electron.WebviewTag>
  addressUrl: string
  loading: boolean
}

export default function useScreen(isMain: boolean): IUseScreen {
  const webviewRef = useRef<Electron.WebviewTag>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const [loading, setLoading] = useState(false)

  const defaultURL = useBoundStore((state) => state.defaultURL)
  const addressUrl = useBoundStore((state) => state.addressUrl)
  const setAddressURL = useBoundStore((state) => state.setAddressURL)
  const setInputURLValue = useBoundStore((state) => state.setInputURLValue)

  const didNavigateInPageEvent = (e: Electron.DidNavigateInPageEvent): void => {
    if (e.url.includes('#')) {
      return
    }

    if (e.url === addressUrl) {
      return
    }

    if (isNavigating) {
      return
    }

    setIsNavigating(true)
    if (isMain) {
      setInputURLValue(e.url)
    }
    setAddressURL(e.url)
  }
  const willNavigate = (e: Electron.WillNavigateEvent): void => {
    if (isNavigating) {
      return
    }
    if (isMain) {
      setInputURLValue(e.url)
    }
    setAddressURL(e.url)
  }

  const didStartLoading = (): void => {
    setLoading(true)
  }

  const didStopLoading = (): void => {
    setLoading(false)
    setIsNavigating(false)
  }

  useLayoutEffect(() => {
    if (webviewRef.current) {
      webviewRef.current?.addEventListener('did-start-loading', didStartLoading)
      webviewRef.current?.addEventListener('did-stop-loading', didStopLoading)
      webviewRef.current?.addEventListener('will-navigate', willNavigate)
      webviewRef.current?.addEventListener('did-navigate-in-page', didNavigateInPageEvent)
    }
    return () => {
      if (webviewRef.current) {
        webviewRef.current?.removeEventListener('did-start-loading', didStartLoading)
        webviewRef.current?.removeEventListener('did-stop-loading', didStopLoading)
        webviewRef.current?.removeEventListener('will-navigate', willNavigate)
        webviewRef.current?.removeEventListener('did-navigate-in-page', didNavigateInPageEvent)
      }
    }
  }, [webviewRef, isNavigating])

  useEffect(() => {
    if (webviewRef.current) {
      PubSub.subscribe(NavigationOptions.HOME, () => {
        if (isMain) {
          webviewRef.current?.clearHistory()
          setAddressURL(defaultURL)
          setInputURLValue(defaultURL)
        }
      })
      PubSub.subscribe(NavigationOptions.GO_BACK, () => {
        webviewRef.current?.goBack()
      })
      PubSub.subscribe(NavigationOptions.GO_FORWARD, () => {
        webviewRef.current?.goForward()
      })
    }
    return () => {
      if (webviewRef.current) {
        PubSub.unsubscribe(NavigationOptions.HOME)
        PubSub.unsubscribe(NavigationOptions.GO_BACK)
        PubSub.unsubscribe(NavigationOptions.GO_FORWARD)
      }
    }
  }, [webviewRef])

  return {
    webviewRef,
    addressUrl,
    loading
  }
}

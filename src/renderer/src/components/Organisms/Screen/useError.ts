import { useLayoutEffect, useState } from 'react'

interface IUseError {
  errorCode: number
  errorDescription: string
  validatedURL: string
  showError: boolean
  setShowError: (show: boolean) => void
}

export default function useError(webview: Electron.WebviewTag): IUseError {
  const [errorCode, setErrorCode] = useState(0)
  const [errorDescription, setErrorDescription] = useState('')
  const [validatedURL, setValidatedURL] = useState('')
  const [showError, setShowError] = useState(false)

  const didFailLoad = (e: Electron.DidFailLoadEvent): void => {
    setErrorCode(e.errorCode)
    setErrorDescription(e.errorDescription)
    setValidatedURL(e.validatedURL)

    if (e.errorCode !== -3) {
      setShowError(true)
    }
  }

  useLayoutEffect(() => {
    if (webview) {
      webview.addEventListener('did-fail-load', didFailLoad)
    }
    return () => {
      if (webview) {
        webview.removeEventListener('did-fail-load', didFailLoad)
      }
    }
  }, [webview])

  return {
    errorCode,
    errorDescription,
    validatedURL,
    showError,
    setShowError
  }
}

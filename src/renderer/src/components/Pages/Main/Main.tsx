// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type * as _ from 'electron'
import { useEffect, useRef } from 'react'
import PubSub from 'pubsub-js'

import { MainLayout } from '@Layouts/index'
import { Webview } from '@Atoms/index'
import useBoundStore from '@renderer/store'
import { HOME } from '@Utils/pubsub'

const Main = (): JSX.Element => {
  const webviewRef = useRef<Electron.WebviewTag>(null)
  const inputURLValue = useBoundStore((state) => state.inputURLValue)
  const { setInputURLValue } = useBoundStore()

  useEffect(() => {
    if (webviewRef.current) {
      webviewRef.current?.addEventListener('did-navigate', (e: Event) => {
        setInputURLValue(webviewRef.current?.getURL() as string)
        console.log(e)
      })

      PubSub.subscribe(HOME, () => {
        setInputURLValue('https://www.google.com')
      })
    }
  }, [webviewRef])

  return (
    <MainLayout>
      <div className="mt-16 scale-75">
        {window.api.devices.get().map((device) => (
          <Webview
            url={inputURLValue}
            width={device.width}
            height={device.height}
            key={device.id}
            ref={webviewRef}
            useragent="Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36"
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Main

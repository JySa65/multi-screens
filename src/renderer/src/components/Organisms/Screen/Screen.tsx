import { useEffect } from 'react'
import { IDevice } from 'src/models/devices/devices'
import { Loader, Webview } from '@Atoms/index'
import useScreen from './useScreen'
import useError from './useError'
import useRotate from './useRotate'

interface IScreen {
  device: IDevice
  isMain: boolean
}

const Screen = ({ device, isMain }: IScreen): JSX.Element => {
  const { webviewRef, addressUrl, loading } = useScreen(isMain)
  const error = useError(webviewRef.current!)
  const [width, height] = useRotate(device)

  useEffect(() => {
    error.setShowError(false)
  }, [addressUrl])

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <h2 className="text-white text-2xl">{device.name}</h2>
        <span className="ml-3">
          <p className="text-white">
            ({width}x{height})
          </p>
        </span>
      </div>

      {error.showError && (
        <section
          style={{
            height: height,
            width: width
          }}
          className="grid place-items-center bg-multi-screen-primary rounded-3xl border-[1px] backdrop-blur-[6px]"
        >
          <div className="grid place-items-center">
            <h2 className="text-2xl text-white">{error.errorDescription}</h2>
            <h3 className="text-white">{error.errorCode}</h3>
            <h3 className="text-white">{error.validatedURL}</h3>
          </div>
        </section>
      )}

      {loading && (
        <section
          style={{
            height: height,
            width: width
          }}
          className="absolute grid place-items-center bg-black opacity-50"
        >
          <Loader />
        </section>
      )}

      <Webview
        id={device.id}
        key={device.id}
        url={addressUrl}
        width={width}
        height={height}
        ref={webviewRef}
        className="transition-all duration-300 ease-in-out"
        partition={`persist:${device.id}`}
        useragent="Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36"
      />
    </div>
  )
}

export default Screen

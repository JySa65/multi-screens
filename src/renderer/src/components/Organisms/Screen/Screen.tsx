import { IDevice } from 'src/models/devices/devices'
import { Webview } from '@Atoms/index'
import useScreen from './useScreen'

interface IScreen {
  device: IDevice
  isMain: boolean
}

const Screen = ({ device, isMain }: IScreen): JSX.Element => {
  const { webviewRef, addressUrl } = useScreen(isMain)

  console.log(webviewRef)

  return (
    <div>
      <Webview
        id={device.id}
        url={addressUrl}
        width={device.width}
        height={device.height}
        key={device.id}
        ref={webviewRef}
        useragent="Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36"
      />
    </div>
  )
}

export default Screen

import { Screen } from '@Organisms/index'
import { MainLayout } from '@Layouts/index'
import useBoundStore from '@renderer/store'
import { useLayoutEffect, useState } from 'react'
import type { IDevice } from 'src/main/models/devices/devices'

const Main = (): JSX.Element => {
  const zoomFactor = useBoundStore((state) => state.zoomFactor)
  const [devices, setDevices] = useState<IDevice[]>([])

  useLayoutEffect(() => {
    window.electron.ipcRenderer.invoke('get-devices').then((devices) => {
      setDevices(devices)
    })
  }, [])

  return (
    <MainLayout>
      <div
        className="mx-5 mt-20 origin-top-left flex gap-x-5 duration-300 ease-in transition-all"
        style={{
          transform: `scale(${zoomFactor})`
        }}
      >
        {devices.map((device, index) => (
          <Screen key={device.name} device={device} isMain={index === 0} />
        ))}
      </div>
    </MainLayout>
  )
}

export default Main

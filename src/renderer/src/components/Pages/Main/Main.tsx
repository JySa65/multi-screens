import { Screen } from '@Organisms/index'
import { MainLayout } from '@Layouts/index'
import useBoundStore from '@renderer/store'

const Main = (): JSX.Element => {
  const zoomFactor = useBoundStore((state) => state.zoomFactor)

  return (
    <MainLayout>
      <div
        className="mx-5 mt-20 origin-top-left flex gap-x-5 duration-500 ease-in transition-all"
        style={{
          transform: `scale(${zoomFactor})`
        }}
      >
        {window.api.devices.get().map((device, index) => (
          <Screen key={device.name} device={device} isMain={index === 0} />
        ))}
      </div>
    </MainLayout>
  )
}

export default Main

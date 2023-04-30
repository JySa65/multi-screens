import { Screen } from '@Organisms/index'
import { MainLayout } from '@Layouts/index'

const Main = (): JSX.Element => {
  return (
    <MainLayout>
      <div className="mx-5 mt-20 scale-[0.8] origin-top-left flex gap-x-5 duration-500 ease-in transition-all">
        {window.api.devices.get().map((device, index) => (
          <Screen key={device.name} device={device} isMain={index === 0} />
        ))}
      </div>
    </MainLayout>
  )
}

export default Main

import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'

import type { IDevice } from 'src/models/devices/devices'
import Webview from './components/Webview/Webview'
import { InputSearch } from './components'

function App(): JSX.Element {
  const [q, setQ] = useState('https://github.com/jysa65')
  const [search, setSearch] = useState('')
  const [devices, setDevices] = useState<IDevice[]>([])

  const getData = (): void => {
    setDevices(window.api.getDevices())
    window.electron.webFrame.setZoomFactor(1)
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQ(event.target.value)
  }

  const handleOnSubmit = (event: SyntheticEvent): void => {
    event.preventDefault()
    try {
      new URL(q)
      setSearch(q)
    } catch (error) {
      alert('Ingresa una url validad')
      console.log(error)
    }
  }

  const handleCleanInput = (): void => {
    setQ('')
    setSearch('')
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <header className="w-full p-10 py-5">
        <nav className="grid grid-cols-1 gap-x-6 ">
          <InputSearch
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            handleCleanInput={handleCleanInput}
            value={q}
          />

          <div>
            wd
            {/* TbDeviceMobile */}
          </div>
        </nav>
      </header>

      <main className="px-10 py-10">
        {search && (
          <div
            className="flex justify-between gap-x-5 duration-500 ease-in transition-all"
            style={{
              // width: device.width, height: device.height,
              transform: 'scale(0.75)',
              transformOrigin: 'top left'
              // transition: '0.5s all'
            }}
          >
            {devices.map((device) => (
              <section key={device.id} className="flex flex-col items-center">
                <h1 className="flex gap-x-2 items-center">
                  <span className="text-white font-bold uppercase text-xl">{device.name}</span>
                  <span className="text-gray-500 text-base">
                    {device.width}x{device.height}
                  </span>
                </h1>
                <Webview url={search} width={device.width} height={device.height} />
              </section>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default App

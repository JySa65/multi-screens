import { ChangeEvent, SyntheticEvent, useState } from 'react'
import PubSub from 'pubsub-js'
import { Button, IconButton, Icons, Input } from '@Atoms/index'

import useBoundStore from '@renderer/store'
import { NavigationOptions } from '@Utils/pubsub'
import { defaultURL } from '@Store/index'
import regExp from '@Utils/regExp'

const placeholder = 'https://github.com/jysa65'

const Header = (): JSX.Element => {
  const inputURLValue = useBoundStore((state) => state.inputURLValue)
  const zoomFactorValues = useBoundStore((state) => state.zoomFactorValues)
  const zoomFactor = useBoundStore((state) => state.zoomFactor)

  const { setInputURLValue, setAddressURL, setChangeZoomFactor, setRotate } =
    useBoundStore.getState()
  const [showElement, setShowElement] = useState(false)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputURLValue(e.target.value)
  }

  const handleOnSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    let url = inputURLValue
    if (url === '') {
      return
    }

    if (regExp.addressUrl(url)) {
      if (!url.includes('http')) {
        url = `https://${url}`
      }
    } else if (regExp.localAddressUrl(url)) {
      if (!url.includes('http')) {
        url = `http://${url}`
      }
    } else {
      url = `${defaultURL}search?q=${url}`
    }

    setInputURLValue(url)
    setAddressURL(url)
  }

  const handleClear = (): void => {
    setInputURLValue('')
  }

  const zoomIn = (): void => {
    const index = zoomFactorValues.findIndex((value) => value === zoomFactor)
    if (zoomFactorValues.length - 1 > index) {
      setChangeZoomFactor(zoomFactorValues[index + 1])
    }
  }

  const zoomOut = (): void => {
    const index = zoomFactorValues.findIndex((value) => value === zoomFactor)
    if (index >= 1) {
      setChangeZoomFactor(zoomFactorValues[index - 1])
    }
  }

  return (
    <nav
      className={
        'top-0 z-10 bg-multi-screen-primary shadow fixed w-full px-7 py-2 flex justify-between items-center'
      }
      role="navigation"
    >
      <IconButton
        icon={<Icons.ArrowBack size={15} />}
        onClick={(): void => {
          PubSub.publish(NavigationOptions.GO_BACK)
        }}
      />
      <IconButton
        className="ml-5"
        icon={<Icons.ArrowUp size={15} />}
        onClick={(): void => {
          PubSub.publish(NavigationOptions.GO_FORWARD)
        }}
      />
      <IconButton
        className="mx-5"
        icon={<Icons.Home size={17} />}
        onClick={(): void => {
          PubSub.publish(NavigationOptions.HOME)
        }}
      />

      <form className="flex flex-1 items-center relative" onSubmit={handleOnSubmit}>
        <IconButton
          icon={<Icons.BrowsingSearch size={18} className="fill-white" />}
          onClick={console.log}
          type="button"
          className="absolute inset-y-0 left-3 z-[1]"
        />

        <Input
          type="text"
          isSeach
          iconCloseClassName="right-[5.5rem]"
          className="pr-[6.7rem]"
          placeholder={placeholder}
          onChange={handleChangeInput}
          value={inputURLValue}
          onClear={handleClear}
        />
        <Button
          className="absolute inset-y-0 right-0 px-4 text-sm text-white border border-gray-500 rounded-full rounded-tl-none rounded-bl-none"
          label="Buscar"
          type="submit"
        />
      </form>
      <IconButton
        icon={<Icons.MobileRotatate size={18} className="fill-white" />}
        onClick={setRotate}
        className="mx-5"
      />
      <div className="relative grid place-items-center group/show">
        <IconButton
          icon={<Icons.ZoomIn size={18} className="fill-white" />}
          onClick={(): void => setShowElement((prev) => !prev)}
        />

        {showElement && (
          <div className="absolute flex bg-gray-700 border border-gray-500 top-6 -right-[19px] items-center p-1.5 rounded-full divide-x ">
            <IconButton
              icon={<Icons.ZoomOut size={18} className="fill-transparent" />}
              onClick={zoomOut}
              className="px-1.5"
            />
            <p className="text-white text-[0.65rem] px-2">{zoomFactor * 100}%</p>
            <IconButton
              icon={<Icons.ZoomIn size={18} className="fill-white" />}
              onClick={zoomIn}
              className="px-1.5"
            />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header

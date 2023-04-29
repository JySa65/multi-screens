import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Button, IconButton, Icons, Input } from '@Atoms/index'

import useBoundStore from '@renderer/store'
import { HOME } from '@Utils/pubsub'

const placeholder = 'https://github.com/jysa65'

const Header = (): JSX.Element => {
  const inputURLValue = useBoundStore((state) => state.inputURLValue)
  const { setInputURLValue } = useBoundStore()
  const [value, setValue] = useState(inputURLValue)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const handleOnSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    let url = value
    console.log(url.replace('/', ''))

    if (!value.includes('http')) {
      url = `https://${value}`
    }
    setInputURLValue(url)
  }

  const handleClear = (): void => {
    setValue('')
  }

  useEffect(() => {
    setValue(inputURLValue)
  }, [inputURLValue])

  return (
    <nav
      className={
        'top-0 bg-multi-screen-primary shadow fixed w-full px-7 py-2 flex justify-between items-center'
      }
      role="navigation"
    >
      <IconButton icon={<Icons.ArrowBack size={15} />} onClick={console.log} />
      <IconButton className="ml-5" icon={<Icons.ArrowUp size={15} />} onClick={console.log} />
      <IconButton
        className="mx-5"
        icon={<Icons.Home size={17} />}
        onClick={(): void => {
          PubSub.publish(HOME, true)
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
          value={value}
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
        onClick={console.log}
        className="mx-5"
      />
      <IconButton icon={<Icons.ZoomIn size={18} className="fill-white" />} onClick={console.log} />
    </nav>
  )
}

export default Header

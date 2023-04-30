import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import { Button, IconButton, Icons, Input } from '@Atoms/index'

import useBoundStore from '@renderer/store'
import { GO_BACK, GO_FORWARD, HOME, INPUT_SEARCH_VALUE } from '@Utils/pubsub'

const placeholder = 'https://github.com/jysa65'

const Header = (): JSX.Element => {
  const inputURLValue = useBoundStore((state) => state.inputURLValue)
  const { setInputURLValue, setAddressURL } = useBoundStore()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputURLValue(e.target.value)
  }

  const handleOnSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    let url = inputURLValue
    if (url === '') {
      return
    }

    if (!inputURLValue.includes('http')) {
      url = `https://${inputURLValue}`
    }
    PubSub.publish(INPUT_SEARCH_VALUE, url)
    setInputURLValue(url)
    setAddressURL(url)
  }

  const handleClear = (): void => {
    setInputURLValue('')
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
          PubSub.publish(GO_BACK)
        }}
      />
      <IconButton
        className="ml-5"
        icon={<Icons.ArrowUp size={15} />}
        onClick={(): void => {
          PubSub.publish(GO_FORWARD)
        }}
      />
      <IconButton
        className="mx-5"
        icon={<Icons.Home size={17} />}
        onClick={(): void => {
          PubSub.publish(HOME)
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
        onClick={console.log}
        className="mx-5"
      />
      <IconButton icon={<Icons.ZoomIn size={18} className="fill-white" />} onClick={console.log} />
    </nav>
  )
}

export default Header

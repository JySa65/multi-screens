import { ChangeEvent, SyntheticEvent } from 'react'

import { X, Search } from '../Atoms/Icons'

interface InputSearch {
  handleOnSubmit: (event: SyntheticEvent) => void
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleCleanInput: () => void
  value: string
}

const placeholder = 'https://github.com/jysa65'

const InputSearchElement = ({
  handleOnSubmit,
  handleOnChange,
  handleCleanInput,
  value
}: InputSearch): JSX.Element => {
  return (
    <form className="flex gap-x-2 relative items-center" onSubmit={handleOnSubmit}>
      <div className="relative w-full">
        <button className="absolute inset-y-0 left-3" type="submit">
          <Search className="fill-white" size={20} />
        </button>

        <input
          autoFocus
          onChange={handleOnChange}
          name="q"
          value={value}
          placeholder={placeholder}
          className="input-search bg-gray-700 border border-gray-500 text-base font-semibold rounded-lg w-full py-2.5 px-10  placeholder-gray-400 text-white"
        />
        <button
          id="btn-reset"
          className="x-close absolute inset-y-0 right-3"
          type="reset"
          title="Borrar"
          onClick={handleCleanInput}
        >
          <X className="fill-white" size={17} />
        </button>
      </div>
      <button
        id="btn-reset"
        className="flex items-center bg-gray-700 py-2.5 px-4 rounded-lg text-gray-50 gap-x-3 font-bold text-lg"
        type="submit"
        title="Buscar"
      >
        Buscar
      </button>
    </form>
  )
}

export default InputSearchElement

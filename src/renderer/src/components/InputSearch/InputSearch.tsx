import { ChangeEvent, SyntheticEvent } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

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
          <FiSearch className="text-gray-50" size={20} />
        </button>

        <input
          autoFocus
          onChange={handleOnChange}
          name="q"
          value={value}
          placeholder={placeholder}
          className="aaa bg-gray-700 border border-gray-500 text-base font-semibold rounded-lg w-full py-2.5 px-10  placeholder-gray-400 text-white"
        />
        <button
          id="btn-reset"
          className="hidden bbb absolute inset-y-0 right-3"
          type="reset"
          title="Borrar"
          onClick={handleCleanInput}
        >
          <FiX className="text-gray-50" size={20} />
        </button>
      </div>
      <button
        id="btn-reset"
        className="flex items-center bg-gray-700 py-2.5 px-4 rounded-lg text-gray-50 gap-x-3 font-bold"
        type="submit"
        title="Buscar"
      >
        Buscar
        <FiSearch size={20} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            // @ts-ignore wdd
            enableBackground: 'new 0 0 122.88 106.43',
            height: 20,
            width: 20,
            fill: 'red',
            color: 'red'
          }}
          viewBox="0 0 122.88 106.43"
        >
          <path
            d="M11.1 0h35.63c3.05 0 5.85 1.25 7.85 3.25 2.03 2.03 3.25 4.8 3.25 7.85v31.46h-3.19V12.18H3.15v75.26h7.61v11.61c0 1.58.27 3.1.77 4.51h-.43c-3.05 0-5.85-1.25-7.85-3.25C1.22 98.27 0 95.51 0 92.45V11.1c0-3.05 1.25-5.85 3.25-7.85C5.28 1.22 8.04 0 11.1 0zm83.85 33.45c-.37-5.8-2.64-10.56-6.06-13.97-3.64-3.63-8.59-5.74-13.94-5.93l2.46 2.95c.73.88.62 2.18-.26 2.91s-2.18.62-2.91-.26l-5.72-6.85a2.07 2.07 0 0 1 .22-2.88l6.71-5.89c.86-.75 2.16-.66 2.91.19.75.86.66 2.16-.19 2.91l-3.16 2.78c6.43.21 12.4 2.75 16.8 7.13 4.07 4.06 6.79 9.69 7.25 16.49l2.58-3.08c.73-.88 2.04-.99 2.91-.26.88.73.99 2.04.26 2.91l-5.73 6.84c-.72.86-1.99.99-2.87.29l-6.98-5.56a2.077 2.077 0 0 1-.33-2.91c.71-.89 2.01-1.04 2.91-.33l3.14 2.52zm27.93 26.25v35.63c0 3.05-1.25 5.85-3.25 7.85-2.03 2.03-4.8 3.25-7.85 3.25h-78.9c-3.05 0-5.85-1.25-7.85-3.25-2.03-2.03-3.25-4.8-3.25-7.85V59.7c0-3.05 1.25-5.85 3.25-7.85 2.03-2.03 4.79-3.25 7.85-3.25h78.9c3.05 0 5.85 1.25 7.85 3.25 2.03 2.03 3.25 4.79 3.25 7.85zM35.41 77.49c0 2.51-2.03 4.57-4.57 4.57-2.51 0-4.57-2.03-4.57-4.57 0-2.51 2.03-4.57 4.57-4.57 2.52 0 4.57 2.03 4.57 4.57zm2.47-25.74v51.49h72.82V51.75H37.88z"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd'
            }}
          />
        </svg>
      </button>
    </form>
  )
}

export default InputSearchElement

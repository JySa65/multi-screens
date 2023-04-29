import clsx from 'clsx'
import IconButton from '../IconButton'
import { Icons } from '..'

import './styles.css'

interface IInput {
  type: string
  className?: string
  iconCloseClassName?: string
  isSeach?: boolean
  onClear?: (...args: unknown[]) => void
  [key: string]: unknown
}

const Input = ({
  type,
  isSeach = false,
  className,
  onClear,
  iconCloseClassName,
  ...rest
}: IInput): JSX.Element => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={clsx(
          'bg-gray-700 border border-gray-500 text-[14px] leading-none rounded-full w-full py-[0.4rem] pl-9 pr-24  placeholder-gray-400 text-white',
          { 'input-search': isSeach, [className as string]: !!className }
        )}
        {...rest}
      />
      {isSeach && (
        <IconButton
          className={clsx('x-close absolute inset-y-0 right-0 z-[1]', {
            [iconCloseClassName as string]: !!iconCloseClassName
          })}
          icon={<Icons.X className="fill-white" size={13} />}
          onClick={(): void => {
            onClear && onClear()
          }}
          type="button"
        />
      )}
    </div>
  )
}

export default Input

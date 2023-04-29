import type { ReactNode } from 'react'

export interface IButton {
  children?: ReactNode
  label?: string
  className?: string
  onClick?: (...args: unknown[]) => void
  [key: string]: unknown
}

export default function Button({ children, label, ...rest }: IButton): JSX.Element {
  return (
    <button {...rest}>
      {label && label}
      {children && children}
    </button>
  )
}

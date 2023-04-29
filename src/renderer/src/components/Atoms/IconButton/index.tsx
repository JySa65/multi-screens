import type { ReactNode } from 'react'

import Button from '@Atoms/Button'
import type { IButton } from '@Atoms/Button'

interface IIconButton extends IButton {
  icon: ReactNode
  // iconPosition?: 'left' | 'right'
}

export default function IconButton({ icon, ...rest }: IIconButton): JSX.Element {
  return <Button {...rest}>{icon}</Button>
}

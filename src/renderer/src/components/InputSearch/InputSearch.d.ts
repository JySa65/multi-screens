import { ChangeEvent, SyntheticEvent } from 'react'

export interface InputSearch {
  handleOnSubmit: (event: SyntheticEvent) => void
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleCleanInput: () => void
  value: string
}

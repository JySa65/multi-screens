import { Header } from '@Molecules/index'
import { ReactNode } from 'react'

interface IMain {
  children: ReactNode
}

const Main = ({ children }: IMain): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Main

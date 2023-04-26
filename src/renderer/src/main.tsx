import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/inter.css'
import './assets/index.css'
import App from './App'

const RootApp = (): JSX.Element => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

const $elemnt = document.getElementById('root') as HTMLElement
const root = createRoot($elemnt)
root.render(<RootApp />)

import { useEffect } from 'react'

function App(): JSX.Element {
  useEffect(() => {
    ;(async (): Promise<void> => {
      const data = await window.api.getDevices()
      console.log(data)
    })()
  }, [])

  return (
    <div>
      <h1 className="text">sol</h1>
    </div>
  )
}

export default App

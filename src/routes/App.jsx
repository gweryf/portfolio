import { useState } from 'react'
import Header from '../components/header'
import "../styles/app.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div>Lmao</div>
    </>
  )
}

export default App

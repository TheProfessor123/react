import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    // counter++
    if(counter>-2 && counter<21){
      setCounter(counter++)
    }
  }
  const removeValue = () => {
    if(counter>-1 && counter<22){
      setCounter(counter--)
    }
  }
  return (
    <>
      <h1>The Professor</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button><br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

import { useRef, useState } from 'react'
import useToggleItems from './useToggleItems'

function App() {

  let supercars = useRef(['bugatti', 'lamborgini', 'ferrari', 'ford'])
  console.log(supercars.current)

  let [item, toggleItems] = useToggleItems(supercars.current, 2)

  return (
    <>
      <h1>Current Item :- {item}</h1>
      <button onClick={toggleItems} >Change Item</button>
    </>
  )
}

export default App

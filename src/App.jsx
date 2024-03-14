import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../Counter'
import Users from '../Users'

function App() {
  function handleClick(){
    alert('Button Clicked')
  }
  function handleClick2(){
    alert('button click3')
  }
  function asstoFive(num){
    alert(num + 5)
  }

  return (
    <>
      <h1> React core concept 2</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>asstoFive(3)}>Click3</button>
      <Counter></Counter>
      <Users></Users>
    </>
  )
}

export default App

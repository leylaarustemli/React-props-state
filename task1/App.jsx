import { useState } from 'react'
import './App.css'


function App() {
const [check,setCheck]=useState(false)
function Open(){
  setCheck(true)
}
function Close(){
  setCheck(false)
}
  return (
    <>
  <button onClick={Open}>Open model</button>
  {
    check ? (
      <div className='title'>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing <i onClick={Close} class="fa-solid fa-xmark"></i></p>
  </div>
    ):""
  }
    </>
  )
}
export default App

import { useState } from 'react'
import './App.css'


function App() {
  const [check,setCheck]=useState(false)
  const Dark={color:"gold","background-color":"black","border-color":"gold"}
  const Light={color:"black","background-color":"white","border-color":"black"}

function theme(){
  setCheck(!check)
}


return(
  <div style={check ? Dark: Light} className='mood'>
    <button style={check ? Dark: Light} onClick={theme}>White theme</button>
    <h1>WELCOME TO REACT JS</h1>
  </div>
)
}
export default App

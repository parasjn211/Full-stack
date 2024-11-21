import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App=()=>{
   const[counts, setCounts]=useState({left:0, right:0})
    const inrleft=()=>{
        setCounts({left:counts.left+1, right:counts.right})
    }
    const inrright=()=>{
        setCounts({left:counts.left, right:counts.right+1})
    }
    
    return(
        <>
        <button onClick={inrleft}>Left</button>
        <button onClick={inrright}>Right</button>
        <br />
        Left Count is {counts.left}
        <br />
        Right Count is {counts.right}
        </>
    )
}
export default App

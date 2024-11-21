import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//using spread operator ...counts
//adding array in useState
const App=()=>{
   const[counts, setCounts]=useState({left:0, right:0})
   const[allClicks, setAllClicks]=useState([]) 
   const inrleft=()=>{
        setCounts({...counts, left:counts.left+1})
        setAllClicks(allClicks.concat('L'))
    }
    
    const inrright=()=>{
        setCounts({...counts, right:counts.right+1})
        setAllClicks(allClicks.concat('R'))
    }

    
    return(
        <>
        <button onClick={inrleft}>Left</button>
        <button onClick={inrright}>Right</button>
        <br />
        Left Count is {counts.left}
        <br />
        Right Count is {counts.right}
        <br />
        {allClicks.join(',')}
        </>
    )
}
export default App

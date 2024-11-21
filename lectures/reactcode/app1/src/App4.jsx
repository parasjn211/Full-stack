import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App=()=>{
    const [count, setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <>
        <button onClick={handleClick}>Click Here</button>
        <br />
        {/* <button onClick={()=>console.log("Button2 Clicked !!!")}>Ok</button> */}
        Count is {count}
        </>
    )
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App=()=>{
    const [count, setCount]=useState(0)
    const inr=()=>{
        setCount(count + 1)
    }
    const dcr=()=>{
        setCount(count - 1)
    }
    const zero=()=>{
        setCount(0)
    }
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <>
        <button onClick={inr}>Increment</button>
        <button onClick={dcr}>Decrement</button>
        <button onClick={zero}>Zero</button>
        <br />
        Count is {count}
        </>
    )
}
export default App

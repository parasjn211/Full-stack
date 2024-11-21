import { useState,useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'


//useMomo hooke
function getFact(x) {
    console.log("Called fact function")
    let f=1
    for(let i=1; i<x; i++){
        f=f*i
    }
    return f
}

const App=()=>{
    const[fname, setFname]=useState("")
    const[n, setN]=useState(0)
    const result=useMemo(()=>getFact(n), [n])
    function handleFnameChange(e) {
        const name = e.target.value
        setFname(name)
    }
    function handleNumberChange(e) {
        const x = parseInt(e.target.value)
        setN(x)
    }
    return(
        <>
        <div>
            <input type="text" value={fname} onChange={handleFnameChange}/>
            <br />
            <input type="text" value={n} onChange={handleNumberChange}/>
            <br />
            Hello{fname}
            <br />
            You enter number{n}. The factorial is {result}
        </div>
        </>
    )
}
export default App

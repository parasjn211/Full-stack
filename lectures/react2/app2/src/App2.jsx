import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function getData() {
    console.log("Getting data from server!!!")
  const p = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  p.then((data)=> console.log(data), (error)=> console.log(error))
}
function App() {
    const [fname, setFname] = useState("")
    const ref1 = useRef(null)
    
    //get data from server using useEffect
    useEffect(()=>{
        getData()
    },[])
    function handleClick() {
        setFname(ref1.current.value)
    }
  
  return (
    <>
    <input type="text" ref={ref1} placeholder='Enter name' />
    <br />
    <input type="button" value="Click Here" onClick={handleClick} />
    </>
  )
}

export default App

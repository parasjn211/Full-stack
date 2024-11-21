import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'



const App=()=>{
    const[count, setCount]=useState("")
    let ob=useRef(0)
    function handleChange(e) {
        //setCount(count+1)
        ob.current+=1
        //ob.current=ob.current+1
        console.log(ob.current)
    }
    return(
        <>
        <div>
        <form >
        <input type="button" value="Increment" onClick={handleChange}   />
        <br />
        count is {ob.current}
        </form>        
        </div>

        </>
    )
}
export default App

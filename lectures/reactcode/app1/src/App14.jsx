import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

//Controlled form
const App=()=>{
    const[firstname, setFirstname]=useState("")
    function submitform(e){
        e.preventDefault()
        console.log("Data submitted!!")
    }
    function handleChange(e){
        let s1=e.target.value
        setFirstname(s1)
    }
   
    
    return(
        <>
        <form onSubmit={submitform}>
            <input type="text" value={firstname} name='fname' onChange={handleChange} />
            <button type='submit'>Submit</button>
            <br />
            You typed: {firstname}
        </form>
        </>
    )
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

//Controlled form
const App=()=>{
    const[selected1, setSelected1]=useState(true)
    const[selected2, setSelected2]=useState(true)
    function submitform(e){
        e.preventDefault()
        //send data to server by using axios
        console.log("Data submitted!!")
    }
    function handleChange1(e){
       setSelected1(e.target.checked)
    }
    function handleChange2(e){
        setSelected2(e.target.checked)
        
    }
    
    return(
        <>
        <form onSubmit={submitform}>
            Select option1: <input type="checkbox" name='option1' checked={selected1} onChange={handleChange1} />            
            <br />
            Select option2: <input type="checkbox" name='option2' checked={selected2} onChange={handleChange2} />            
            <br />
            {selected1?"Option1 is selected":"Option1 is not selected"}
            <br />
            {selected2?"Option2 is selected":"Option2 is not selected"}
        </form>
        </>
    )
}
export default App

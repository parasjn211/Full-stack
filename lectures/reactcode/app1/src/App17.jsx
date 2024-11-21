import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'


const App=()=>{
    const[selectedOption, setOption]=useState("English")
    function handleChange(e) {
        setOption(e.target.value)
    }
   
    return(
        <>
        <div>
        <select  value={selectedOption} onChange={handleChange}>
        <option value="Marathi">Marathi</option>    
        <option value="Hindi">Hindi</option>    
        <option value="English">English</option>    
        </select>   
        <br />
        Selected Option is : {selectedOption}
        </div>
        </>
    )
}
export default App

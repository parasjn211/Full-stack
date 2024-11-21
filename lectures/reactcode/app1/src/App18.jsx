import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'


const App=()=>{
    const[data, setData]=useState({fname:"", email:"", lang:"English"})
    function handleLangChange(e) {
        setData({...data, lang:e.target.value})
    }
    function handleNameChange(e) {
        setData({...data, fname:e.target.value})
    }
    function handleEmailChange(e) {
        setData({...data, email:e.target.value})
    }
   
    return(
        <>
        <div>
        <input type="text" name="" value={data.fname} onChange={handleNameChange} id="" />
        <br />
        <input type="email" value={data.email} onChange={handleEmailChange} name="" id="" />
        <br />
        <select  value={data.lang} onChange={handleLangChange}>
        <option value="Marathi">Marathi</option>    
        <option value="Hindi">Hindi</option>    
        <option value="English">English</option>    
        </select>   
        <br />
        Name: {data.fname}
        <br />
        Email: {data.email}
        <br />
        Language: {data.lang}
        </div>
        </>
    )
}
export default App

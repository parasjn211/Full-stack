import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

const App=()=>{
   function submitform(e){
    e.preventDefault()
    console.log("Data submitted!!")
   }
    
    return(
        <>
        <form onSubmit={submitform}>
            <input type="text" />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
export default App

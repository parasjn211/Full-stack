import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello({year, name}){
    function getAge(){
        let current_year=new Date().getFullYear()
        let age=current_year-year
        
        return age
    }
    return(
        <div>
            <h1>Hello, {name}. Your age is {getAge()}</h1>
        </div>
    )
}
const App=()=>{
    const fname="xyz"
    const year=2020
    return(
        <>
        <Hello name={fname} year={year}></Hello>
        </>
    )
}
export default App

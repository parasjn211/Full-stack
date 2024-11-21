import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello(ob) {
    return(
        <div>
            <h1>Hello, {ob.name}. Your age is {ob.age}</h1>
        </div>
    )
}
const App=()=>{
    const fname ="xyz"
    const age=20
    return(
        <>
        <Hello name="abc" age="10"></Hello>
        <Hello name={fname} age={age}></Hello>
        </>
    )
}
export default App

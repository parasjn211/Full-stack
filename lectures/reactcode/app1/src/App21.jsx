import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'



const App=()=>{
   
    const listref = useRef(null)
    const [lang, setLang]=useState([])
    function handleClick(e) {
        const arr = [...listref.current.options]
                    .filter((op)=>op.selected)
                    .map((r)=>r.value)
        console.log(arr)
        setLang(arr)
    }
    return(
        <>
        <div>
        <select multiple ref={listref} id='d1'>
            <option value="html">HTML</option>
            <option value="js">JS</option>
            <option value="css">CSS</option>
            <option value="nodejs">nodejs</option>
        </select>
        <input type="button" value="Click here" onClick={handleClick} />
        <ul>
            {lang.map((r)=>{
                return(
                    <li key={r}>
                        {r}
                    </li>
                )
            })}
        </ul>
        </div>
        </>
    )
}
export default App

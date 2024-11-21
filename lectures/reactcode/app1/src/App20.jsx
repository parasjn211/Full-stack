import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

//Uncontrolled form
const App=()=>{
    let fnameRef=useRef(null)
    let passRef=useRef(null)
    let maleRef=useRef(null)
    let femaleRef=useRef(null)
    let marathiRef=useRef(null)
    let hindiRef=useRef(null)
    function handleClick(e) {
        let n=fnameRef.current.value
        console.log(n)
        let p=passRef.current.value
        console.log(p)
        let g=''
        if(maleRef.current.checked==true){
            g='Male'
        }
        else if(femaleRef.current.checked==true){
            g="Female"
        }
        console.log(g)
        let lang=[]
        if(marathiRef.current.checked==true){
            lang.push("Marathi")
        }
        if(hindiRef.current.checked==true){
            lang.push("Hindi")
        }
        console.log(lang)
    }
    return(
        <>
        <div>
        <input type="text" ref={fnameRef} name="fname" placeholder='Enter name' />
        <br />
        <input type="password" ref={passRef} name="pass" placeholder='Enter password' />
        <br />
        <input type="radio" value="Male" ref={maleRef} name="gender" checked={true}/>Male
        <input type="radio" value="Female" ref={femaleRef} name="gender" checked={true} />Female
        <br />
        <input type="checkbox"  ref={marathiRef} value="Marathi" />Marathi
        <input type="checkbox" ref={hindiRef} value="Hindi" />Hindi
        <input type="button" value="Click here" onClick={handleClick} />
        
        </div>
        </>
    )
}
export default App

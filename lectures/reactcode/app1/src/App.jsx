import { useState,useRef, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

function myreducer(state, action) {
    if(action.type =='inr'){
        return({count:state.count + action.value})
    }
    else if(action.type =='dcr'){
        return({count:state.count - action.value})
    }
    else if(action.type =='zero'){
        return({count:0})
    }
}

const App=()=>{
    const [x, setX]=useState("")
    const[state, dispatch] = useReducer(myreducer, {count:0})
    function handleChange(e) {
        
    }
    function handleInrClick() {
        dispatch({type:"inr", value:5})
    }
    function handleDcrClick() {
        dispatch({type:"dcr", value:5})
    }
    function handleZeroClick() {
        dispatch({type:"zero"})
    }
    return(
        <>
        <div>
        <input type="text" value={x} name="" id="" onChange={}/>
        <input type="button" value="INR" onClick={handleInrClick} />
        <input type="button" value="DCR" onClick={handleDcrClick} />
        <input type="button" value="ZERO" onClick={handleZeroClick} />
        <br />
        Count is {state.count}
        </div>
        
        </>
    )
}
export default App

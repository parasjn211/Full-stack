import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

//Controlled form
const App=()=>{
    const[value, setValue]=useState("male")
    function submitform(e){
        e.preventDefault()
        //send data to server by using axios
        console.log("Data submitted!!")
    }
    // Method 1 By using two different functions
    // function handleChange1(e){
    //     setValue("male")
    // }
    // function handleChange2(e){
    //     setValue("female")
    // }
    
    // Method 2 By using single function
    function handleChange(e) {
        // Method 1 by using value 
        // if(value=="male"){
        //     setValue("female")
        // }else if(value=="female"){
        //     setValue("male")
        // }
        
        // Method 2 by using id
        if(e.target.id=="r1"){
            setValue("male")
        }else{
            setValue("female")
        }
    }
    return(
        <>
        <form onSubmit={submitform}>
         Male <input id='r1' type="radio" name="gender" checked={value=="male"} onChange={handleChange} />   
         <br />
         Female <input id='r2' type="radio" name="gender" checked={value=="female"} onChange={handleChange} />   
            
        </form>
        <br />
        Selected gender is : {value}
        </>
    )
}
export default App

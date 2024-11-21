// create a form containing
// name 
// phone
// email
// gender
// known languages
// submit
// along with it show the output in table format like 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'

//Controlled form
const App=()=>{
    function submitform(e){
        e.preventDefault()
        console.log("Data submitted!!")
    }
    const[name, setName]=useState("")
    function handleChange(e) {
        let s1=e.target.value
        setName(s1)
    }
    const[num, setNum]=useState("")
    function handleNum(e) {
        let s1=e.target.value
        setNum(s1)
    }
    const[email, setEmail]=useState("")
    function handleEmail(e) {
        let s1=e.target.value
        setEmail(s1)
    }
    const[gender, setGender]=useState("male")
    function handleGender(e) {
        // Method 1 by using value 
        // if(value=="male"){
        //     setValue("female")
        // }else if(value=="female"){
        //     setValue("male")
        // }
        
        // Method 2 by using id
        if(e.target.id=="r1"){
            setGender("male")
        }else{
            setGender("female")
        }
    }
    const[select1, setSelect1]=useState("")
    const[select2, setSelect2]=useState("")
    const[select3, setSelect3]=useState("")
    const[select4, setSelect4]=useState("")
    function handleCheckbox1(e) {
        setSelect1(e.target.checked)
    }   
    function handleCheckbox2(e) {
        setSelect2(e.target.checked)
        
    }   
    function handleCheckbox3(e) {
        setSelect3(e.target.checked)
        
    }   
    function handleCheckbox4(e) {
        setSelect4(e.target.checked)

    }   
    
    return(
        <>
        <form onSubmit={submitform}>

            Name: <input type="text" name="" id="" value={name} onChange={handleChange} />
            <br />
            Phone: <input type="text" name="" id="" value={num} onChange={handleNum} />
            <br />
            Email: <input type="email" name="" id="" value={email} onChange={handleEmail} />
            <br />
            Gender:
            Male <input id='r1' type="radio" name='gender' checked={gender=="male"} onChange={handleGender}/>
            Female <input id='r2' type="radio" name='gender' checked={gender=="female"} onChange={handleGender} />
            <br />
            Select languages you can speak :
            English <input type="checkbox" name="" id="" checked={select1} onChange={handleCheckbox1} />
            Hindi <input type="checkbox" name="" id="" checked={select2} onChange={handleCheckbox2}/>
            Marathi <input type="checkbox" name="" id="" checked={select3} onChange={handleCheckbox3}/>
            Kannada <input type="checkbox" name="" id="" checked={select4} onChange={handleCheckbox4}/>
            <br />
            <input type="submit" />
        </form>
        <br />
        <table border={1}>
            <tbody>
                <tr>
                    <td>The name written by you is : {name}</td>
                </tr>
                <tr>
                    <td>The phone number written by you is : {num}</td>
                </tr>
                <tr>
                    <td>The email written by you is : {email}</td>
                </tr>
                <tr>
                    <td>The gender selected by you is : {gender}</td>
                </tr>
                <tr>
                    <td>{select1?"English is selected":"English is not selected"} </td>
                </tr>
                <tr>
                    <td>{select2?"Hindi is selected":"Hindi is not selected"} </td>
                </tr>
                <tr>
                    <td>{select3?"Marathi is selected":"Marathi is not selected"} </td>
                </tr>
                <tr>
                    <td>{select4?"Kannada is selected":"Kannada is not selected"} </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default App

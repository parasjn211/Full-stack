import { useEffect, useState, useRef, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Header } from './Componant/Header'
import { Footer } from './Componant/Footer'
import { MyContext } from './Componant/Context'


function App() {
    const [fname, setFname] = useState("")
    const c3=useContext(MyContext)
    c3.msg = "App Message"
    const ref1 = useRef(null)
    
    function handleClick() {
        setFname(ref1.current.value)
    }
  
  return (
    <>
    <div>
    <MyContext.Provider value={c3}>
    <Header/>
    <p>
    <input type="text" ref={ref1} placeholder='Enter name' />
    <br />
    <input type="button" value="Click Here" onClick={handleClick} />
    <br />
    This is main body content
    </p>
    <Footer/>

    </MyContext.Provider>
    </div>
    </>
  )
}

export default App

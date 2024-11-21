import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function getData() {
  const p = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  p.then((data)=> console.log(data), (error)=> console.log(error))
}
function App() {
  //get data from server
  getData()
  
  return (
    <>
    abc
    </>
  )
}

export default App

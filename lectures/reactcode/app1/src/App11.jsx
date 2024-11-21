import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Show=({info})=>{
    console.log(info)
    return(
        <div>
            <ul>
               
                <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((item)=>{
                        return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            
                        </tr>
                        )
                    })}
                </tbody>
                </table>

            </ul>
        </div>
    )
}
const App=()=>{
   const students=[{id:1, name:'abc', phone:1234},
    {id:2, name:'xyz', phone:5678},
    {id:3, name:'pqr', phone:6249}
   ]
    
    return(
        <>
        <Show info={students}></Show>
        </>
    )
}
export default App

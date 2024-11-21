import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Show=({info})=>{
    console.log(info)
    return(
        <div>
            <ul>
                {/* {info.map((item)=><li key={item.id}>{item.name}</li>)} */}
                <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{info[0].id}</td>
                        <td>{info[0].name}</td>
                        <td>{info[0].phone}</td>
                    </tr>
                    <tr>
                        <td>{info[1].id}</td>
                        <td>{info[1].name}</td>
                        <td>{info[1].phone}</td>
                    </tr>
                    <tr>
                        <td>{info[2].id}</td>
                        <td>{info[2].name}</td>
                        <td>{info[2].phone}</td>
                    </tr>
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

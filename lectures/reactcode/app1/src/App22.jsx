import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Show } from './Componants/Show'



const App=()=>{
    // let i=-1
    // function getIndex() {
    //     i=i+1
    //     return i
    // }
//This function is used to start the index of the array from 1 in any general and id may start from 101   
   const [data, setdata] = useState([
    {id:1, name:"abc", phone:123, isedit:false},
    {id:2, name:"xyz", phone:456, isedit:false},
    {id:3, name:"pqr", phone:789, isedit:false}
   ])
   function handleEditClick(e) {
    //const index = parseInt(e.target.id)
    let index = e.target.id-1
    const data1=[...data]
    data1[index].isedit=true
    setdata(data1)
   }
   function handleSaveClick(e) {
    //const index = parseInt(e.target.id)
    let index = e.target.id-1
    const data1=[...data]
    data1[index].isedit=false
    setdata(data1)
   }
   function handleChange(e) {
    const index = e.target.id-1
    const data1=[...data]
    data1[index].name =e.target.value
    setdata(data1)
   }
   function handleChange2(e) {
    const index = e.target.id-1
    const data1=[...data]
    data1[index].phone =e.target.value
    setdata(data1)
   }
    return(
        <>
        <div>
        <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE</th>
            </tr>
        </thead>
        <tbody>
        {
            data.map((obj)=>{
                return(
                    <tr key={obj.id}>
                        <td>
                            {obj.id}
                        </td>
                        <td>
                            {obj.isedit?<input value={obj.name} id={obj.id} onChange={handleChange}></input>:obj.name}
                        </td>
                        <td>
                            {obj.isedit?<input value={obj.phone} id={obj.id} onChange={handleChange2}></input>:obj.phone}
                        </td>
                        <td>
                            {obj.isedit?<input id={obj.id} type='button' onClick={handleSaveClick} value="Save"></input>:<input id={obj.id} type='button' onClick={handleEditClick} value="Edit"></input>}
                        </td>
                    </tr>
                )
            })
        }
        
        </tbody>
        </table>
        </div>
        </>
    )
}
export default App

import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import axios from 'axios';
import './Create.css'

function Create() {
  const [task, setTask] = useState();
  const handleAdd = () =>{
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
    location.reload();
  }
  return (
    <div>
        <input className='input' placeholder='Write something...' type="text" name="" id="" onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAdd}><IoIosAdd /></button>
    </div>
  )
}

export default Create
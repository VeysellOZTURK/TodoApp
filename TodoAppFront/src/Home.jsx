import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { IoIosRadioButtonOff, IoIosRadioButtonOn, IoIosTrash  } from "react-icons/io";
import './Home.css'

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])
    const handleChecked = (id) =>{
      axios.put('http://localhost:3001/update/'+ id)
      .then(result => {location.reload();})
      .catch(err => console.log(err))
    }
    const handleDelete = (id) =>{
      axios.delete('http://localhost:3001/delete/'+ id)
      .then(result => {location.reload();})
      .catch(err => console.log(err))
      
    }
    
  return (
    <div>
        <h2>Todo List</h2>
        <Create></Create>
        {
            todos.length === 0 
            ?<div><h3>Nothing we have doing. Let's make together!</h3></div>
            :todos.map(todo =>(
              <div className='todosbox'>
                <span className='checkbox' onClick={()=>handleChecked(todo._id)}>
                {todo.done?<IoIosRadioButtonOn/>: <IoIosRadioButtonOff />}
                </span>
                {todo.task}
                <span className='delete' onClick={()=>handleDelete(todo._id)}>
                <IoIosTrash />
                </span>
                
              </div>
                
            ))
        }
    </div>
  )
}

export default Home
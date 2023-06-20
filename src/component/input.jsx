import React, { useState } from 'react'

export const Input = () => {
    // const [key, setKey] = useState(1)
    const [task, setTask] = useState([])
    const [value, setValue] = useState()
    const inputValue = (e) => {
       setValue(e.target.value)
    }
    const onSubmit = () => {
        setTask([...task, value])
        // setKey(key+1)
    }
  return (
    <div>
            <input type="text" placeholder='input a task' onChange={inputValue}/>
            <button onClick={onSubmit}> Add </button>
            {task.map((e, index) => <p key={index}>{e}</p>)}
    </div>
  )
}

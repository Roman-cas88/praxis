import React, { useState } from 'react'

export const Input = () => {
    const [task, setTask] = useState([])
    const [value1, setValue1] = useState()
    const [sign, setSign] = useState('+')
    const [value2, setValue2] = useState()
    const onSubmit = () => {
        setTask([...task, {
            value1: value1,
            sign: sign,
            value2: value2,
            result: function () {
                // return Number(value1)+Number(value2)
                if (sign === "+") {
                    return Number(value1)+Number(value2)
                } 
                if (sign === "-") {
                    return Number(value1)-Number(value2)
                } 
            },
        }])
    }
  return (
    <div>
            <input type="text" placeholder='input value 1' onChange={(e)=>setValue1(e.target.value)}/>
            <select name="sign" onChange={(e)=>setSign(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
            <input type="text" placeholder='input value 2' onChange={(e)=>setValue2(e.target.value)}/>
            <button onClick={onSubmit}> Add </button>
            {task.map((e, index) => <p key={index}>{e.value1 + e.sign + e.value2 + '=' + e.result()}</p>)}
    </div>
  )
}

import React, { useState } from 'react'

function AppsForm(props:any) {
    const [input, setInput] = useState('')


    const handleSubmit = (e:any)=>{
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })

        setInput('')
    }

   
    const handleChange = (e:any) =>{
        setInput(e.target.value)
    }


  return (
    <div>
         <form  className='apps-form' onSubmit={handleSubmit}>
        <input
            placeholder='Add a Apps'
            value={input}
            onChange={handleChange}
            name='text'
            className='apps-input'
           
          />
          <button className='apps-button bg-slate-100'>
            Add Apps
          </button>
        </form>
    </div>
  )
}

export default AppsForm
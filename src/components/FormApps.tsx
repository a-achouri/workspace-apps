import React from 'react'

function formApps() {
  return (
    <div>
        <form  className='apps-form'>
        <input
            placeholder='Add a Apps'
            value=""
            // onChange=""
            name='text'
            className='apps-input'
           
          />
          <button className='apps-button'>
            Add items
          </button>
        </form>
    </div>
  )
}

export default formApps
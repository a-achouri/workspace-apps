import React, { useState } from 'react'
import AppsForm from './AppsForm'
function AppsTable() {
     const [appsl , setAppsl] = useState([])

    function addApps(app:any) {
        if (!app.text || /^\s*/.test(app.text)) {
            
            return;
        }

        const newApp:any =[app, ...appsl]
        setAppsl(newApp)
    }
  return (
    <div className='center'>
        <h1>Apps list</h1>
        <AppsForm onSubmit={addApps}/> 
    </div>
  )
}

export default AppsTable
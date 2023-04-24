import React from 'react'

import {Button} from 'halil-btn-ui'
import 'halil-btn-ui/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <h1>BUTTON UI</h1>
      <Button type="primary" text="Primary Button"></Button><br />
      <Button type="secondary" text="Default Button"></Button><br />
      <Button type="dashed" text="Dashed Button"></Button><br />
      <Button type="text" text="Text Button"></Button><br />
      <Button type="link" text="Link Button"></Button>
      </div>
    </div>
  )
  
  
}

export default App

import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Show from '../containers/Show'

const App = (props) => {
  return (



    <div>
      <BrowserRouter>
        <Route path="/" component={Show}/>
      </BrowserRouter>
    </div>




  )
}

export default App

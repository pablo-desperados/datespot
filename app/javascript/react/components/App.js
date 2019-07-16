import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from "react-router-dom"
import LocationFormContainer from '../containers/LocationFormContainer'
import LocationsContainer from '../containers/LocationsContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/locations/new" component={LocationFormContainer} />
        <Route path="/locations" component={LocationsContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

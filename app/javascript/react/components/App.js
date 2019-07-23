import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from "react-router-dom"

import LocationsContainer from '../containers/LocationsContainer'
import ShowLocationContainer from '../containers/ShowLocationContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/locations" component={LocationsContainer} />
        <Route exact path="/locations/:id" component={ShowLocationContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

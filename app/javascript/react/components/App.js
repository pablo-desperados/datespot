import React from 'react'
import { BrowserRouter, Route, Router, Switch, History } from "react-router-dom"
import LocationFormContainer from '../containers/LocationFormContainer'
import LocationsContainer from '../containers/LocationsContainer'
import Show from '../containers/Show'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/locations/new" component={LocationFormContainer} />
        <Route exact path="/locations" component={LocationsContainer} />
        <Route exact path="/locations/:id" component={ShowLocationContainer} />
        <Route exact path="/locations/:id"
      </Switch>
    </BrowserRouter>
  )
}

export default App

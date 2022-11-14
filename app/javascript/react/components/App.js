import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PromptsIndexContainer from './Prompts/PromptsIndexContainer'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PromptsIndexContainer} />
        <Route exact path='/prompts' component={PromptsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

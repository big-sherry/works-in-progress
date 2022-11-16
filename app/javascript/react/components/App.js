import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PromptsIndexContainer from './Prompts/Index/PromptsIndexContainer'
import PromptShowContainer from './Prompts/Show/PromptShowContainer'
import FullPage from './FullPage'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <FullPage 
            page={<PromptsIndexContainer />}
            user={<h1>Wow</h1>}
          />
        </Route>
        <Route exact path='/prompts/:promptId'>
          <FullPage
            page={<PromptShowContainer />}
            user={<h2>Woah!</h2>}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

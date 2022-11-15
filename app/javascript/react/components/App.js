import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PromptsIndexContainer from './Prompts/PromptsIndexContainer'
import FullPage from './FullPage'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => 
          <FullPage 
            page={<PromptsIndexContainer />}
            user={<h1>Wow</h1>}
          />}/>
        <Route exact path='/prompts' component={PromptsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PromptsIndexContainer from './Prompts/Index/PromptsIndexContainer'
import PromptShowContainer from './Prompts/Show/PromptShowContainer'
import FullPage from './FullPage'
import UserTile from './Users/UserTile'

const App = (props) => {
  const [currentUser, setCurrentUser] = useState({})

  const getUser = async () => {
    try {
      const response = await fetch('/api/v1/users')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      setCurrentUser(fetchedUser.user)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <FullPage 
            page={<PromptsIndexContainer />}
            user={<UserTile user={currentUser} />}
          />
        </Route>
        <Route exact path='/prompts/:promptId'>
          <FullPage
            page={<PromptShowContainer />}
            user={<UserTile user={currentUser} />}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

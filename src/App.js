import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import history from './Utils/History'
import TestFeedData from './Examples/TestFeedData'
import TestPage from './Pages/TestPage'
import UsersByMostEditsPage from './Pages/UsersByMostEditsPage'
import MostActiveUsers from './Pages/MostActiveUsers'
import MostActivePages from './Pages/MostActivePages'
import TitleContainer from './Components/TitleContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'

import './App.css'

function App() {
  return (
  
    <div className="App">
	       
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
      <Router history={history}>
        <Switch>
          <Route exact path="/" exact component={HomePage} />
          <Route exact path="/page" component={TestPage} />
          <Route
            exact	
            path="/users-by-most-edits"
            component={UsersByMostEditsPage}
          />
          <Route exact path="/most-active-users" component={MostActiveUsers} />
          <Route exact path="/most-active-pages" component={MostActivePages} />
          <Route exact path="/feed" component={TestFeedData} />
        </Switch>
      </Router>
	  <p>Tejst</p>
    </div>
  )
}

export default App

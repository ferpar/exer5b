import React, { Fragment } from 'react'
import {hot} from 'react-hot-loader'

import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home.js'
import Beers from './components/Beers.js'

const Links = () => (
  <nav>
    <Link exact to="/">Home</Link>
    <Link to="/beers">Beers!</Link>
    <Link to="/random-beer">Random Beer</Link>
    <Link to="/new-beer">New Beer</Link>
  </nav>
)

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" render={() => <h1> Random Beer </h1>} />
        <Route path="/new-beer" render={() => <h1> New Beer </h1>} />
      </Fragment>
    )
  }
}

export default hot(module)(App)

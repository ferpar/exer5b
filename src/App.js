import React from 'react'
import {hot} from 'react-hot-loader'

import globe from '../public/images/globe.gif'
import beer from '../public/images/beer.png'

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const {count} = this.state;
    return (
      <div>
      <h1>Hello World!! - from the dev server</h1>
      <h2 className={count > 10 ? 'warning' : null}>
        Count: {count}
      </h2>
      <img src={beer} alt="beer"/>
      <img src={globe} alt="globe"/>
      <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
      <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
      </div>
    )
  }
}

export default hot(module)(App)

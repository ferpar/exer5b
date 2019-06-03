import React, {Fragment} from 'react'
import axios from 'axios'

import Nav from './Nav.js'

class Beers extends React.Component {
  state = {
    beers : []
  }

  componentDidMount() {
    let service = axios.create({
      baseURL: 'http://localhost:3005'
    })
    service.get(`/beers`)
      .then((result)=>{
        console.log(result)
        this.setState({beers: result.data}, () => console.log(this.state.beers.slice( 0,25 )))})
  }

  render() {
    return(
      <Fragment>
        <Nav/>
        <h1>Beers!</h1>

      <div className="beer-grid">
        { this.state.beers.length && 
            this.state.beers.slice(0,25).map((beer, index) => (
              <div className="beer-item" key={index}>
                <div className="img-container">
                  <img src={beer.image_url} alt={beer.name}/>
                </div>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
              </div>
            ))
        
        }
      </div>

      </Fragment>
    )
  }

}

export default Beers

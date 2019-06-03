import React, {Fragment} from 'react'
import axios from 'axios'

import Nav from './Nav.js'

class Beers extends React.Component {
  state = {
    beers : [],
    onScrollEnd: false,
    page: 1 
  }

  componentDidMount() {
    let service = axios.create({
      baseURL: 'https://api.punkapi.com/v2/'
    })
    service.get(`/beers`)
      .then((result)=>{
        this.setState({beers: result.data} )})
  }

  componentDidUpdate() {
    let service = axios.create({
      baseURL: 'https://api.punkapi.com/v2/'
    })

    this.state.onScrollEnd &&
    service.get(`/beers?page=${this.state.page}`)
      .then ((result) => {
       const newBeers = [...this.state.beers, ...result.data];
        this.setState({beers: newBeers, onScrollEnd: false});
      });
  }

  render() {

    const test =  (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 500);


    return(
      <Fragment>
        <Nav/>
        <h1>Beers!</h1>

      <div className="beer-grid">
        { this.state.beers.length ? 
            this.state.beers.map((beer, index) => (
              <div className="beer-item" key={index}>
                <div className="img-container">
                  <img src={beer.image_url} alt={beer.name}/>
                </div>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
              </div>
            ))
          : null
        
        }
      <h1 onClick={() => this.setState({onScrollEnd: true})}>more Beer!</h1>
      </div>
      </Fragment>
    )
  }

}

export default Beers

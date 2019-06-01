import React from 'react'
import { NavLink as Link} from 'react-router-dom'

import beerImg from '../images/beer.png'
import rdBeerImg from '../images/random-beer.png'
import nwBeerImg from '../images/new-beer.png'

const Home = (props) => (
  <section className="home-grid">
    <Link to="/beers">
      <img src={beerImg} alt="beer"/>
      <div className="link-description">
        <h1>Beers!</h1>
        <p>Ipsum odit autem rerum cumque harum Ratione eligendi ut aut laboriosam voluptatum! Laboriosam officia quaerat qui ab doloremque? Placeat quod sed necessitatibus eveniet labore. Obcaecati ullam fuga repellat dolorum impedit!</p>
      </div>
    </Link>
    <Link to="/random-beer">
      <img src={rdBeerImg} alt="random-beer"/>
      <div className="link-description">
        <h1>Random Beer</h1>
        <p>Amet rem minus velit maxime inventore dignissimos? Aut voluptatum dignissimos necessitatibus optio adipisci a odio suscipit et Quo qui facilis aperiam reiciendis architecto Ut cumque est voluptatum labore sapiente. Officia.</p>
      </div>
    </Link>
    <Link to="/new-beer">
      <img src={nwBeerImg} alt="new-beer"/>
      <div className="link-description">
        <h1>New Beer</h1>
        <p>Sit voluptatibus nisi vero explicabo vel Laudantium labore illo suscipit cum hic, ex Debitis necessitatibus beatae similique veniam debitis sint assumenda. Repellat laboriosam laborum aut corporis inventore eveniet numquam Nesciunt</p>
      </div>
    </Link>
  </section>
)

export default Home

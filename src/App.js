import React from 'react';
import axios from 'axios';
import settings from './settings';
import Card from './components/Card';
import './App.css';


// an app that will display a random pokemon (with info and a picture)
// a button that the user can push to get a new random pokemon
class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      displayedPokemon: {},
      pokemonCount: 0,
    }
  }

  getPokemonCount = async () =>
  {
    let {count} = await fetch(`${settings.apiBaseRoute}/pokemon/`).then((response) => response.json());

    this.setState({
      pokemonCount: count,
    });
  }

  getRandomPokemon = async () =>
  {
      // need to get a random WHOLE number between 1 and xxxxx
      const number = Math.floor((Math.random() * this.state.pokemonCount)) + 1;

      const pokemonUrl = `${settings.apiBaseRoute}/pokemon/${number}`;
      const data = await fetch(pokemonUrl).then((response) => response.json());

      this.setState({
        displayedPokemon: data,
      });
  }

  async componentDidMount()
  {
    this.getPokemonCount()
    .then(() =>
    {
      return this.getRandomPokemon();
    })
    .then(() =>
    {
      console.log('Successfully got the count and our first Pokemon.');
    })
    .catch((err) =>
    {
      console.log('Error getting the count or first Pokemon: ', err);
    });
  }

  render()
  {
    return (
      <div className='main'>
        <Card {...this.state.displayedPokemon} />
      </div>
    )
  }
}

export default App;

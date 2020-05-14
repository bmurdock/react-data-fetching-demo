import React from 'react';
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
    }
  }

  getRandomPokemon = async () =>
  {
      // need to get a random WHOLE number between 1 and xxxxx
      const number = Math.floor((Math.random() * 100)) + 1;

      const pokemonUrl = `${settings.apiBaseRoute}/pokemon/${number}`;
      const data = await fetch(pokemonUrl).then((response) => response.json());
      // const data = fetch(pokemonUrl).then((respnose) => {return response.json()});
      console.log(data);
      this.setState({
        displayedPokemon: data,
      });
  }

  componentDidMount()
  {
    this.getRandomPokemon();
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

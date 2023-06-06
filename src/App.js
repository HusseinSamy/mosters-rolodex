import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/cardList.component';
import SearchInput from './components/search-input/searchInput.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: []
    }
  }

  fetchMonsters() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json();
    })
    .then((monsters) => {
      this.setState(() => {
        return {
          monsters: monsters,
          filteredMonsters: monsters,
        };
      });
  })
  }
  componentDidMount() {
    this.fetchMonsters();
  }

  search = (event) => {
    let filteredList = this.state.monsters.filter((monster) => (
      monster.name.toLowerCase())
      .includes(
        (event.target.value).toLowerCase()
      ))

      this.setState({ filteredMonsters: filteredList })
  }

  render() {
    return (
      <div className="main">
        <SearchInput placeholder="Search for a monster" className='searchBox' onChangeHandler={this.search} />
        <CardList filteredMonsters={this.state.filteredMonsters} />
      </div>
    );
  }
}

export default App;

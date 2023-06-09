import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/cardList.component';
import SearchInput from './components/search-input/searchInput.component';


const App = () => {  
  const [filteredMonsters, setFilteredMonsters] = useState([]); 
  const [monsters, setMonsters] = useState([]); 

  const fetchMonsters = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((monstersArray) => {
        setMonsters(monstersArray);
        setFilteredMonsters(monstersArray);
      });
  };
 
  useEffect(() => {
    fetchMonsters()
  }, []) 
  
  const search = (event) => {
    let filteredList = monsters.filter((monster) => (
      monster.name.toLowerCase())
      .includes(
        (event.target.value).toLowerCase()
    ))
    setFilteredMonsters(filteredList)
  }

  return (
    <div className="main">
      <SearchInput placeholder="Search for a monster" className='searchBox' onChangeHandler={search} />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
}



export default App;

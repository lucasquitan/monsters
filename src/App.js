import React, { Component } from 'react';

import './global.css';

import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange(event) {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={(e) => this.onSearchChange(e)} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

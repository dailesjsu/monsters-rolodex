import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { render } from '@testing-library/react';
import {SearchBox} from './components/search-box.component/search-box.component';

class App extends Component 
{
  constructor()
  {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }
  handleChange =(e) => {
    this.setState({searchField: e.target.value})
  };
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return(
      <div className="App">
          <h1>Monster</h1>
          <SearchBox
          placeholder ='search monster'
          handleChange={this.handleChange}
          />
        <CardList monsters ={filteredMonsters}> </CardList>
    </div>
    );
  }
}
export default App;

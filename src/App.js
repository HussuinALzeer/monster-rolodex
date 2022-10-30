import './App.css';

import {Component} from 'react';

import  {CardList} from './component/card-list/card-list.component';

import { SearchBox } from './component/search-box/search-box.component';

class App extends Component{


  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFieald:''
    };

  }



  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => this.setState({monsters:users}))
  }



  handelChange = e => {
    this.setState({searchFieald:e.target.value})
 }


  render(){
    //search 1:  so with those 3 line i will look in the data then filter it , 
    const {monsters , searchFieald} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFieald.toLowerCase()));


    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monster' handelChange= {this.handelChange}></SearchBox>
      
      <CardList monsters={filteredMonster}></CardList>
      

    </div>
    )
  }
}

export default App;

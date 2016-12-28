import './App.css';

import React, { Component } from 'react';
import Item from './Item';
import {ItemMap} from './ItemMap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { textSelected: 1 };
  }

  
  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container"> {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text}/>)} </div>
        <div className="App-container-details"> halloooo</div>
      </div>
    );
  }
}

export default App;
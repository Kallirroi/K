import './App.css';

import React, { Component } from 'react';
import Item from './Item';
import {ItemMap} from './ItemMap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container"> {ItemMap.map((d,i) => <Item key={i} name={d.name} />)} </div> 
      </div>
    );
  }
}

export default App;

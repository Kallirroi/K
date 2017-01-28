import './App.css';

import React, { Component } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import {ItemMap} from './ItemMap';


class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      clickedID: 0
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container">
          {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text} />)} 
        </div>
        <ItemDetails text={ItemMap[this.state.clickedID].text} />
        <div className="footer">made by K. – 2017</div>
      </div>
    );
  }
}

export default App;
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
    this.showText = this.showText.bind(this);

  }
 
  componentDidMount() {
    window.addEventListener('click', this.showText);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.showText);
  }
  showText() {
    this.setState({clickedID: 1});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container"> {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text} onClick={this.showText} />)} </div>
        <ItemDetails text={ItemMap[this.state.clickedID].text} />
      </div>
    );
  }
}

export default App;
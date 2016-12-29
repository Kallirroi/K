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
    this.updateText = this.updateText.bind(this);

  }
 
  componentDidMount() {
    window.addEventListener('click', this.updateText);
  }
  componentWillMount() {

  }
  componentWillUnmount() {
    window.removeEventListener('click', this.updateText);
  }
  updateText(e) {
    e.target.id ? this.setState({clickedID: e.target.id}) : 1;  //change text
    var el = document.getElementsByClassName("ItemDetails"); //change position
    el[0].style.left = Math.random()*40 + 10 + 'rem';
    el[0].style.top =  Math.random()*20 + 20 + 'rem';
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container"> {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text} onClick={this.updateText} />)} </div>
        <ItemDetails text={ItemMap[this.state.clickedID].text} />
      </div>
    );
  }
}

export default App;
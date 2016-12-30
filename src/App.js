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

  componentWillUnmount() {
    window.removeEventListener('click', this.updateText);
  }
  updateText(e) {
    if (e.target.id.length>0) this.setState({clickedID: e.target.id});  //change text
    var el = document.getElementsByClassName("ItemDetails"); //change position
    el[0].style.left = Math.random()*40 + 10 + 'rem';
    el[0].style.top =  Math.random()*5 + 'rem';

    var background = document.getElementsByTagName('body');
    var colors = ['#fff', '#FFFFD6', '#FCFFFF', 'FFFFF2', 'FEFEFF','#fff'];
    background[0].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
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
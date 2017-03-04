import './App.css';

import React, { Component } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import {ItemMap} from './ItemMap';

const item = document.getElementsByClassName("ItemDetails"); //change position

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
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> kalli retzepi</div> 
        <div className="App-container">
          {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text} onClick={this.updateText} />)} 
        </div>
        <ItemDetails text={ItemMap[this.state.clickedID].text} />
        <div className="about"> kallirroi.retzepi [at] gmail.com | @kallirroi</div>
        <div className="footer">made by K. – 2017</div>
      </div>
    );
  }
}

export default App;
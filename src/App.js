import './App.css';

import React, { Component } from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
import {ItemMap} from './ItemMap';

// const colors = ['#fff', '#F9FFF7', '#FAFFFE', '#FAFEFF', '#FEFEFF','#FCFFFA', '#FFFBFA', '#FFF'] ;
const colors = ['#FFF'] ;
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
    item[0].style.left = Math.random()*40 + 20 + 'rem'; //move text 
    item[0].style.top =  Math.random()*10 + 10 + 'rem'; //move text 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container">
          {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text} onClick={this.updateText} />)} 
        </div>
        <ItemDetails text={ItemMap[this.state.clickedID].text} />
        <div className="footer">made by K. – 2017</div>
      </div>
    );
  }
}

export default App;
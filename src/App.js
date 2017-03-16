import './App.css';

import React, { Component } from 'react';
// import Item from './Item';
import ItemDetails from './ItemDetails';
import {ItemMap} from './ItemMap';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activePage: "Projects-isActive"
    };
    this.updateText = this.updateText.bind(this);
  }
 
  componentDidMount() {
    window.addEventListener('click', this.updateText);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.updateText);
  }
  
  updateText() {
    console.log(this.state.activePage)
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header"> kalli retzepi</div> 
        <div className="App-Menu"> <span className={this.state.activePage}>projects</span> | about </div> 
        
        {/* {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text} onClick={this.updateText} />)} */}

        <div className="App-Container">
          {ItemMap.map((d,i) => <ItemDetails key={i} text={d.text} onClick={this.updateText} />)} 
        </div>

        <div className="About"> contact</div>
      </div>
    );
  }
}

export default App;
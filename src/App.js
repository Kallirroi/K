import './App.css';

import React, { Component } from 'react';
import Item from './Item';
// import ItemDetails from './ItemDetails';
import {ItemMap} from './ItemMap';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clickedID: 0,
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
    if (e.target.id.length>0) this.setState({clickedID: e.target.id});
    console.log(this.state.clickedID)
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header"> kalli retzepi</div> 
        <div className="App-Menu"> projects | about </div> 
        <div className="App-Container">
          {ItemMap.map((d,i) => <Item key={i} id={i} header={d.header} type={d.type} text={d.text} links={d.links} onClick={this.updateText} />)} 
        </div>
        <div className="About"> contact</div>
      </div>
    );
  }
}

export default App;
import './App.css';

import React, { Component } from 'react';
import Menu from './Menu';
import Item from './Item';
import {ItemMap} from './ItemMap';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clickedID: 0,
      projects: true
    };
    this.showPhotos = this.showPhotos.bind(this);
  }
 
  componentDidMount() {
    window.addEventListener('click', this.showPhotos);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.showPhotos);
  }
  
  showPhotos(e) {
    if (e.target.id.length>0) this.setState({clickedID: e.target.id});
    // console.log(this.state.clickedID)
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header"> kalli retzepi</div> 
        <Menu projects={this.state.projects}/> 
        <div className="App-Container-isVisible">
          {ItemMap.map((d,i) => <Item key={i} id={i} header={d.header} type={d.type} text={d.text} links={d.links} onClick={this.showPhotos} />)} 
        </div>      
        <div className="About"> contact</div>
      </div>
    );
  }
}

export default App;
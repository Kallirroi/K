import './App.css';

import React, { Component } from 'react';
import Menu from './Menu';
import Item from './Item';
import {ItemMap} from './ItemMap';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clickedID: null,
      photosShow: false
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
    e.target.id > 0 ? this.setState({clickedID: e.target.id, photosShow: true}) : this.setState({clickedID: e.target.id, photosShow: false});

  }

  render() {
    return (
      <div className="App">
        <div className="App-Header"> kalli retzepi</div> 
        <Menu projects={this.state.projects}/> 
        <div className="App-Container">
          {ItemMap.map((d,i) => <Item key={i} id={i} header={d.header} type={d.type} text={d.text} photos={d.photos} links={d.links}/>)}
        </div>     
        <div className="About"> <a href="mailto:kallirroi.retzepi@gmail.com">contact</a></div>
      </div>
    );
  }
}

export default App;
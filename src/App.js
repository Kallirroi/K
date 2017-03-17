import './App.css';

import React, { Component } from 'react';
import Menu from './Menu';
import Item from './Item';
import {ItemMap} from './ItemMap';
import ItemPhoto from './ItemPhoto';
import {ItemPhotoMap} from './ItemPhotoMap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clickedID: 0,
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
    e.target.id ? this.setState({clickedID: e.target.id, photosShow: true}) : this.setState({clickedID: 0, photosShow: false});
  }

  render() {
    return (
      <div className="App">
        <div className="App-Header"> kalli retzepi</div> 
        <Menu projects={this.state.projects}/> 
        <div className="App-Container">
          {ItemMap.map((d,i) => <Item key={i} id={i} header={d.header} type={d.type} text={d.text} photos={d.photos} links={d.links}/>) }
        </div>     
        <ItemPhoto photos={ItemPhotoMap[this.state.clickedID].photos} />
        <div className="About"> <a href="mailto:kallirroi.retzepi@gmail.com">contact</a></div>
      </div>
    );
  }
}

export default App;
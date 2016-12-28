import './App.css';

import React, { Component } from 'react';
import Item from './Item';
import {ItemMap} from './ItemMap';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header"> Kalli Retzepi </div> 
        <div className="App-container"> {ItemMap.map((d,i) => <Item key={i} id={i} name={d.name} text={d.text}/>)} </div>
        <div className="App-container-details"> My name is Kallirroi; many people call me Kalli. I explore the space found at the intersection of design, engineering, science and images.My focus lies in designing and developing novel platforms that breathe in data and exhale meaningful insights that inform decision-making on issues of collective learning, education and social awareness. Having followed a non-linear career path, I gained experience both in research and in industry. Currently, I am working as an interaction and data visualization designer at a digital design studio in Zurich, Switzerland. Prior to that, I worked as a neuroscientist at Massachusetts General Hospital focusing on brain MRI analysis and visualization as well as clinical data collection, mining and interpretation. Simultaneously, I collaborated with a researcher at the Sabeti lab of The Broad Institute on UI design and implementation for a mobile app serving as the front-end of sophisticated Ebola virus risk prediction algorithms. In my free time I run long distances, read, write, photograph, and have extensive, espresso-fueled debates - usually about politics.</div>
      </div>
    );
  }
}

export default App;
import React from 'react';
import Item from './Item';
import {AboutMap} from './AboutMap';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.showProjects = this.showProjects.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.state = {
    	classNameProjects: "App-Menu-Projects-isActive", 
	  	classNameAbout: "App-Menu-About-isNotActive",
	  	classNameAboutText: "App-About-isHidden"
    }
  }
  
  showProjects(e) {
  	console.log('showProjects')
	this.setState({classNameProjects: "App-Menu-Projects-isActive"});
	this.setState({classNameAbout: "App-Menu-About-isNotActive"});
	this.setState({classNameAboutText: "App-About-isHidden"});

  }    

  showAbout(e) {
  	console.log('showAbout')
	this.setState({classNameProjects: "App-Menu-Projects-isNotActive"});
	this.setState({classNameAbout: "App-Menu-About-isActive"});
	this.setState({classNameAboutText: "App-About-isVisible"});
  }

  render() {
 
    return (
	  	<div> 
		  	<div className="App-Menu">
		  		<span className={this.state.classNameProjects} onClick={this.showProjects} >Projects</span>•
		  		<span className={this.state.classNameAbout} onClick={this.showAbout} >About</span>
		  	</div>
		  	<div className={this.state.classNameAboutText}>
	          {AboutMap.map((d,i) => <Item key={i} id={i} links={d.links} text={d.text}/>)} 
	        </div>  
        </div>
    );
  }
}

export default Menu;
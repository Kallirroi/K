import React from 'react';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.showProjects = this.showProjects.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.state = {
    	classNameProjects: "App-Menu-Projects-isActive", 
	  	classNameAbout: "App-Menu-About-isNotActive"
    }
  }
  
  showProjects(e) {
  	console.log('showProjects')
	this.setState({classNameProjects: "App-Menu-Projects-isActive"});
	this.setState({classNameAbout: "App-Menu-About-isNotActive"})
  }    

  showAbout(e) {
  	console.log('showAbout')
	this.setState({classNameProjects: "App-Menu-Projects-isNotActive"});
	this.setState({classNameAbout: "App-Menu-About-isActive"})
  }

  render() {
 
    return (
	  	<div className="App-Menu">
	  		<span className={this.state.classNameProjects} onClick={this.showProjects} >Projects</span> |
	  		<span className={this.state.classNameAbout} onClick={this.showAbout} >About</span>
	  	</div>
    );
  }
}

export default Menu;
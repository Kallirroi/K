import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.showText = this.showText.bind(this);
  }

  showText() {
    this.setState({textSelected: this.props.id});
    console.log(this.props.id);
  }

  render() {
    return (
	  <div> 
	  	<div className="Item" onClick={this.showText}>  {this.props.name} </div>
  	  </div>
    );
  }
}

export default Item;
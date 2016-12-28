import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.showText = this.showText.bind(this);
  }

  showText() {
    console.log(this.props.text);
  }

  render() {
    return (
	  	<div className="Item" onClick={this.showText}>  {this.props.name} </div>
    );
  }
}

export default Item;
import React from 'react';

class Item extends React.Component {


  render() {
    return (
	  	<div className="Item" id={this.props.id} >  {this.props.name} </div>
    );
  }
}

export default Item;
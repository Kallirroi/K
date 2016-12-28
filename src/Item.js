import React from 'react';

class Item extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
    	<div className="Item">{this.props.name} </div>
    );
  }
}

export default Item;
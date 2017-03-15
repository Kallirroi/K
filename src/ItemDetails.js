import React from 'react';

class ItemDetails extends React.Component {
  render() {
    return (
	  	<div className="ItemDetails" dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
    );
  }
}

export default ItemDetails;
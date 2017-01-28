import React from 'react';
import Draggable from 'react-draggable'; 

class ItemDetails extends React.Component {
  render() {
    return (
    		<Draggable>
	  			<div className="ItemDetails" dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
	  		</Draggable>
    );
  }
}

export default ItemDetails;
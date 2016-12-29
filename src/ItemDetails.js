import React from 'react';
import {ItemMap} from './ItemMap';

class ItemDetails extends React.Component {
  render() {
    return (
	  	<div className="ItemDetails" >  {this.props.text} </div>
    );
  }
}

export default ItemDetails;
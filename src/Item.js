import React from 'react';

const item = document.getElementsByClassName("ItemDetails"); //change position

class Item extends React.Component {

	constructor(props) {
	    super(props);
	    this.moveText = this.moveText.bind(this);
	}

	moveText() {
		var range = 5;
		item[0].style.left = Math.random() * range - range/2 + 7 + 'vw'; //move text 
		item[0].style.top = Math.random() * range - range + 40 + 'vh'; //move text 
	}

	render() {
	return (
	  	<div className="Item" id={this.props.id} onClick={this.moveText} >  {this.props.name} </div>
	);
	}
}

export default Item;
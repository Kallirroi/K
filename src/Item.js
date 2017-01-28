import React from 'react';

const item = document.getElementsByClassName("ItemDetails"); //change position

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedID: 0
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    if (e.target.id.length>0) this.setState({clickedID: e.target.id});  //change text
    item[0].style.left = Math.random()*40 + 20 + 'rem'; //move text 
    item[0].style.top =  Math.random()*10 + 10 + 'rem'; //move text 
  }

  render() {
    return (
	  	<div className="Item" id={this.props.id} onClick={this.updateText} >  {this.props.name} </div>
    );
  }
}

export default Item;
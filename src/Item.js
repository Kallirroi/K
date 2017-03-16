import React from 'react';


class Item extends React.Component {

   constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }


  handleScroll(e) {
  	e.preventDefault();
    console.log('scrolling')
  }


	render() {
	return (
	  	<div className="Item" id={this.props.id} onScroll={this.handleScroll}>  
	  		<div className="Item-Header"> {this.props.header} </div>
	  		<div className="Item-Type"> {this.props.type}</div>
	  		<div className="Item-Text" dangerouslySetInnerHTML={{__html: this.props.text}}  ></div>
	  		<div className="Item-Links" dangerouslySetInnerHTML={{__html: this.props.links}}></div>
	  	</div>
	);
	}
}

export default Item;
import React from 'react';

class Item extends React.Component {

render() {
	return (
	  	<div className="Item" id={this.props.id} >  
	  		<div className="Item-Header" id={this.props.id}> {this.props.header} </div>
	  		<div className="Item-Type" id={this.props.id}> {this.props.type}</div>
	  		<div className="Item-Text" dangerouslySetInnerHTML={{__html: this.props.text}} id={this.props.id}></div>
	  		<div className="Item-Photos-Button" dangerouslySetInnerHTML={{__html: this.props.photos}} id={this.props.id}></div>
	  		<div className="Item-Links" dangerouslySetInnerHTML={{__html: this.props.links}} id={this.props.id}></div>
	  	</div>
	);
	}
}

export default Item;
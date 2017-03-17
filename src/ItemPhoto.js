import React from 'react';


class ItemPhoto extends React.Component {

render() {
	return (
	  	<div className="ItemPhoto-isVisible " id={this.props.id} dangerouslySetInnerHTML={{__html: this.props.photos}}></div>
	);
	}
}

export default ItemPhoto;
import React from 'react';

class ItemPhoto extends React.Component {

render() {
	return (
		<div className={this.props.className} id={this.props.id} dangerouslySetInnerHTML={{__html: this.props.photos}}></div>
	);
	}
}

export default ItemPhoto;
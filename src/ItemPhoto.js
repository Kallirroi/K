import React from 'react';

class ItemPhoto extends React.Component {

render() {
	return (
		<div className={this.props.className} id={this.props.id}><img role="presentation" src={require(this.props.photos)} /></div>
	);
	}
}

export default ItemPhoto;
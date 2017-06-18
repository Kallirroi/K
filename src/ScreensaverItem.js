import React from 'react';

class ScreensaverItem extends React.Component {

render() {
	return (
	  	<img role="presentation"  className="item" src={require(this.props.photos)} />
	);
	}
}

export default ScreensaverItem;
import React from 'react';

class ScreensaverItem extends React.Component {

render() {
	return (
	  	<div className="item" > <img role="presentation" src={require(this.props.fragments)} /></div>
	);
	}
}

export default ScreensaverItem;
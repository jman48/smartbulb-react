import React from 'react';
import Slider from 'material-ui/Slider';

import Style from './_colorPicker.style.scss';

/**
 * This is the main component of our application.
 */
export default class ColorPicker extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div className={this.props.name}>
				<Slider defaultValue={0} max={255}/>
				<span className="picker-text">{this.props.name}</span>
			</div>
		);
	}
}
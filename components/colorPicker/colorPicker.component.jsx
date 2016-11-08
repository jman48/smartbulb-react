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

		this.updateColor = this._updateColor.bind(this);
	}

	render() {
		return (
			<div className={this.props.name}>
				<Slider step={1} defaultValue={this.props.color} max={255} onChange={this.updateColor}/>
				<span className="picker-text">{this.props.name}</span>
			</div>
		);
	}

	_updateColor(event, value) {
		this.props.onSelected(this.props.name, value);
	}
}
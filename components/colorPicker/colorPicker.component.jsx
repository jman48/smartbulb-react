import React from 'react';
import Slider from 'material-ui/Slider';

import Style from './_colorPicker.style.scss';

/**
 * This component lets a user select a color
 */
export default class ColorPicker extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.colorValue = this.props.color;

		this.updateColor = this._updateColor.bind(this);
		this.updateValue = this._updateValue.bind(this);
	}

	render() {
		return (
			<div className={this.props.name}>
				<Slider step={1} defaultValue={this.colorValue} max={255} onDragStop={this.updateColor} onChange={this.updateValue}/>
				<span className="picker-text">{this.props.name}</span>
			</div>
		);
	}

	/**
	 * Update the color value on parent. Only do this on deselect so that we do not spam server with requests
	 */
	_updateColor() {
		this.props.onSelected(this.props.name, this.colorValue);
	}

	/**
	 * Update the color value locally
	 */
	_updateValue(event, newColorValue) {
		this.colorValue = newColorValue;
	}
}
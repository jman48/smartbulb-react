import React from 'react';

import ColorPicker from '../colorPicker/colorPicker.component.jsx';

import Style from './_color.style.scss';

/**
 * This component encapsulates all the color picker stuff
 */
export default class Color extends React.Component {

	constructor() {
		super();
		this.updateColor = this._updateColor.bind(this);

		this.colors = {
			red: 0,
			green: 0,
			blue: 0
		}
	}


	render() {
		return (
			<div className="color">
				<ColorPicker name="red" color={this.colors.red} onSelected={this.updateColor}/>
				<ColorPicker name="green" color={this.colors.green} onSelected={this.updateColor}/>
				<ColorPicker name="blue" color={this.colors.blue} onSelected={this.updateColor}/>
			</div>
		);
	}

	_updateColor(color, value) {
		this.colors[color] = value;
	}
}
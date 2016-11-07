import React from 'react';

import ColorPicker from '../colorPicker/colorPicker.component.jsx';

import Style from './_color.style.scss';

/**
 * This is the main component of our application.
 */
export default class Color extends React.Component {

	render() {
		return (
			<div className="color">
				<ColorPicker name="red"/>
				<ColorPicker name="green"/>
				<ColorPicker name="blue"/>
			</div>
		);
	}
}
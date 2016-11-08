import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import Brightness from '../brightness/brightness.component.jsx';
import Mode from '../mode/mode.component.jsx';
import Color from '../color/color.component.jsx';

import Style from './smartbulb.style.scss';

export const host = 'https://smartbulb.herokuapp.com/';

/**
 * This is the main component of our application.
 */
export default class SmartBulb extends React.Component {

    render() {
        return (
            <div className="smartbulb">
                <RaisedButton label="Toggle power" onClick={this.powerToggle}/>
                <div>
                    <Brightness/>
                    <Mode/>
                    <Color />
                </div>
            </div>
        );
    }

    /**
     * Toggle the power on/ off
     */
    powerToggle() {
        axios.post(`${host}/power/toggle`, {});
        console.log('Toggling power');
    }
}
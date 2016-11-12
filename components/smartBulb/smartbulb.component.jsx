import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import Brightness from '../brightness/brightness.component.jsx';
import Mode from '../mode/mode.component.jsx';
import Color from '../color/color.component.jsx';

import Style from './smartbulb.style.scss';

export const host = 'https://smartbulb-server.herokuapp.com';

/**
 * This is the main component of our application.
 */
export default class SmartBulb extends React.Component {

    constructor(props) {
        super(props);
        this.power = true;

        this.powerToggle = this._powerToggle.bind(this);
        this.reset = this._reset.bind(this);
    }

    render() {
        return (
            <div className="smartbulb">
                <RaisedButton label="Toggle power" onClick={this.powerToggle}/>
                <RaisedButton label="Reset" onClick={this.reset} className="right"/>
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
    _powerToggle() {
        if (this.power) {
            axios.post(`${host}/power/off`, {});
        } else {
            axios.post(`${host}/power/on`, {});
        }

        this.power = !this.power;
    }

    _reset() {
        axios.post(`${host}/mode/reset`);
    }
}
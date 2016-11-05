import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Brightness from '../brightness/brightness.component.jsx';
import Mode from '../mode/mode.component.jsx';

import Style from './smartbulb.style.scss';

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
                </div>
            </div>
        );
    }

    /**
     * Toggle the power on/ off
     */
    powerToggle() {
        console.log('Toggling power');
    }
}
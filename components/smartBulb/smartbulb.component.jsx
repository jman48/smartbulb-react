import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Brightness from '../brightness/brightness.component.jsx';
import Mode from '../mode/mode.component.jsx';

/**
 * This is the main component of our application.
 */
export default class SmartBulb extends React.Component {

    render() {
        return (
            <div>
                <RaisedButton label="Toggle power" onClick={this.powerToggle}/>
                <Brightness/>
                <Mode/>
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
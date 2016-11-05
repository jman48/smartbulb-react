import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

/**
 * This is the main component of our application.
 */
export default class SmartBulb extends React.Component {

    render() {
        return (
            <RaisedButton label="Toggle power" onClick={this.powerToggle}/>
        );
    }

    /**
     * Toggle the power on/ off
     */
    powerToggle() {
        console.log('Toggling power');
    }
}
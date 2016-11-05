import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

/**
 * Contains all the controls to manipulate the brightness of the bulb
 */
export default class Brightness extends React.Component {

    render() {
        return (
            <div>
                <RaisedButton label="Brighter" onClick={this.brighter}/>
                <RaisedButton label="Dimmer" onClick={this.dimmer}/>
            </div>
        );
    }

    brighter() {
        console.log('Brightning bulb');
    }

    dimmer() {
        console.log('Dimming bulb');
    }
}
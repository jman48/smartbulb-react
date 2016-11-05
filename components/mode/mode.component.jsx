import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

/**
 * Contains all the controls to manipulate the brightness of the bulb
 */
export default class Mode extends React.Component {

    render() {
        return (
            <div className="test">
                <RaisedButton label="Next" onClick={this.nextMode}/>
                <RaisedButton label="Prev" onClick={this.prevMode}/>
            </div>
        );
    }

    nextMode() {
        console.log('Selecting next mode');
    }

    prevMode() {
        console.log('Selecting prev mode');
    }
}
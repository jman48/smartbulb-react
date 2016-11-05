import React from 'react';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

/**
 * Contains all the controls to manipulate the brightness of the bulb
 */
export default class Mode extends React.Component {

    render() {
        return (
            <div className="test">
                <IconButton onClick={this.nextMode}>
                    <ContentAdd />
                </IconButton>

                <IconButton onClick={this.prevMode}>
                    <ContentRemove />
                </IconButton>
                <span>Mode</span>
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
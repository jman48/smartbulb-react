import React from 'react';

import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Style from './_brightness.style.scss';

/**
 * Contains all the controls to manipulate the brightness of the bulb
 */
export default class Brightness extends React.Component {

    render() {
        return (
            <div className="brightness">
                <div className="control">
                    <FloatingActionButton onClick={this.brighter}>
                        <ContentAdd />
                    </FloatingActionButton >
                </div>

                <div className="control">
                    <FloatingActionButton onClick={this.dimmer}>
                        <ContentRemove />
                    </FloatingActionButton>
                </div>
                <p className="control-text">Brigntness</p>
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
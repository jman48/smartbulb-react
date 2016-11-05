import React from 'react';

import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import Style from './_brightness.style.scss';

/**
 * Contains all the controls to manipulate the brightness of the bulb
 */
export default class Brightness extends React.Component {

    render() {
        return (
            <div className="brightness">
                <IconButton onClick={this.brighter}>
                    <ContentAdd />
                </IconButton>

                <IconButton onClick={this.dimmer}>
                    <ContentRemove />
                </IconButton>
                <span>Brigntness</span>
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
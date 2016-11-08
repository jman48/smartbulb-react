import React from 'react';
import axios from 'axios';
import {host} from '../smartBulb/smartbulb.component.jsx';

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
        axios.post(`${host}/brightness/up`);
        console.log('Brightning bulb');
    }

    dimmer() {
        axios.post(`${host}/brightness/down`);
        console.log('Dimming bulb');
    }
}
import React from 'react';
import axios from 'axios';
import {host} from '../smartBulb/smartbulb.component.jsx';

import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Style from './_mode.style.scss';

/**
 * Contains all the controls to manipulate the brightness of the bulb
 */
export default class Mode extends React.Component {

    render() {
        return (
            <div className="mode">
                <div className="control">
                    <FloatingActionButton onClick={this.nextMode}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>

                <div className="control">
                    <FloatingActionButton onClick={this.prevMode}>
                        <ContentRemove />
                    </FloatingActionButton>
                </div>
                <p className="control-text">Mode</p>
            </div>
        );
    }

    nextMode() {
        axios.post(`${host}/mode/next`);
        console.log('Selecting next mode');
    }

    prevMode() {
        axios.post(`${host}/mode/prev`);
        console.log('Selecting prev mode');
    }
}
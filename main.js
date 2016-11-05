import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SmartBulb from './components/smartBulb/smartbulb.component.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Our main application component. This is the entry point of the application for React
 */
class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <SmartBulb/>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx';

class App extends  React.Component {
    render() {
        return <Hello name="World"/>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
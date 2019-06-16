import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.component {
    render() {
        return <h1>Hello World from React boilerplate</h1>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
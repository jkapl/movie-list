import React from 'react';
import MovieEntry from './MovieEntry.js';
import MovieList from './MovieList.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            {title: 'Mean Girls'},
            {title: 'Hackers'},
            {title: 'The Grey'},
            {title: 'Sunshine'},
            {title: 'Ex Machina'},
          ];
    }

    render() {
        return (
            <div>
            <div>
                <h1>Movie List</h1>
            </div>
            <div>
                <MovieList movies={this.state}/>
            </div>
            </div>
        )
    }
}

export default App;

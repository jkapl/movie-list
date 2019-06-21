import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';
import sampleData from '../sampleData';

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

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(query) {
    this.setState([{title: 'Braveheart'}, {title: 'Dumbo'}]);
  }
  
  render() {
    return (
      <div>
      <div>
          <h1>Movie List</h1>
      </div>
          <Search handleSearchInput={this.handleSearchInput.bind(this)}/>
      <div>
          <MovieList movies={this.state}/>
      </div>
      </div>
    )
  }
}

export default App;

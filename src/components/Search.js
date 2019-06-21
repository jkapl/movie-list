import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({value: event.target.value});
  }

  handleClick(e) {
    this.props.handleSearchInput(e.target.value);
  }


  render() { 
    return (
      <div>
        <form onSubmit={this.handleClick.bind(this)}>
          <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}>
          </input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
        )
  }
}

export default Search
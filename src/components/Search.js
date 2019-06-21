import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
        
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.handleSearchInput(e.target.value);
    this.setState({value: event.target.value});
  }


  render() { 
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}></input>
            </form>
          </div>
        )
  }
}

export default Search
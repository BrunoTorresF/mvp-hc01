import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }
  handleInput(event){
    this.setState({
      input: event.target.value
    })
  }
  search(){
    this.props.executeSearch(this.state.input);
    this.setState({
      input: ''
    })
  }
  render(){
    return (
      <div>
        Search: <input onChange={this.handleInput} placeholder="Enter search term" value={this.state.input}></input>
      <button onClick={this.search}>Track My Beer</button>
      </div>
    );
  }
}
export default Search;

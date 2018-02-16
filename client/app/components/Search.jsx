import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      style: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.save = this.save.bind(this);
  }
  handleInput(event){
    this.setState({
      description: event.target.value,
      style: event.target.value
    })
  }
  save(){
    this.props.saveBeer(this.state.description, this.state.style);
    this.setState({
      input: ''
    })
  }
  render(){
    return (
      <div>
        Beer: <input onChange={this.handleInput} placeholder="Enter Beer" value={this.state.input}></input> <br/>
        Style: <input onChange={this.handleInput} placeholder="Enter Beer" value={this.state.input}></input>
      <button onClick={this.save}>Track My Beer</button>
      </div>
    );
  }
}
export default Search;

import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beer: '',
      style: ''
    }
    this.handleBeer = this.handleBeer.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.save = this.save.bind(this);
  }

    handleBeer(event){
      this.setState({
        beer: event.target.value
      })
    }

    handleStyle(event){
      this.setState({
        style: event.target.value
      })
    }

  save(){
    this.props.saveBeer(this.state.beer, this.state.style);
    this.setState({
      beer: '',
      style: ''
    })
  }
  render(){
    return (
      <div>
        Beer: <input onChange={this.handleBeer} placeholder="Enter Beer" value={this.state.beer}></input> <br/>
      Style: <input onChange={this.handleStyle} placeholder="Enter Style" value={this.state.style}></input>
      <button onClick={this.save}>Track My Beer</button>
      </div>
    );
  }
}
export default Search;

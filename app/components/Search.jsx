import React from 'react'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    
  }
  render(){
    return (
      <div>
        Search: <input></input><br/>
      <button>Find Me Some Beer</button>
      </div>
    );
  }
}
export default Search;

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import BeerList from './components/BeerList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    //bind component methods here
    this.executeSearch = this.executeSearch.bind(this);
  }
  //Component methods go here
  componentDidMount(){
    this.setState({
      results: []
    })
  }

  //executeSearch()
  executeSearch(query) {
    axios.post('/save', {
      data: {query: query}
    })
    .then(res => {
      this.setState({
        results: res
      })
    })
  }
  //fetchPreviousSearch()
  render(){
    return (
      <div>
        <h1> Find a Beer </h1>
        <Search executeSearch={this.executeSearch}/>
        <BeerList results={this.state.results}/>
      </div>
    )
  }
}

ReactDOM.render(<App url={"http://api.brewerydb.com/v2/"}/> , document.getElementById('app'));

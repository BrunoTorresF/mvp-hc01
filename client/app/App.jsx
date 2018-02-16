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
    this.getBeerList = this.getBeerList.bind(this);
  }
  //Component methods go here
  componentDidMount(){
    this.getBeerList();
  }

  //executeSearch()
  executeSearch(input) {
    axios.post('/save', {
      name: input
    })
    .then(() => {
      this.getBeerList();
    })
  }
  //fetchPreviousSearch()
  getBeerList() {
    axios.get('/save')
    .then(res => {
      console.log(res)
      this.setState({ results: res });
    })
    .catch(err => {
      console.log(err);
    });
  }

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

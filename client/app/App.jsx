import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import BeerList from './components/BeerList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {beer: 'Sam Adams', style: 'American IPA', beer_id: 2546},
        {beer: 'Kronenbourg 1664', style: 'Pale Lager', beer_id: 1358},
        {beer: 'Pilsner Urqell', style: 'Czech-style Lager', beer_id: 4879},
        {beer: 'Estrella Damm', style: 'Lager', beer_id: 2234},
        {beer: 'Black Sheep Ale', style: 'Brown Ale', beer_id: 4284}
      ]
    }
    //bind component methods here
    this.executeSearch = this.executeSearch.bind(this);
  }
  //Component methods go here
  //componentDidMount - check status in React v16

  //executeSearch()
  executeSearch(query) {
    axios.post(`${this.props.url}`, {
      "function": "beer",
      "dev_key": window.BS_API_KEY,
      "search_term": query,
      "limit" : "10"
    })
    .then(res => {
      this.setState({ results: res });
    })
    .catch(err => {
      console.error(err);
    });
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

ReactDOM.render(<App url={"http://www.thebeerspot.com/api/search"}/> , document.getElementById('app'));

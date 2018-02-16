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
    this.saveBeer = this.saveBeer.bind(this);
    this.getBeerList = this.getBeerList.bind(this);
  }
  //Component methods go here
  componentDidMount(){
    this.getBeerList();
  }

  //executeSearch()
  saveBeer(description, style) {
    $.ajax({
      method: "POST",
      url: "/beers",
      contentType: 'application/json',
      data: JSON.stringify({
        description: description,
        style: style
      })
    }).done(() => {
      this.getBeerList();
    });
  }

  getBeerList() {
    $.ajax({
      url: '/beers',
      method: 'GET',
      success: (results) => {
        this.setState({list: results});
      },
      error: (xhr, err) => {
        console.log('err', err);
      }
    })
}
  render(){
    return (
      <div>
        <h1> Find a Beer </h1>
        <Search saveBeer={this.saveBeer}/>
        <BeerList results={this.state.results}/>
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import BeerList from './components/beerList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }

  }
  render(){
    return (
      <div>
        <h1> Find a Beer </h1>
        <Search />
        <BeerList />
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));

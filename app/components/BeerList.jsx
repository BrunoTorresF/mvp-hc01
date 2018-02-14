import React from 'react';
import BeerEntry from './BeerEntry.jsx';

const BeerList = (props) => (
  <div className="list">
    {props.results.map((beer, beer_id) => <BeerEntry beer={beer} key={beer_id}/>)}
  </div>
)

export default BeerList;

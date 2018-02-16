import React from 'react';
import BeerEntry from './BeerEntry.jsx';

const BeerList = (props) => (
  <div className="list">
    {props.results.map((beer, id) => <BeerEntry beer={beer} key={id}/>)}
  </div>
)

export default BeerList;

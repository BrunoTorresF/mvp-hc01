import React from 'react';
import BeerEntry from './BeerEntry.jsx';

const BeerList = (props) => (
  <div className="list">
    {props.results.map((beer, _id) => <BeerEntry beer={beer} key={_id}/>)}
  </div>
)

export default BeerList;

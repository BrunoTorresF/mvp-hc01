import React from 'react';
import BeerEntry from './BeerEntry.jsx';

const BeerList = (props) => (
  <div className="list">
    {props.results.map((beer, style, index) => <BeerEntry beer={beer} style={style} key={index}/>)}
  </div>
)

export default BeerList;

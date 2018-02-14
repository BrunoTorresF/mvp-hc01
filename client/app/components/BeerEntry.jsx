import React from 'react';

const BeerEntry = (props) => (
  <div>
    <span> {props.beer.beer} </span>
    <span> {props.beer.style} </span>
  </div>
)

export default BeerEntry;

import React from 'react';

export default function CheeseList(props) {
  const jsxCheeses = props.cheeses.map(cheese => (
    cheese = (<li>{cheese}</li>)
  ));
  return (
    <ul className="cheese-list">
      {jsxCheeses}
    </ul>
  );
}

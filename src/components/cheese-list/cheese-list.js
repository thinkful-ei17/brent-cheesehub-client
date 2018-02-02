import React from 'react';

export default function CheeseList(props) {
  const jsxCheeses = props.cheeses.map((cheese, index) => (
    <li key={index}>{cheese}</li>
  ));
  return (
    <ul className="cheese-list">
      {jsxCheeses}
    </ul>
  );
}

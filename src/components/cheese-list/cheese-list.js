import React from 'react';
import { connect } from 'react-redux';


export function CheeseList(props) {
  // componentDidMount(props.dispatch(fetchCheeses))
  const jsxCheeses = props.cheeses.map((cheese, index) => (
    <li key={index}>{cheese}</li>
  ));
  return (
    <ul className="cheese-list">
      {jsxCheeses}
    </ul>
  );
}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
});

export default connect(mapStateToProps)(CheeseList);

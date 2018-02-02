import React from 'react';
import { connect } from 'react-redux';


export class CheeseList extends React.Component {
  // componentDidMount(props.dispatch(fetchCheeses))
  render() {
    const jsxCheeses = this.props.cheeses.map((cheese, index) => (
      <li key={index}>{cheese}</li>
    ));
    return (
      <ul className="cheese-list">
        {jsxCheeses}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses,
});

export default connect(mapStateToProps)(CheeseList);

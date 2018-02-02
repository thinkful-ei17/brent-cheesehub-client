import React from 'react';

import CheeseList from './components/cheese-list/cheese-list';
import './App.css';

class App extends React.Component {
  render() {
    const cheesesArray = [
      'Bath Blue',
      'Barkham Blue',
      'Buxton Blue',
    ];
    return (
      <CheeseList cheeses={cheesesArray} />
    );
  }
}

export default App;

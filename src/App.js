import React, { Component } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}
export default App;

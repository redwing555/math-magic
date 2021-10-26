import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
// import Quotes from './pages/Quotes';
import NotMatch from './pages/NotMatch';
import Quotes from './pages/Quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </>
    );
  }
}
export default App;

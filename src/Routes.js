import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
  
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
      </Switch>
    )
  }
}

export default Routes;
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cities from './components/Cities';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/cities" render={() => <Cities />}/>
        <Route exact path="/bikes" render={() => <h1>bikes page</h1>}/>
      </Switch>
    )
  }
}

export default Routes;
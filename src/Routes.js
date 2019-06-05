import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
  
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/cities" render={() => <h1>cities page</h1>}/>
        <Route exact path="/bikes" render={() => <h1>bikes page</h1>}/>
      </Switch>
    )
  }
}

export default Routes;
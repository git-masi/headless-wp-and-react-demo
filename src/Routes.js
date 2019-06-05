import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
  
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>welcome to the home page!</h1>}/>
      </Switch>
    )
  }
}

export default Routes;
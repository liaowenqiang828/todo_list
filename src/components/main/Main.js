import React, { Component } from 'react';
import './main.css';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AllEvents from './allEvents/AllEvents';
import CompletedEvents from './completedEvent/CompletedEvents';
import UncompletedEvents from './uncompletedEvents/UncompletedEvents';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/completed' component={CompletedEvents} />
          <Route path='/unCompleted' component={UncompletedEvents} />
          <Route exact path='/' component={AllEvents} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default connect(null ,null)(Main);
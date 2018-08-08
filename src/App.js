import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import * as fetchActions from './actions/fetchEvents';
import EventList from './components/eventList';

class App extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To check out events in Washington DC, Maryland area, <button onClick={this.handleClick} >Click Me! </button>
        </p>
        <EventList/>
      </div>
    );
  }
  handleClick() {
    this.props.fetchActions.fetchEvents();
  };
}

App.propTypes = {
  fetchActions: PropTypes.object,
  events: PropTypes.array
};


function mapDispatchToProps(dispatch) {
  return {
    fetchActions: bindActionCreators(fetchActions, dispatch)
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(App);

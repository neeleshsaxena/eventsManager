import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';

// import logo from './abbeyRoad.jpg';
import './App.css';
import * as cityAction from './actions/city';
import EventList from './components/eventList';
import CityPicker from './components/cityPicker';
import 'react-power-select/dist/react-power-select.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.props.cityAction.fetchCityList();
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            Events Manager
          </h1>
        </header>
        <div className='App-intro'>
            <p className='text'> Select an area to check out events </p>
            <div className='city-power-select'><CityPicker/></div>
          </div>
        <div className='App-main'>
          <div className='App-events-list'><EventList/></div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  events: PropTypes.array,
  cityAction: PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return {
    cityAction: bindActionCreators(cityAction, dispatch)
  };
}

export default connect(
  undefined,
  mapDispatchToProps
)(App);

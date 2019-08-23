import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { PowerSelect } from 'react-power-select';
import {bindActionCreators} from 'redux';

import * as cityActions from '../actions/city';
import 'react-power-select/dist/react-power-select.css'

class cityPicker extends React.Component {

    handleChange = (option) => {
      this.props.cityActions.selectCity(option);
    }


    render() {
      return (
        <PowerSelect
        options={this.props.cityList}
        selected={this.props.selectedCity}
        onChange={this.handleChange}
      />
      );
    }
}

cityPicker.propTypes = {
  cityList: PropTypes.array,
  selectedCity: PropTypes.string,
  cityActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    cityList: state.cities.cityList,
    selectedCity: state.cities.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cityActions: bindActionCreators(cityActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cityPicker);
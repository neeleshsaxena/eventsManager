import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';


class eventList extends React.Component {  
  renderData() {
    return <div>
      <ul>
        {this.props.events.map(function(event, index){
          return <li key={index}>{event.name}</li>
        })}
      </ul>
    </div>;
  }
  
  
  render() {
    return (
      <div className='events-api'>
          {this.props.events.length > 0 ?
            this.renderData()
            :
            <div className='no-results'>
              Zilch!
            </div>
          }
      </div>
    );
  }
}

eventList.propTypes = {
  events: PropTypes.array
};

function mapStateToProps(state) {
  return {
    events: state.events
  };
}


// export default postList;
export default connect(
  mapStateToProps,
  undefined
)(eventList);
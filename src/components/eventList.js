import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class eventList extends React.Component {

  renderData(rows) {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Concert Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Book here</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right"><a href={row.link}>Click to Book</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
  
  render() {
    return (
      <div className='events-api'>
          {this.props.events.length > 0 ?
            this.renderData(this.props.events)
            :
            <div className='no-results'>
              Zilch
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
  mapStateToProps
)(eventList);
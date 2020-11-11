import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from '../eventList/EventList';

class AllEvents extends Component {
  render() {
    return (
      <div>
        <EventList events={this.props.allEvents} />
      </div>
    );
  }; 
}

const mapStateToProps = (state) => {
  return {
    allEvents: state.data,
  };
};

export default connect(mapStateToProps, null)(AllEvents);
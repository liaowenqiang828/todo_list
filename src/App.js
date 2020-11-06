import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';
import getAllDataAction from './store/action/getAllDataAction';
import {connect} from 'react-redux';
import AddButton from './components/addEvent/AddEvent';

class App extends Component {

  componentDidMount() {
    this.props.getAllDataAction();
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <AddButton />
        <Main events={this.props.events} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDataAction() {
      dispatch(getAllDataAction());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.data,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

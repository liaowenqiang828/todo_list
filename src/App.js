import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';
import getAllDataAction from './store/action/getAllDataAction';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getAllDataAction();
    console.log('.....');
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
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

export default connect(null, mapDispatchToProps)(App);

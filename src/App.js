import React, { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';
import { getAllDataAction } from './store/action/actions';
import { connect } from 'react-redux';
import AddEvent from './components/main/addEvent/AddEvent';
import Footer from './components/footer/Footer';

class App extends Component {

  componentDidMount() {
    this.props.getAllDataAction();
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <AddEvent />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDataAction: () => {
      dispatch(getAllDataAction());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    checkedIdList: state.checkedIdList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

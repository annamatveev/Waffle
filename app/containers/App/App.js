import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid/Grid';
import clickOnSquare from './Actions';

class App extends Component {
  render() {
    const { squares } = this.props;
    return (
      <div className="app">
        <Grid squares={squares} handleSquare={this.props.clickOnSquare}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.squares,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnSquare: (index) => dispatch(clickOnSquare(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Grid from '../../components/Grid/Grid';
import { makeSelectGridSquares } from './Selector'
import { clickOnSquare, addSquare } from './Actions';

class App extends Component {
  render() {
      console.log('App is rendered');
    const { squares } = this.props;
    return (
      <div className="app">
          <button onClick={this.props.addSquare}>Test</button>
          <Grid squares={squares} handleSquare={this.props.clickOnSquare}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    squares: makeSelectGridSquares()
})

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnSquare: (index) => dispatch(clickOnSquare(index)),
    addSquare: () => dispatch(addSquare()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

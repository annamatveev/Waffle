import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Grid from '../../components/Grid/Grid';
import {clickOnAnnaSquare, clickOnDanielSquare} from './Actions';
import {makeSelectDanielsWaffle, makeSelectAnnasWaffle} from './Selector'

class App extends Component {
  render() {
    const {annaSquares, danielSquares} = this.props;
    return (
      <div className="app">
        <div>Anna's Waffle</div>
        <Grid owner={'Anna'} squares={annaSquares} handleSquare={this.props.clickOnAnnaSquare}/>
        <div>Daniel's Waffle</div>
        <Grid owner={'Daniel'} squares={danielSquares} handleSquare={this.props.clickOnDanielSquare}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  annaSquares: makeSelectAnnasWaffle(),
  danielSquares: makeSelectDanielsWaffle(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnAnnaSquare: (index) => dispatch(clickOnAnnaSquare(index)),
    clickOnDanielSquare: (index) => dispatch(clickOnDanielSquare(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
